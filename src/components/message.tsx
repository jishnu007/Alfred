import React from "react";
import styles from "./message.module.css";
import Image from "next/image";
interface MessageProps {
  isUserMessage: boolean;
  text: string;
}

export default function Message({ isUserMessage, text }: MessageProps) {
  return (
    <div className={isUserMessage ? styles.userMessage : styles.botMessage}>
      {!isUserMessage ? (
        <Image
          className={styles.chatBotIcon}
          src="/images/alfred_logo2.png"
          alt="Alfred logo"
          width={36}
          height={36}
          priority
        />
      ) : null}
      <p className={styles.messageContent}>{text}</p>
    </div>
  );
}
