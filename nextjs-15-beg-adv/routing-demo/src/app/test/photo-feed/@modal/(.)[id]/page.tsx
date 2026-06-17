import wondersImages, { WonderImage } from "@/app/photo-feed/wonders";
import Modal from "@/components/modal";
import Image from "next/image";
import { JSX } from "react";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function TestPhotoFeedInterceptedIdPage({
  params,
}: PageProps): Promise<JSX.Element> {
  const { id } = await params;

  const photo = wondersImages.find((p) => p.id === id) as WonderImage;

  return (
    <>
      <Modal>
        {/* <div className="container mx-auto my-10"> */}
        {/* <div className="w-1/2 mx-auto"> */}
        <div>
          <h1 className="text-center text-3xl font-bold my-4">
            {photo?.name} (Intercepted)
          </h1>
        </div>

        <Image
          alt={photo?.name}
          src={photo?.src}
          className="w-full object-cover"
        />

        <div className="bg-white py-4">
          <h2 className="text-xl font-semibold">{photo.name}</h2>
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
        {/* </div> */}
        {/* </div> */}
      </Modal>
    </>
  );
}
