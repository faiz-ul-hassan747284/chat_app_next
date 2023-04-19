import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";

function UserAuthentication({ children }: { children: React.ReactElement }) {
  const { userName } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    // check if the user is not logged in and is not on the home page
    if (!userName && router.pathname !== "/") {
      router.push("/user");
    }
  }, [userName, router.pathname]);

  return children;
}

export default UserAuthentication;
