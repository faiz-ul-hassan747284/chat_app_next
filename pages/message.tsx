import { useEffect,useState } from "react";
import ChatBox from "@/components/message/ChatBox";
import { messagesData, usersData } from "@/lib/types";
import io from 'Socket.IO-client'

function Message({ data, colorObj }: { data: messagesData, colorObj:{} }) {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socketInitializer = async () => {
      await fetch('/api/socket');
      const newSocket = io();
      setSocket(newSocket);
      newSocket.on('connect', () => {
        console.log('connected');
      });
    };
    socketInitializer();
  }, []);

  return (
    <main>
      <ChatBox messages={data} colorObj={colorObj} />
    </main>
  );
}

export default Message;

export async function getServerSideProps() {
  const API_BASE = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.API_BASE;
  const res = await fetch(`${API_BASE}/api/messages`);
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
