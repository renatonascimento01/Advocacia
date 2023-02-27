import React, { useState } from "react";
import Icon from "./Icon";
import colors from "../styles/colors";
import Link from "next/link";

export default function SocialMediaBallIcon({
  icon,
  color,
  bgColor,
  size,
  style,
  linkUrl,
}: {
  icon: "instagram" | "facebook" | "linkedin";
  color: string;
  bgColor: string;
  size: number;
  style?: object;
  linkUrl: string;
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <Link href={String(linkUrl)}>
      <div
        style={{
          width: size * 2,
          height: size * 2,
          borderRadius: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: bgColor,
          cursor: "pointer",
          ...style,
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
          color={isMouseOver ? colors.gold : color}
          width={size / 2 + size / 2 / 2}
          height={size / 2 + size / 2 / 2}
        />
      </div>
    </Link>
  );
}
