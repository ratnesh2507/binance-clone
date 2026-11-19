// src/App.tsx
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Stocks from "./pages/Stocks";
import { api } from "./lib/api";
import { useAuthStore } from "./store/useAuthStore";
import "./index.css";

export function App() {
  const { setUser, setChecking, setSessionError } = useAuthStore();

  useEffect(() => {
    async function checkSession() {
      try {
        const { data } = await api.get("/auth/me");
        setUser(data.user);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          setUser(null);
        } else {
          setSessionError("Could not check your session. Try again.");
        }
      } finally {
        setChecking(false);
      }
    }

    checkSession();
  }, [setUser, setChecking, setSessionError]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stocks" element={<Stocks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
