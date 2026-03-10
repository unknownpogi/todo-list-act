"use client";

import View from "@/features/list/view";
import LogIn from "@/features/log-in/view";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  // useEffect(() => {
  //   const jwt = localStorage.getItem("jwtToken");
  //   if (!jwt) {
  //     router.push("/login");
  //   }
  // }, []);

  return (
    <main>
      <View />
    </main>
  );
}
