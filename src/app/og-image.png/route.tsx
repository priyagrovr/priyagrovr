import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #030712 0%, #1e1b4b 50%, #030712 100%)",
          position: "relative",
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.3), transparent)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.25), transparent)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            position: "relative",
          }}
        >
          {/* Avatar circle */}
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "30px",
              background: "linear-gradient(135deg, #a855f7, #8b5cf6, #3b82f6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "52px",
              fontWeight: 700,
              color: "white",
              fontFamily: "Arial",
              boxShadow: "0 20px 60px rgba(168,85,247,0.4)",
            }}
          >
            PG
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              background: "linear-gradient(90deg, #a855f7, #8b5cf6, #3b82f6)",
              backgroundClip: "text",
              color: "transparent",
              fontFamily: "Arial",
              lineHeight: 1.1,
            }}
          >
            Priya Grover
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "28px",
              color: "#d1d5db",
              fontFamily: "Arial",
              fontWeight: 500,
            }}
          >
            Senior Full Stack Developer
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            {["React", "Next.js", "Node.js", "Python", "AI/LLM"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "999px",
                    background: "rgba(168,85,247,0.15)",
                    border: "1px solid rgba(168,85,247,0.3)",
                    color: "#c084fc",
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "Arial",
                    display: "flex",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "18px",
              color: "#9ca3af",
              fontFamily: "Arial",
              marginTop: "8px",
            }}
          >
            13+ Years Experience &bull; Freelancer &bull; Mohali, India
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
