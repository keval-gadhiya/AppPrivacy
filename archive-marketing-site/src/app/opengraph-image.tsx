import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Decision Journal — Think Better. Decide Better.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const iconDataUri = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/app-icon-512.png")
).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3F4F6",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconDataUri} width={92} height={92} alt="" />
          <div style={{ fontSize: 30, fontWeight: 600, color: "#141414", letterSpacing: "-0.02em" }}>
            Decision Journal
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 96,
              lineHeight: 1.02,
              color: "#141414",
              letterSpacing: "-0.04em",
              fontWeight: 600,
            }}
          >
            <span>Think Better.</span>
            <span>Decide Better.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#6b6b6b", maxWidth: 820, lineHeight: 1.4 }}>
            Capture important decisions, reflect on outcomes, and improve your judgment over time.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#9a9a9a" }}>
          <span>iOS &amp; Android</span>
          <span>·</span>
          <span>Private by design</span>
          <span>·</span>
          <span>Works offline</span>
        </div>
      </div>
    ),
    size
  );
}
