import Icon from "../components/Icon";
import TextButton from "../components/TextButton";
import InputText from "../components/InputText";
import colors from "../styles/colors";
import { isMobile as nextMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(nextMobile);
  }, []);
  return (
    <div
      style={{
        margin: !isMobile ? "15px 20%" : "15px 3%",
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#CFCFCF",
        borderStyle: "solid",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        paddingBottom: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            {!isMobile && (
              <div>
                <Icon
                  name="connect-without-contact"
                  color={colors.primary}
                  width={50}
                  height={50}
                />
              </div>
            )}
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  color: colors.primary,
                  fontSize: !isMobile ? 64 : 32,
                  fontWeight: "bold",
                }}
              >
                Fale
              </span>
              <span
                style={{
                  color: colors.secondary,
                  fontSize: !isMobile ? 64 : 32,
                  fontWeight: "bold",
                  marginLeft: 7,
                }}
              >
                Conosco
              </span>
            </div>
            {!isMobile && (
              <div>
                <Icon
                  name="connect-without-contact"
                  color="#939393"
                  width={50}
                  height={50}
                />
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: -10,
            }}
          >
            <span
              style={{
                textAlign: "center",
                marginTop: 10,
                fontSize: !isMobile ? 18 : 12,
              }}
            >
              Entre em contato consco preenchendo esse formulario ou através:
            </span>
            <span
              style={{
                textAlign: "center",
                marginTop: 5,
                fontSize: !isMobile ? 18 : 12,
              }}
            >
              {" "}
              📞 (21)99190-1906 ✉️ contato@ivoealvesadvogados.com.br
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              flex: 1,
              width: "100%",
              marginTop: 10,
            }}
          >
            <div>
              <InputText placeholder="Nome" />
              <InputText placeholder="Telefone" />
              <InputText placeholder="E-mail" />

              <InputText type="textarea" placeholder="Conteúdo" />
              <TextButton
                label="enviar"
                width="100%"
                height="50px"
                borderRadius={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
