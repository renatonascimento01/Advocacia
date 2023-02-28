import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import colors from "../styles/colors";
import { isMobile as nextMobile } from "react-device-detect";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(nextMobile);
  }, []);

  return (
    <div>
      <Carousel showThumbs={false} showArrows={false} dynamicHeight={false}>
        <div>
          <img
            src="/3.jpeg"
            style={{
              width: !isMobile ? "100%" : "100%",
              height: !isMobile ? "500px" : "400px",
            }}
          />
        </div>
        <div>
          <img
            src="/2.jpeg"
            style={{
              width: !isMobile ? "100%" : "100%",
              height: !isMobile ? "500px" : "400px",
            }}
          />
        </div>
        <div>
          <img
            src="/1.jpeg"
            style={{
              width: !isMobile ? "100%" : "100%",
              height: !isMobile ? "500px" : "400px",
            }}
          />
        </div>
      </Carousel>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingRight: "15%",
          paddingLeft: "15%",
          marginTop: "30px",
          marginBottom: "30px",
          textAlign: "center",

          backgroundColor: "#FFF",
          borderWidth: 1,
          borderColor: "#CFCFCF",
          borderStyle: "solid",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          margin: "10px 5%",
        }}
      >
        <span
          style={{
            fontSize: 42,
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            color: colors.secondary,
            paddingTop: 50,
          }}
        >
          QUEM SOMOS
        </span>
        <span
          style={{
            textAlign: "center",
            fontSize: 24,
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          As sócias resolveram fundar a empresa no ano de 2020. Ambas sempre
          sonharam em atuar na área de Cessão de Crédito, pois sabem dos altos
          juros cobrados no ato da contratação de empréstimo bancários.
          <br />
          Deram início com apenas 10 funcionários e hoje conta com mais de 80
          colaboradores. <br />
          Hoje o maior desafio é fazer crescer cada vez no mercado,
          proporcionado realizações de sonhos aos seus clientes
          <br />
        </span>
      </div>
    </div>
  );
}
