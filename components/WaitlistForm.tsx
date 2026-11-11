"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/encore/Button";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");

      setStatus("success");
      setMessage("Successfully registered!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md" noValidate>
      <div className="flex flex-col gap-4 sm:flex-row">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 border-2 border-white bg-transparent px-4 py-2 font-display text-white
                     placeholder:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Joining…" : "JOIN THE WAITLIST"}
        </Button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-3 min-h-6 text-sm ${status === "error" ? "text-red-300" : "text-white"}`}
      >
        {message}
      </p>
    </form>
  );
}