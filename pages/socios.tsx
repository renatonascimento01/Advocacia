import React from "react";
import colors from "../styles/colors";

export default function Socios() {
  return (
    <div>
      <h3 style={{ fontSize: 60, color: colors.primary, textAlign: "center" }}>
        Socios
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flex: 1
        }}
      >
        <SocioPreview
          style={{ flex: 0.5 }}
          name="Amanda Alves"
          image="/amanda_alves.jpg"
          description="
            Amanda Alves é advogada formada na universadade 
            federal de pernambuco e atua ná area cívil a 10 anos.
            Trabalhou durante X anos na empresa Y e decidiu se dona
             do seu próprio negócio"
        ></SocioPreview>
        <SocioPreview
          style={{ flex: 0.5 }}
          name="Mylaine Ivo"
          image="/mylaine_ivo.png"
          description="
            Mylaine Ivo é advogada a 12 anos e atua na área
            de direito militar ajudando pensionistas das forças armadas
            a receberem seus direitos. 
          "
        ></SocioPreview>
      </div>
    </div>
  );
}

function SocioPreview({
  name,
  description,
  image,
  style,
}: {
  name: string;
  description: string;
  image: string;
  style: object;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        ...style
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
      <div
        style={{
          backgroundColor: "red",
          paddingLeft: 80,
          paddingRight: 80,
          marginTop: 70,
        }}
      >
        {description}
      </div>
    </div>
  );
}
