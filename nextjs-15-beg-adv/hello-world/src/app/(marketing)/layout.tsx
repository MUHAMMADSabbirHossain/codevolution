export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
        Header
      </header>

      {children}

      <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
        Footer
      </footer>
    </>
  );
}
