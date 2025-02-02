"use client";
import styles from "../page.module.scss";
import Search from "@/components/search";
import Navbar from "../navbar";

export default function Chat() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <Search />
      </main>
    </div>
  );
}
