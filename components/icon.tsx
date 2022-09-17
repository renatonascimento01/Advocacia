import Cart from "./svgs/cart.svg";

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
      {name === "cart" && <Cart fill={color} width={width} height={height} />}
    </div>
  );
}
