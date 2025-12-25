"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function saveEmail() {
    if (!email) {
      setMessage("Please enter an email.");
      return;
    }

    const { error } = await supabase
      .from("subscribers")
      .insert({ email });

    if (error) {
      setMessage("Something went wrong. Try again.");
    } else {
      setMessage("Thank you. You are now part of the Free Word.");
      setEmail("");
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#0a0a0a",
      color: "#ffffff",
      padding: "40px",
      fontFamily: "serif"
    }}>
      <h1 style={{ fontSize: "48px" }}>Augustine Davids</h1>

      <p style={{ marginTop: "20px", fontSize: "20px", maxWidth: "600px" }}>
        Stories, ideas, and words for citizens whose loyalty is beyond borders
        and only to humanity.
      </p>

      <div style={{ marginTop: "40px", maxWidth: "400px" }}>
        <p>Read freely. Join the Free Word.</p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px"
          }}
        />

        <button
          onClick={saveEmail}
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            cursor: "pointer"
          }}
        >
          Join
        </button>

        {message && (
          <p style={{ marginTop: "10px", opacity: 0.8 }}>{message}</p>
        )}
      </div>
    </main>
  );
}
