export default function TestPage2() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #0f172a, #1e293b)",
      fontFamily: "sans-serif",
    }}>
      <div style={{
        background: "white",
        padding: "24px",
        borderRadius: "12px",
        width: "320px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        textAlign: "center",
      }}>
        <h1 style={{ marginBottom: "8px" }}>🚀 Test Page 2</h1>
        <p style={{ color: "#555", marginBottom: "16px" }}>
          This is a sample page with some basic UI styling.
        </p>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
          <button style={{
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            cursor: "pointer"
          }}>
            Primary Action
          </button>

          <button style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            background: "white",
            cursor: "pointer"
          }}>
            Secondary Action
          </button>
        </div>

        <div style={{
          marginTop: "16px",
          fontSize: "12px",
          color: "#888"
        }}>
          Status: Ready ✅
        </div>
      </div>
    </div>
  );
}