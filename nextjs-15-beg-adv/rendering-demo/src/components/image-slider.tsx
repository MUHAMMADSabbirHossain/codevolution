"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function ImageSlider() {
  const settings = {
    dots: true,
  };

  return (
    <>
      <>
        <div className="image-slider-container">
          <Slider {...settings}>
            <div>
              <Image
                src={"https://picsum.photos/400/200"}
                alt="image"
                width={400}
                height={200}
              />
            </div>
            <div>
              <Image
                src={"https://picsum.photos/400/200"}
                alt="image"
                width={400}
                height={200}
              />
            </div>
            <div>
              <Image
                src={"https://picsum.photos/400/200"}
                alt="image"
                width={400}
                height={200}
              />
            </div>
            <div>
              <Image
                src={"https://picsum.photos/400/200"}
                alt="image"
                width={400}
                height={200}
              />
            </div>
            <div>
              <Image
                src={"https://picsum.photos/400/200"}
                alt="image"
                width={400}
                height={200}
              />
            </div>
            <div>
              <Image
                src={"https://picsum.photos/400/200"}
                alt="image"
                width={400}
                height={200}
              />
            </div>
          </Slider>
        </div>
      </>
    </>
  );
}
