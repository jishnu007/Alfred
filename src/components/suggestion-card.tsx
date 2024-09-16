"use client";
import React from "react";
import styles from "./suggestion-card.module.css";

interface SuggestionCardProps {
  handleClick: (suggestion: string) => void;
  suggestion: string;
}

export default function SuggestionCard({
  suggestion,
  handleClick,
}: SuggestionCardProps) {
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
