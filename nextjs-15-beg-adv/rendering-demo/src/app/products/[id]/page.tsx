// generateStaticParams function runs at build time.
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<React.JSX.Element> {
  const { id } = await params;

  return (
    <>
      <h1>
        Product {id} Details rendered at {new Date().toLocaleString()}
      </h1>
    </>
  );
}
