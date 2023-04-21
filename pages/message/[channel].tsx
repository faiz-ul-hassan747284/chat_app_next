import ChatBox from "@/components/message/ChatBox";
import { messagesData, usersData } from "@/lib/types";
import Pusher from 'pusher-js';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPageContext } from "next";

function Message({ data, colorObj }: { data: messagesData, colorObj:{} }) {
  const router = useRouter()
  const {channel} = router.query

  useEffect(() => {
      const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
        cluster: process.env.NEXT_PUBLIC_CLUSTER!,
      });
      const pusherChannel = typeof channel === 'string' ? pusher.subscribe(channel) : null;
      pusherChannel?.bind('new-message', (mdata: any) => {
        router.push(`/message/${channel}`)
      });
      return () => {
        pusherChannel?.unbind_all();
        pusherChannel?.unsubscribe();
        pusher.disconnect();
      };
    }, []);

  return (
    <main>
      <ChatBox messages={data} colorObj={colorObj} />
    </main>
  );
}

export default Message;

export async function getServerSideProps(context: NextPageContext) {
  const { channel } = context.query;
  const params = new URLSearchParams();
  if (typeof channel === 'string') {
    params.append('channel', channel);
  }

  const API_BASE = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.API_BASE;
  const res = await fetch(`${API_BASE}/api/messages?${params}`);
  const usersRes = await fetch(`${API_BASE}/api/users`);
  const data: messagesData = await res.json();
  const users: usersData = await usersRes.json()
  const colorObj = users.users.reduce((acc:any, { name, color }) => {
    acc[name] = color;
    return acc;
  }, {});
  return {
    props: { data, colorObj }, // will be passed to the page component as props
  };
}
