import Navbar from "@/components/shared/Navbar";
import ChatBox from "@/components/message/ChatBox";
import { messageData } from "@/lib/types";
function Message({ data }: { data: messageData }) {
  return (
    <main>
      <Navbar />
      <ChatBox messages={data} />
    </main>
  );
}

export default Message;

export async function getServerSideProps() {
  const API_BASE = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.API_BASE;
  const res = await fetch(`${API_BASE}/api/messages`);
  const data: messageData = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
