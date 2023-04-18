import "@/styles/globals.css";
import { UserContextProvider } from "@/context/UserContext";
import UserAuthentication from "@/authentication/userAuthentication";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] });

import Navbar from "@/components/shared/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
    <UserAuthentication>
    <main className={inter.className}>
    <Navbar />
      <Component {...pageProps} />
    </main>
    </UserAuthentication>
    </UserContextProvider>
  );
}
