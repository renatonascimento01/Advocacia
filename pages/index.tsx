import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Title from "../components/Title";

export default function Home() {
  return (
    <div>
      <div>
        <span>Home</span>
      </div>
      <div
        style={{
          marginLeft: 80,
          marginRight: 80,
          marginTop: 10,
        }}>
        <Carousel>
          <div>
            <img src="/amanda_alves.jpg" />
          </div>
          <div>
            <img src="/mylaine_ivo.png" />
          </div>
          <div>
            <img src="/tmplogo.png" />
          </div>
        </Carousel>
      </div>
    </div>


  )
}
