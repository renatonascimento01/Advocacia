import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import colors from "../styles/colors";
import { isMobile as nextMobile } from "react-device-detect";

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
        padding: isMobile ? "0px 10%" : "0px 20%",
      }}
    >
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
