import React from "react";
import colors from "../styles/colors";
import Icon from "./Icon";
import { useRouter } from "next/router";

export default function Footer() {
  return (
    <footer
      style={{
        height: 80,
        marginTop: 20,
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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LinkFooter
            icon="linkedin"
            label="Renato Nascimento"
            url="https://www.linkedin.com/in/renato-borges-nascimento-7ab60b102/"
          />
          <LinkFooter
            icon="linkedin"
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
  icon: "linkedin" | "copyright";
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
        width={icon == "copyright" ? 18 : 14}
        height={icon == "copyright" ? 18 : 14}
      />
      <span
        style={{
          color: colors.white,
          fontSize: icon == "copyright" ? 18 : 14,
          fontWeight: "bold",
          marginLeft: 2,
        }}
      >
        {label}
      </span>
    </div>
  );
}
