import React, { useState } from "react";
import Icon from "./Icon";
import colors from "../styles/colors";
import Link from "next/link";

export default function SocialMediaBallIcon({
  icon,
  color,
  bgColor,
  size,
}: {
  icon: "instagram" | "facebook" | "linkedin";
  color: string;
  bgColor: string;
  size: number;
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <Link href="https://facebook.com/tiagoduuarte">
      <div
        style={{
          width: size * 2,
          height: size * 2,
          borderRadius: size / 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: bgColor,
          cursor: "pointer",
        }}
        onMouseEnter={() => {
          setIsMouseOver(true);
        }}
        onMouseLeave={() => {
          setIsMouseOver(false);
        }}
      >
        <Icon
          name={icon}
          color={isMouseOver ? colors.terceira : color}
          width={size / 2 + size / 2 / 2}
          height={size / 2 + size / 2 / 2}
        />
      </div>
    </Link>
  );
}
