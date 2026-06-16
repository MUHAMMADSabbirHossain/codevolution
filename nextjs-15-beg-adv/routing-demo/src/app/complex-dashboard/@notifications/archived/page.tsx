import { Card } from "@/app/components/card";
import Link from "next/link";

export default function Archived() {
  return (
    <>
      <Card>
        <div>Archived notifications</div>

        <div>
          <Link href="/complex-dashboard">Default</Link>
        </div>
      </Card>
    </>
  );
}
