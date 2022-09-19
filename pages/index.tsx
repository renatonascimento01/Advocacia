import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div>
      <Carousel showThumbs={false} showArrows={false} dynamicHeight={false}>
        <div>
          <img src="/c1.webp" height={510} />
        </div>
        <div>
          <img src="/c2.webp" height={510} />
        </div>
        <div>
          <img src="/c3.webp" height={510} />
        </div>
      </Carousel>
    </div>
  );
}
