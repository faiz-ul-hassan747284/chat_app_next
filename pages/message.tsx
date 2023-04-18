import ChatBox from "@/components/message/ChatBox";
import { messagesData } from "@/lib/types";
function Message({ data }: { data: messagesData }) {
  return (
    <main>
      <ChatBox messages={data} />
    </main>
  );
}

export default Message;

export async function getServerSideProps() {
  const API_BASE = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.API_BASE;
  const res = await fetch(`${API_BASE}/api/messages`);
  const data: messagesData = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
