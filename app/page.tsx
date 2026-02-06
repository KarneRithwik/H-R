import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h1>Welcome</h1>

      <Link href="/login">
        <button
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            background: "#4f46e5",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Go to Login
        </button>
      </Link>
    </div>
  );
}
