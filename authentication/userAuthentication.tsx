import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";

function UserAuthentication({ children }: { children: React.ReactElement }) {
  const { userName } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    // check if the user is not logged in and is not on the home page
    if (!userName && router.pathname !== "/") {
      let path = router.asPath;
      if (router.asPath.includes('callback_url=/user?')) {
        path = path.replace(/user\?callback_url=\//g, '');
      }
      console.log(path)

      router.push(`/user?callback_url=${path}`);
    }
    if (userName && router.asPath.includes('/user')) {
      const { callback_url } = router.query;
      console.log('callback_url',callback_url)
      if (callback_url) {
        router.push(String(callback_url))
      }
      else { router.back(); }
    }}, [userName, router.pathname, router]);

  return children;
}

export default UserAuthentication;
