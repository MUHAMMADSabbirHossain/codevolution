"use client";

import Image from "next/image";
// import { serverSideFunction } from "@/utils/server-utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/components/theme-provider";

export default function ClientRoutePage() {
  // const result = serverSideFunction();
  const theme = useTheme();

  const settings = {
    dots: true,
  };

  return (
    // <>
    //   <div className="image-slider-container">
    //     <Slider {...settings}>
    //       <div>
    //         <Image
    //           src={"https://picsum.photos/400/200"}
    //           alt="image"
    //           width={400}
    //           height={200}
    //         />
    //       </div>
    //       <div>
    //         <Image
    //           src={"https://picsum.photos/400/200"}
    //           alt="image"
    //           width={400}
    //           height={200}
    //         />
    //       </div>
    //       <div>
    //         <Image
    //           src={"https://picsum.photos/400/200"}
    //           alt="image"
    //           width={400}
    //           height={200}
    //         />
    //       </div>
    //       <div>
    //         <Image
    //           src={"https://picsum.photos/400/200"}
    //           alt="image"
    //           width={400}
    //           height={200}
    //         />
    //       </div>
    //       <div>
    //         <Image
    //           src={"https://picsum.photos/400/200"}
    //           alt="image"
    //           width={400}
    //           height={200}
    //         />
    //       </div>
    //       <div>
    //         <Image
    //           src={"https://picsum.photos/400/200"}
    //           alt="image"
    //           width={400}
    //           height={200}
    //         />
    //       </div>
    //     </Slider>
    //   </div>
    // </>
    <>
      <h1 style={{ color: theme.colors.primary }}>Client router page</h1>
    </>
  );
}
