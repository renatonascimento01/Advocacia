import React from "react";
import colors from "../styles/colors";
import Icon from "./Icon";
import { useRouter } from "next/router";
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
        <SocialMediaBallIcon
          icon="facebook"
          color={colors.white}
          bgColor={colors.primary}
          size={20}
        />
        <SocialMediaBallIcon
          icon="instagram"
          color={colors.white}
          bgColor={colors.primary}
          size={20}
        />
        <SocialMediaBallIcon
          icon="linkedin"
          color={colors.white}
          bgColor={colors.primary}
          size={20}
        />
      </div>

      <div
        style={{
          width: "90%",
          height: 1,
          backgroundColor: colors.white,
          marginTop: 10,
          marginBottom: 10,
        }}
      />

      <span style={{ fontSize: 12, fontWeight: "bold", color: colors.white }}>
        Desenvolvido por:
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LinkFooter
          icon="copyright"
          label="Rekemat LTDA"
          url="https://www.linkedin.com/in/renato-borges-nascimento-7ab60b102/"
        />
        <div style={{ display: "flex", flexDirection: "row", marginTop: 3 }}>
          <LinkFooter
            icon="boxlinkedin"
            label="Renato Nascimento"
            url="https://www.linkedin.com/in/renato-borges-nascimento-7ab60b102/"
          />
          <LinkFooter
            icon="boxlinkedin"
            label="Tiago Duarte"
            url="https://www.linkedin.com/in/tiagoduartedf/"
          />
        </div>
      </div>
    </footer>
  );
}

function LinkFooter({
  icon,
  label,
  url,
}: {
  icon: "boxlinkedin" | "copyright";
  label: string;
  url: string;
}) {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginLeft: 5,
        marginRight: 5,
        cursor: "pointer",
      }}
      onClick={() => {
        router.push(url);
      }}
    >
      <Icon
        name={icon}
        color={colors.white}
        width={icon == "copyright" ? 12 : 10}
        height={icon == "copyright" ? 12 : 10}
      />
      <span
        style={{
          color: colors.white,
          fontSize: icon == "copyright" ? 12 : 10,
          textDecoration: "underline",
          marginLeft: 2,
        }}
      >
        {label}
      </span>
    </div>
  );
}
