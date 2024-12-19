"use client";
import { useState } from "react";
import styles from "../login/login.module.scss";
import Link from "next/link";
import GoogleButton from "react-google-button";
import { UserAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const { googleSignIn } = UserAuth();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Add sign-up logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({ username, email, password });
  };

  const handleGoogleSignIn = async () => {
    try {
      const res = await googleSignIn();
      if (res) {
        router.push("/chat");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Create an account</h2>

        <div className={styles.googleSignInButton}>
          <GoogleButton
            onClick={handleGoogleSignIn}
            label="Sign up with Google"
          />
        </div>
        <span className={styles.divideror}>or</span>
        <form onSubmit={handleSignUp}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              required
              value={username}
              placeholder="Enter your username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              placeholder="Confirm your password..."
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>
          <span className={styles.footerText}>
            Already have an account? <Link href={"/auth/login"}>Sign In</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
