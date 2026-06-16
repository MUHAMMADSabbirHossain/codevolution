"use client";

export default function ReviewIdError({ error }: { error: Error }) {
  console.log(error);

  return (
    <>
      {error.message}
      <hr />
      {error.name}
      <hr />
      {error.cause}
      <hr />
      {error.stack}
    </>
  );
}
