export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
        Footer
      </footer>
    </>
  );
}
