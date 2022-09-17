import React from "react";
import colors from "../styles/colors";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer style={{ height: 80, marginTop: 20 }}>
      <hr />
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
          url="http://empresadorenato.com.br/"
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
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        margin: 5,
        cursor: "pointer",
      }}
      onClick={() => {
        alert(url);
      }}
    >
      <Icon
        name={icon}
        color={icon == "copyright" ? colors.primary : colors.secondary}
        width={icon == "copyright" ? 18 : 14}
        height={icon == "copyright" ? 18 : 14}
      />
      <span
        style={{
          color: icon == "copyright" ? colors.primary : colors.secondary,
          fontSize: icon == "copyright" ? 18 : 14,
          fontWeight: "bold",
          marginLeft: 3,
        }}
      >
        {label}
      </span>
    </div>
  );
}
