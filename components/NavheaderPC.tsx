import React, { useState } from "react";
import { useRouter } from "next/router";
import colors from "../styles/colors";

export default function NavHeader() {
  return (
    <header
      style={{
        width: "100%",
        height: "85px",
        backgroundColor: colors.primary,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 25px",
      }}
    >
      <div>
        <img src="/logo.jpeg" width={80} height={80} />
      </div>
      <div>
        <NaveHeaderItem title="Home" url="/" />
        <NaveHeaderItem title="Área de atuação" url="/areas" />
        <NaveHeaderItem title="Equipe" url="/equipe" />
        <NaveHeaderItem title="Contato" url="/contato" />
      </div>
    </header>
  );
}

function NaveHeaderItem({ title, url }: { title: string; url: string }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const router = useRouter();
  return (
    <a
      href={url}
      style={{
        color: Boolean(!isMouseOver && router.pathname !== url)
          ? colors.silver
          : colors.gold,
        margin: "0px 20px",
        textDecoration: router.pathname === url ? "underline" : undefined,
        textDecorationColor:
          router.pathname === url ? colors.gold : colors.silver,
        textDecorationThickness: router.pathname === url ? "3px" : undefined,
        fontSize: 18,
        fontFamily: "Times New Roman", // fonte serifada
      }}
      onMouseEnter={() => {
        setIsMouseOver(true);
      }}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
    >
      {title}
    </a>
  );
}
