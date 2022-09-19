import React, { useState, useEffect } from "react";
import colors from "../styles/colors";
import { isMobile as nextMobile } from "react-device-detect";
import Title from "../components/Title";

export default function Socios() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(nextMobile);
  }, []);

  return (
    <div>
      <Title>Sócios</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <SocioPreview
          name="Amanda Alves"
          image="/amanda_alves.jpg"
          description="
            Amanda Alves é advogada formada na universadade 
            federal de pernambuco e atua ná area cívil a 10 anos.
            Trabalhou durante X anos na empresa Y e decidiu se dona
             do seu próprio negócio"
          isMobile={isMobile}
        ></SocioPreview>
        <SocioPreview
          name="Mylaine Ivo"
          image="/mylaine_ivo.png"
          description="
            Mylaine Ivo é advogada a 12 anos e atua na área
            de direito militar ajudando pensionistas das forças armadas
            a receberem seus direitos. 
          "
          isMobile={isMobile}
        ></SocioPreview>
      </div>
    </div>
  );
}

function SocioPreview({
  name,
  description,
  image,
  isMobile,
}: {
  name: string;
  description: string;
  image: string;
  isMobile: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: isMobile ? "100%" : "50%",
        height: 400,
        marginBottom: isMobile ? 25 : 0,
      }}
    >
      <img src={image} style={{ width: 220, height: 220, borderRadius: 110 }} />
      <span
        style={{
          marginTop: 15,
          color: colors.primary,
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        {name}
      </span>
      <span
        style={{
          marginLeft: 80,
          marginRight: 80,
          marginTop: 10,
          textAlign: "center",
        }}
      >
        {description}
      </span>
    </div>
  );
}
