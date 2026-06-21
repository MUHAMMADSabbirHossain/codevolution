export default async function Reviews() {
  await new Promise((resolve) => {
    setTimeout(resolve, 4000);
  });

  return (
    <>
      <h1>Reviews</h1>
    </>
  );
}
