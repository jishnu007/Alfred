"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Search from "@/components/search";
import SuggestionCard from "@/components/suggestion-card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Search />
      </main>
    </div>
  );
}
