import React from "react";
import colors from "../styles/colors";
import Icon from "./Icon";
import SocialMediaBallIcon from "./SocialMediaBallIcon";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: 150,
        backgroundColor: colors.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 5,
        }}
      >
        <SocialMediaBallIcon
          icon="instagram"
          color={colors.white}
          bgColor={colors.primary}
          size={32}
          linkUrl="https://www.instagram.com/mbrentabiliza/?igshid=NjY2NjE5MzQ%3D"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 500,
          paddingBottom: 10,
        }}
      >
        {/* <Icon
          name="map-marker-alt"
          color={colors.white}
          width={12}
          height={12}
        /> */}
        <span style={{ fontSize: 12, fontWeight: "bold", color: colors.white }}>
          RIO DE JANEIRO
        </span>
        <span
          style={{
            color: colors.white,
            fontSize: 10,
            width: 200,
            textAlign: "center",
          }}
        >
          Rua da Quitanda, 70 - cobertura 01 - Centro - Cep: 20011-030
        </span>
        {/* <div style={{ display: "flex", flexDirection: "row", marginTop: 4 }}>
          <Icon name="building" color={colors.white} width={12} height={12} />
          <span style={{ color: colors.white, marginLeft: 3, fontSize: 10 }}>
            +55 (21) 1234 5678
          </span>
        </div> */}
        <div style={{ display: "flex", flexDirection: "row", marginTop: 4 }}>
          <Icon name="phone" color={colors.white} width={12} height={12} />
          <span style={{ color: colors.white, marginLeft: 3, fontSize: 10 }}>
            +55 (21) 2277 4200
          </span>
        </div>
      </div>
    </footer>
  );
}
