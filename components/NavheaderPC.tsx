import React, { useState } from "react";
import { useRouter } from "next/router";
import colors from "../styles/colors";

export default function NavHeader() {
  return (
    <header
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: colors.primary,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px",
      }}
    >
      <div>
        <img src="/tmplogo.png" width={60} height={60} />
      </div>
      <div>
        <NaveHeaderItem title="Home" url="/" />
        <NaveHeaderItem title="Área de atuação" url="/areas" />
        <NaveHeaderItem title="Sócios" url="/socios" />
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
        color: !isMouseOver ? colors.white : colors.terceira,
        margin: "0px 20px",
        textDecoration: router.pathname === url ? "underline" : undefined,
        textDecorationColor:
          router.pathname === url ? colors.terceira : undefined,
        textDecorationThickness: router.pathname === url ? "3px" : undefined,
        fontSize: 18,
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
