import React, { useState } from "react";
import colors from "../styles/colors";
import Icon from "./Icon";
import { useRouter } from "next/router";
import Link from "next/link";

function FullBackgroundBlur({ onClick }: { onClick: Function }) {
  return (
    <div
      onClick={() => onClick()}
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 13,
        backgroundColor: colors.black,
        opacity: 0.3,
      }}
    />
  );
}

function ModalnavHeaderUncollapsed({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: Function;
}) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 20,
          width: "80%",
          height: "100%",
          transition: "left 300ms",
          left: visible ? "0" : "-80%",
          backgroundColor: colors.primary,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <img
              src="/tmplogo.png"
              width={120}
              height={120}
              style={{ marginTop: 50, marginBottom: 20 }}
            />
          </Link>
          <NaveHeaderItem title="Home" url="/" />
          <NaveHeaderItem title="Área de atuação" url="/areas" />
          <NaveHeaderItem title="Sócios" url="/socios" />
          <NaveHeaderItem title="Contato" url="/contato" />
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <span>Icone 1</span>
            <span>Icone 2</span>
          </div> */}
        </div>
      </div>
      {visible && <FullBackgroundBlur onClick={() => setVisible(false)} />}
    </>
  );
}

export default function NavheaderMobile() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ModalnavHeaderUncollapsed visible={visible} setVisible={setVisible} />
      <header
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: colors.primary,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 20px",
          zIndex: 10,
        }}
      >
        <Link href="/">
          <img src="/tmplogo.png" width={60} height={60} />
        </Link>
        <div onClick={() => setVisible(!visible)}>
          <Icon name="collapse" width={30} height={30} color={colors.white} />
        </div>
      </header>
    </>
  );
}

function NaveHeaderItem({ title, url }: { title: string; url: string }) {
  const router = useRouter();
  return (
    <a
      href={url}
      style={{
        color: router.pathname === url ? colors.dark_terceira : colors.white,
        margin: "30px 0px",
        textDecoration: router.pathname === url ? "underline" : undefined,
        textDecorationColor:
          router.pathname === url ? colors.dark_terceira : undefined,
        textDecorationThickness: router.pathname === url ? "3px" : undefined,
        fontSize: 22,
        fontWeight: "bold",
      }}
    >
      {title}
    </a>
  );
}
