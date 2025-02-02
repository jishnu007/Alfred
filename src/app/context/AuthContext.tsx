/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { auth } from "../firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
} from "firebase/auth";

// Define a type for AuthContext
interface AuthContextType {
  user: User | null;
  googleSignIn: () => any;
  logout: () => void;
}
const authContextDefaultValues: AuthContextType = {
  user: null,
  googleSignIn: () => {},
  logout: () => {},
};

// Initialize AuthContext with a default value of undefined
const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((res) => res)
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  };

  const logout = () => {
    signOut(auth).catch((error) => {
      console.error("Sign out error:", error);
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, [user]);

  const value = {
    user,
    googleSignIn,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for using auth context
export const UserAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within an AuthContextProvider");
  }
  return context;
};
