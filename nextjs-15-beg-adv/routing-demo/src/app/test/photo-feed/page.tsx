import wondersImages from "@/app/photo-feed/wonders";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

export default function TestPhotoFeedPage(): JSX.Element {
  return (
    <>
      <main>
        <h1 className="text-center text-3xl font-bold my-4">
          New Wonders of the World
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {wondersImages.map((p) => {
            return (
              <Link key={p.id} href={`/test/photo-feed/${p.id}`}>
                <Image
                  alt={p.name}
                  src={p.src}
                  className="w-full object-cover aspect-square"
                />
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
