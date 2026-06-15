import Link from "next/link";
import React from "react";

type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
};

export default async function ArticleDetails({
  params,
  searchParams,
}: Props): Promise<React.JSX.Element> {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;

  return (
    <>
      <article>
        <h1>Article details {articleId}</h1>
        <p>Reading in language {lang}</p>

        <div>
          <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
          <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
          <Link href={`/articles/${articleId}?lang=es`}>Read in Spanish</Link>
        </div>
      </article>
    </>
  );
}

// "use client";

// import Link from "next/link";
// import React, { use } from "react";

// type Props = {
//   params: Promise<{ articleId: string }>;
//   searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
// };

// export default function ArticleDetails({
//   params,
//   searchParams,
// }: Props): React.JSX.Element {
//   const { articleId } = use(params);
//   const { lang = "en" } = use(searchParams);

//   return (
//     <>
//       <article>
//         <h1>Article details {articleId}</h1>
//         <p>Reading in language {lang}</p>

//         <div>
//           <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
//           <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
//           <Link href={`/articles/${articleId}?lang=es`}>Read in Spanish</Link>
//         </div>
//       </article>
//     </>
//   );
// }
