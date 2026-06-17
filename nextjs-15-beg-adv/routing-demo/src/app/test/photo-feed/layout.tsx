import { JSX, ReactNode } from "react";

type PageProps = {
  children: ReactNode;
  modal: ReactNode;
};
export default function TestPhotoFeedLayout({
  children,
  modal,
}: PageProps): JSX.Element {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
