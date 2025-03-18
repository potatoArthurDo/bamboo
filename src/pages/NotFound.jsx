import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: "15rem",
          color: "var(--primary-golden)",
        }}
      >
        404
      </h1>
      <p style={{ fontSize: "2rem", color: "var(--text-background)" }}>
        Oops! The "dot" you're looking for doesn't exist.
      </p>
      <button
        style={{
          backgroundColor: "var(--primary-golden)",
          border: "none",
          width: "250px",
          height: "50px",
          borderRadius: "10px",
          margin: "30px",
        }}
      >
        <Link
          to="/"
          style={{
            fontWeight: "600",
            fontSize: "1.8rem",
            color: "var(--primary-green)",
          }}
        >
          Back to Home
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
