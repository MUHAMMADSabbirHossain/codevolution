export const dynamicParams = true;
// ture will statically render pages on demand for any dynamic segments not listed in generateStaticParams()
// false will only statically render pages for the segments listed in generateStaticParams() and return a 404 for not included in our pre-rendered list.

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
