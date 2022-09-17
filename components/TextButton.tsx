import React, { useState } from "react";
import colors from "../styles/colors";

export default function TextButton({
  label,
  width,
  height,
  borderRadius,
  fontSize,
  style,
  backgroundColor,
  onClick,
}: {
  label: string;
  width: number | string;
  height: number | string;
  borderRadius?: number;
  fontSize?: number;
  style?: object;
  backgroundColor?: string;
  onClick: Function;
}) {
  const [isMouseHover, setIsMouseHover] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center", ...style }}>
      <div
        style={{
          width: width,
          height: height,
          borderRadius: borderRadius ? borderRadius : 5,
          borderWidth: 2,
          borderColor: backgroundColor ? backgroundColor : colors.primary,
          borderStyle: "solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isMouseHover
            ? "#FFFFFF"
            : backgroundColor
            ? backgroundColor
            : colors.primary,
          cursor: "pointer",
          transition: "background-color 300ms linear",
        }}
        onMouseEnter={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
        onClick={() => onClick()}
      >
        <span
          style={{
            fontSize: fontSize ? fontSize : 15,
            color: isMouseHover
              ? backgroundColor
                ? backgroundColor
                : colors.primary
              : "#FFFFFF",
            fontWeight: "bold",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
