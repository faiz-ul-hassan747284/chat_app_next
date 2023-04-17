import Navbar from "@/components/shared/Navbar";
import ChatBox from "@/components/message/ChatBox";
function Message({data}) {
  return (
    <main>
      <Navbar />
      <ChatBox messages={data}/>
    </main>
  );
}

export default Message;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_BASE}api/messages`);
  const data = await res.json();
  return {
    props: {data}, // will be passed to the page component as props
  }
}
