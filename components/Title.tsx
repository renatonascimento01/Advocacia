import React from "react";
import colors from "../styles/colors";

export default function Title({
  children,
  fontSize,
}: {
  children: string;
  fontSize?: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      <span
        style={{
          fontSize: fontSize ? fontSize : 60,
          color: colors.primary,
          fontWeight: "bold",
        }}
      >
        {children}
      </span>
    </div>
  );
}
