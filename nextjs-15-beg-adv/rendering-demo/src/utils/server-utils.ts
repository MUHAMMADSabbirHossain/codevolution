import "server-only"; // server only code cannot be imported into client components

export const serverSideFunction = () => {
  console.log(
    `use multiple libraries,
        use environment variables, intreact with a database,
        process confidential information`,
  );

  return "server result";
};
