"use client";

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import styles from "./search.module.scss";
import Image from "next/image";
import SuggestionCard from "./suggestion-card";
import Message from "./message";
import AOS from "aos";
import "aos/dist/aos.css";

interface MessageType {
  text: string;
  isUserMessage: boolean;
}

interface SearchProps {}

export interface SearchRef {
  handleClearChat: () => void;
}

const Search = forwardRef<SearchRef, SearchProps>((props, ref) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true); // Show suggestions initially
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);

  useEffect(() => {
    // Set isScaled to true after component mounts
    const timer = setTimeout(() => {
      setIsScaled(true);
    }, 100); // Short delay to trigger the transition
    return () => clearTimeout(timer);
  }, []);

  const suggestions = [
    "How can I manage stress effectively?",
    "Tips for improving my daily mindfulness.",
    "What are some ways to boost emotional resilience?",
    "How can I develop a positive mindset?",
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm === "") return;

    // Perform search action or log the search term
    console.log("Searching for:", searchTerm);

    // Add the user's message to the chat
    const newMessage = { text: searchTerm, isUserMessage: true };
    setMessages([...messages, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        text: "I'm here to help you with that!",
        isUserMessage: false,
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);

    // Hide suggestions after the first message is sent
    setShowSuggestions(false);
    setSearchTerm("");
  };

  const handleSuggestionClick = (searchText: string) => {
    setSearchTerm(searchText);
  };

  const handleClearChat = () => {
    console.log("comn herer ...............");
    setMessages([]);
    setShowSuggestions(true);
  };

  useImperativeHandle(ref, () => ({
    handleClearChat,
  }));

  return (
    <>
      {messages.length === 0 && (
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src="/images/logo3.png"
            alt="Alfred logo"
            width={350}
            height={300}
            priority
            data-aos="fade-in"
            data-aos-duration="1000"
          />
        </div>
      )}
      {messages.length !== 0 ? (
        <div className={styles.messagesContainer}>
          {messages.map((message, index) => (
            <Message
              key={index}
              text={message.text}
              isUserMessage={message.isUserMessage}
            />
          ))}
        </div>
      ) : null}
      <div className={styles.searchAndSuggestionContainer}>
        {showSuggestions ? (
          <div className={styles.suggestions}>
            {suggestions.map((suggestion, index) => (
              <SuggestionCard
                key={index}
                suggestion={suggestion}
                handleClick={handleSuggestionClick}
                data-aos="fade-down"
              />
            ))}
          </div>
        ) : null}
        <div className={styles.searchFormOuter}>
          <form
            onSubmit={handleSubmit}
            className={`${styles.searchForm} ${isScaled ? styles.scaled : ""}`}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="What can I help you with?"
              className={styles.searchInput}
            />
            {searchTerm ? (
              <button type="submit" className={`${styles.sendButton}`}>
                <Image
                  src="/images/send_icon3.png"
                  alt="Alfred logo"
                  width={26}
                  height={26}
                  priority
                  color="blue"
                />
              </button>
            ) : null}
            {!searchTerm ? (
              <button type="submit" className={styles.sendButton}>
                <Image
                  src="/images/microphone.png"
                  alt="Alfred logo"
                  width={26}
                  height={26}
                  priority
                  color="blue"
                />
              </button>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
});

Search.displayName = "Search";
export default Search;
