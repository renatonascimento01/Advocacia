import React from "react";
import colors from "../styles/colors";

export default function Title({
  children,
  fontSize,
  style,
}: {
  children: string;
  fontSize?: number;
  style?: object;
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 50,
        ...style,
      }}
    >
      <span
        style={{
          fontSize: fontSize ? fontSize : 60,
          color: colors.secondary,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {children}
      </span>
    </div>
  );
}
