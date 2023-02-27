import React from "react";
import colors from "../styles/colors";
import Icon from "./Icon";
import SocialMediaBallIcon from "./SocialMediaBallIcon";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: 250,
        backgroundColor: colors.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 500,
        }}
      >
        <span style={{ fontSize: 12, fontWeight: "bold", color: colors.white }}>
          RIO DE JANEIRO
        </span>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 4 }}>
          <Icon
            name="map-marker-alt"
            color={colors.white}
            width={12}
            height={12}
          />
          <span
            style={{
              color: colors.white,
              fontSize: 10,
              width: 200,
              textAlign: "center",
            }}
          >
            Av. Embaixador Abelardo Bueno, 01/sala 215 Bloco Lagoa 01 – Barra da
            Tijuca – Rio de Janeiro/RJ Cep: 22775-040
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 4 }}>
          <Icon name="building" color={colors.white} width={12} height={12} />
          <span style={{ color: colors.white, marginLeft: 3, fontSize: 10 }}>
            +55 (21) 1234 5678
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 4 }}>
          <Icon name="phone" color={colors.white} width={12} height={12} />
          <span style={{ color: colors.white, marginLeft: 3, fontSize: 10 }}>
            +55 (21) 2277 4200
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 5,
        }}
      >
        {/* <SocialMediaBallIcon
          icon="facebook"
          color={colors.white}
          bgColor={colors.primary}
          size={20}
          link="https://www.instagram.com/mbrentabiliza/?igshid=NjY2NjE5MzQ%3D"
        /> */}
        <SocialMediaBallIcon
          icon="instagram"
          color={colors.white}
          bgColor={colors.primary}
          size={20}
          linkUrl="https://www.instagram.com/mbrentabiliza/?igshid=NjY2NjE5MzQ%3D"
        />
        {/* <SocialMediaBallIcon
          icon="linkedin"
          color={colors.white}
          bgColor={colors.primary}
          size={20}
          link="https://www.instagram.com/mbrentabiliza/?igshid=NjY2NjE5MzQ%3D"
        /> */}
      </div>
    </footer>
  );
}
