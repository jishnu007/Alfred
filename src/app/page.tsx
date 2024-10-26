"use client";
import styles from "./page.module.css";
import Search from "@/components/search";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Navbar from "./navbar";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const searchRef = useRef();

  const handleNewChat = () => {
    if (searchRef?.current) {
      searchRef?.current?.handleClearChat(); // Call the clearChat method in Chat
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar handleNewChat={handleNewChat} />
        <Search ref={searchRef} />
      </main>
    </div>
  );
}
