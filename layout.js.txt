export const metadata = {
  title: "Augustine Davids",
  description: "A literary home for the Free Word",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
