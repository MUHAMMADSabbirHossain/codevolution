import "client-only";

export const clientSideFunction = () => {
  console.log(
    `use window object,
        use local storage`,
  );

  return "client result";
};
