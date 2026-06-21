import fs from "fs";
import ServerComponentTwo from "./server-component-two";
import ClientComponentOne from "./client-component-one";
import ClientComponentTwo from "./client-component-two";

export default function ServerComponentOne() {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  return (
    <div>
      ServerComponentOne
      <ServerComponentTwo />
      <ClientComponentTwo />
    </div>
  );
}
