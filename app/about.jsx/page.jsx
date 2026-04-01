"use client";
import { useEffect } from "react";
import Home from "../page";

export default function AboutPage() {
  useEffect(() => { 
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  }, []);

  return <Home />;
}
