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
  const res = await fetch(`${process.env.VERCEL_URL}api/messages`);
  const data: messageData = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
