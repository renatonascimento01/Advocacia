import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Icon from "../components/Icon";
import colors from "../styles/colors";

export default function Home() {
  return (
    <div>
      <Carousel showThumbs={false} showArrows={false} dynamicHeight={false}>
        <div>
          <img src="/c1.webp" height={510} />
        </div>
        <div>
          <img src="/c2.webp" height={510} />
        </div>
        <div>
          <img src="/c3.webp" height={510} />
        </div>
      </Carousel>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingRight: "15%",
          paddingLeft: "15%",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <span
          style={{
            fontSize: 32,
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            color: colors.secondary,
          }}
        >
          QUEM SOMOS
        </span>
        <span style={{ textAlign: "center", marginTop: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <ReviewCard
          img="/amanda_alves.jpg"
          nome="Tiago Duarte"
          stars={5.0}
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <ReviewCard
          img="/amanda_alves.jpg"
          nome="Tiago Duarte"
          stars={5.0}
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <ReviewCard
          img="/amanda_alves.jpg"
          nome="Tiago Duarte"
          stars={4.5}
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <ReviewCard
          img="/amanda_alves.jpg"
          nome="Tiago Duarte"
          stars={4.5}
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <ReviewCard
          img="/amanda_alves.jpg"
          nome="Tiago Duarte"
          stars={4.5}
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <ReviewCard
          img="/amanda_alves.jpg"
          nome="Tiago Duarte"
          stars={4.0}
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
      </div>
    </div>
  );
}

function ReviewCard({
  img,
  stars,
  nome,
  message,
}: {
  img: string;
  stars: number;
  nome: string;
  message: string;
}) {
  const boxWidth = 350;
  const boxHeight = 350;
  return (
    <div
      style={{
        backgroundColor: "#FFF",
        width: boxWidth,
        height: boxHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px 10px",
        borderWidth: 1,
        borderColor: "#CFCFCF",
        borderStyle: "solid",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        paddingTop: 105,
      }}
    >
      {/* avatar */}
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          overflow: "hidden",
          borderWidth: 10,
          borderColor: "#FFF",
          borderStyle: "solid",
          position: "absolute",
          marginBottom: 300,
        }}
      >
        <img src={img} style={{ width: 150, height: 150 }} />
      </div>
      <div
        style={{
          width: boxWidth - 25,
          height: boxHeight - 120,
          backgroundColor: "#383838",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <span
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#FFFFFF",
            marginTop: 5,
          }}
        >
          {nome}
        </span>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <FiveStarsRattio value={stars} />
        </div>
        <span
          style={{
            fontSize: 16,
            color: "#FFFFFF",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          {message}
        </span>
      </div>
    </div>
  );
}

function FiveStarsRattio({ value }: { value: number }) {
  const starsComponent = [];
  while (value > 0) {
    if (value >= 1) {
      starsComponent.push(
        <Icon name="star" color={colors.terceira} width={16} height={16} />
      );
    } else {
      starsComponent.push(
        <Icon name="halfstar" color={colors.terceira} width={16} height={16} />
      );
    }
    value--;
  }
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {starsComponent}
    </div>
  );
}
