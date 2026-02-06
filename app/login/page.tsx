// "use client";

// import { useState } from "react";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [msg, setMsg] = useState("");

//   const sendOtp = async () => {
//     const res = await fetch("/api/auth/send-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     });

//     const data = await res.json();
//     setMsg(res.ok ? "OTP sent to email" : data.error);
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "100px auto" }}>
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Enter email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         style={{ width: "100%", padding: 10 }}
//       />

//       <button onClick={sendOtp} style={{ marginTop: 10 }}>
//         Send OTP
//       </button>

//       {msg && <p>{msg}</p>}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const sendOtp = async () => {
    if (!email) {
      setError(true);
      setMessage("Please enter your email");
      return;
    }

    setLoading(true);
    setMessage("");
    setError(false);

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send OTP");
      }

      setMessage("OTP sent to your email");
    } catch (err: any) {
      setError(true);
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>
          Enter your email to receive a one-time password
        </p>

        <input
          type="email"
          placeholder="you@example.com"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={sendOtp}
          disabled={loading}
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>

        {message && (
          <p
            className={`${styles.message} ${error ? styles.error : styles.success
              }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
