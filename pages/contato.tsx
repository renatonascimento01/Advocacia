import Icon from "../components/Icon";
import TextButton from "../components/TextButton";
import InputText from "../components/InputText";
import colors from "../styles/colors";
import { isMobile as nextMobile } from "react-device-detect";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(nextMobile);
  }, []);

  const textareaInputStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    // boxSizing: "border-box",
  };
  const textInputStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    // boxSizing: "border-box",
  };
  const [isMouseHover, setIsMouseHover] = useState(false);
  const textButtonStyle = {
    width: "100%",
    height: 60,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    opacity: isMouseHover ? 0.9 : 1,
    cursor: "pointer",
    transition: "background-color 300ms linear",
    color: colors.white,
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xvaug0a",
        "template_fr1dn5b",
        form.current,
        "2kP0e_0SC4btDY1UO"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

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
              📞 (21) 98348-2714 ✉️ contato@mbcontabiliza.com.br
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
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  style={textInputStyle}
                  placeholder="nome"
                />
                <input
                  type="email"
                  name="email"
                  style={textInputStyle}
                  placeholder="email"
                />
                <input
                  type="tel"
                  name="phone"
                  style={textInputStyle}
                  placeholder="telefone"
                />
                <textarea
                  name="message"
                  style={textareaInputStyle}
                  placeholder="mensagem"
                />
                <input
                  type="submit"
                  value="Enviar"
                  style={textButtonStyle}
                  onMouseEnter={() => setIsMouseHover(true)}
                  onMouseLeave={() => setIsMouseHover(false)}
                />
              </form>

              {/* <InputText placeholder="Nome" />
              <InputText placeholder="Telefone" />
              <InputText placeholder="E-mail" />

              <InputText type="textarea" placeholder="Conteúdo" />

              <TextButton
                label="enviar"
                width="100%"
                height="50px"
                borderRadius={30}
                onClick={() => sendEmail()}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
