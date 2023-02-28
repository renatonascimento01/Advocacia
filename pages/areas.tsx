import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import colors from "../styles/colors";
import { isMobile as nextMobile } from "react-device-detect";
import Icon from "../components/Icon";

export default function Areas() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(nextMobile);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",

        padding: isMobile ? "0px 5%" : "0px 5%",
        margin: !isMobile ? "15px 15%" : "15px 3%",
        paddingBottom: "60px",

        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#CFCFCF",
        borderStyle: "solid",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Icon
        name="hand-holding-dollar"
        color={colors.secondary}
        width={64}
        height={64}
        style={{ paddingTop: 30 }}
      />
      <Title fontSize={40}>CREDITO CONSIGNADO</Title>
      <span style={{ textAlign: "center" }}>
        O crédito consignado é a modalidade de empréstimo para pessoa física em
        que o valor das parcelas é descontado automaticamente, direto no
        contracheque do salário ou benefício previdenciário (seja da Previdência
        Social ou de regime próprio de seguridade).
        <br />
        <br />
        Conhecido como uma das linhas de crédito pessoal que apresentam
        condições mais flexíveis e atrativas (como taxas de juros mais baratas e
        maiores prazos para pagamento), o crédito consignado é a escolha da
        maioria dos consumidores em busca de dinheiro extra com o menor custo e
        sem burocracia.
        <br />
        <br />
        Saiba o que é, como funciona e quais são as principais regras. Garanta o
        dinheiro extra necessário com as melhores ofertas para o seu bolso.
        <br />
      </span>
    </div>
  );
}
