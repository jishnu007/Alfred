"use client";
import { useState } from "react";
import styles from "./login.module.scss";
import Link from "next/link";
import { UserAuth } from "@/app/context/AuthContext";
import GoogleButton from "react-google-button";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { googleSignIn } = UserAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Add login logic here
    console.log({ email, password });
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
        <h2>Sign in to your account</h2>
        <div className={styles.googleSignInButton}>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>

        <span className={styles.divideror}>or</span>
        <form onSubmit={handleLogin}>
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

          <button type="submit" className={styles.submitButton}>
            Sign in
          </button>
          <span className={styles.footerText}>
            {"Don`t have an account?"}
            <Link href={"/auth/signup"}>Sign Up</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
