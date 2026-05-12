import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume ATS Optimizer – Beat the Bots, Land the Interview",
  description: "Test your resume against major ATS systems, identify parsing failures, and get specific formatting fixes to improve keyword extraction and ranking."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0fcc7aed-ec0b-4faa-b1a0-91d8bdf4f1f1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
