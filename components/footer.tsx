import React from "react";
import colors from "../styles/colors";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer style={{ display: "flex", alignItems:  }}>
      <hr />
      <span>© rekemat LTDA</span>
      <div>
        <Icon name="linkedin" color={colors.primary} width={32} height={32} />
        <span style={{ color: colors.primary, fontSize: 32 }}>
          https://www.linkedin.com/in/renato-borges-nascimento-7ab60b102/
        </span>
      </div>
    </footer>
  );
}
