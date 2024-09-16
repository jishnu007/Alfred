"use client";
import React from "react";
import styles from "./suggestion-card.module.css";

export default function SuggestionCard({ suggestion, handleClick }: any) {
  return (
    <div
      className={styles.suggestionCard}
      onClick={() => handleClick(suggestion)}
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <span>{suggestion}</span>
    </div>
  );
}
