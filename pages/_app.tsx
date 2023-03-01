import React, { Component, useState, useEffect } from "react";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";
import colors from "../styles/colors";
import Footer from "../components/Footer";

import { isMobile as nextMobile } from "react-device-detect";
import NavHeaderPC from "../components/NavheaderPC";
import NavheaderMobile from "../components/NavheaderMobile";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(nextMobile);
  }, []);

  return (
    <>
      <Head>
        <title>MB Rentabiliza</title>
        <meta name="description" content="Site " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: colors.terceira,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <>{isMobile ? <NavheaderMobile /> : <NavHeaderPC />}</>
        <Component {...pageProps} />
        <Footer />
      </main>
      {loading && (
        <FloatingWhatsApp
          phone="+5521983482714"
          popupMessage="Olá, como posso ajudar?"
        />
      )}
    </>
  );
}

export default MyApp;
