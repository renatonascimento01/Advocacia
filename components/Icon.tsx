import Collapse from "./svgs/align-justify.svg";
import Linkedin from "./svgs/linkedin.svg";
import Copyright from "./svgs/copyright.svg";

interface IconProps {
  name: string;
  color: string;
  width: string | number;
  height: string | number;
  onClick?: () => void;
  style?: object;
}
export default function Icon({
  name,
  color,
  width,
  height,
  onClick,
  style,
}: IconProps) {
  return (
    <div
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {name === "collapse" && (
        <Collapse fill={color} width={width} height={height} />
      )}
      {name === "copyright" && (
        <Copyright fill={color} width={width} height={height} />
      )}
      {name === "linkedin" && (
        <Linkedin fill={color} width={width} height={height} />
      )}
    </div>
  );
}
