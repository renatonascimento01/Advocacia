import Collapse from "./svgs/align-justify.svg";
import Copyright from "./svgs/copyright.svg";

import Phone from "./svgs/phone.svg";
import MapMarkerAlt from "./svgs/map-marker-alt.svg";
import Building from "./svgs/building.svg";

import Facebook from "./svgs/facebook.svg";
import Instagram from "./svgs/instagram.svg";
import Linkedin from "./svgs/linkedin.svg";
import BoxLinkedin from "./svgs/boxlinkedin.svg";

import Star from "./svgs/star.svg";
import HalfStar from "./svgs/star-half-alt.svg";

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
      {name === "boxlinkedin" && (
        <BoxLinkedin fill={color} width={width} height={height} />
      )}
      {name === "copyright" && (
        <Copyright fill={color} width={width} height={height} />
      )}
      {name === "building" && (
        <Building fill={color} width={width} height={height} />
      )}
      {name === "map-marker-alt" && (
        <MapMarkerAlt fill={color} width={width} height={height} />
      )}
      {name === "phone" && <Phone fill={color} width={width} height={height} />}

      {name === "facebook" && (
        <Facebook fill={color} width={width} height={height} />
      )}
      {name === "instagram" && (
        <Instagram fill={color} width={width} height={height} />
      )}
      {name === "linkedin" && (
        <Linkedin fill={color} width={width} height={height} />
      )}
      {name === "star" && <Star fill={color} width={width} height={height} />}
      {name === "halfstar" && (
        <HalfStar fill={color} width={width} height={height} />
      )}
    </div>
  );
}
