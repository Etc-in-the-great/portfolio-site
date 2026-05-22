import "./globals.css";

export const metadata = {
  title: "Personal Portfolio | Frontend, AI Tools, Python",
  description:
    "A personal portfolio for learning frontend development, AI tool building, and Python utilities.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
