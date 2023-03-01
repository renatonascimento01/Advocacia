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
        flexDirection: "column",

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
      <Title fontSize={40} style={{ marginTop: 30, marginBottom: 30 }}>
        CESSÃO DE CREDITO
      </Title>
      <Title fontSize={20} style={{ marginTop: 30, marginBottom: 30 }}>
        O QUE FAZEMOS?
      </Title>
      <span style={{ textAlign: "center" }}>
        A MB Rentabiliza oferece a solução financeira para a vida desses
        clientes que possuem parcelas que é descontada diretamente no
        contracheque, holerite ou beneficio. Liberando desconto nas parcelas
        ativas ou quitação de consignado, diminuindo a taxa de juros, assumindo
        parcelas e até mesmo aplicando um bom investimento utilizando a margem
        consignável sem que o mesmo precise dispor de qualquer valor do próprio
        bolso.
      </span>
      <Title fontSize={20} style={{ marginTop: 30, marginBottom: 30 }}>
        COMO FUNCIONA?
      </Title>
      <span style={{ textAlign: "center" }}>
        A MB Rentabiliza trabalhar de maneira clara, obvia e transparente
        aplicando de forma legal a cessão de crédito que funciona da seguinte
        maneira: Primeiramente é celebrado o negócio jurídico através de
        instrumento particular(contrato) ou público(escritura), com a
        recomendação de que o público seja usado quando for necessário uma maior
        formalidade ao negócio jurídico.
        <br />
        Entramos em contato com o cliente para entender a melhor maneira de
        ajuda-lo e em seguida realizar a transação de acordo online.
        <br />
        Precisamos mantes esse cliente até o final de sua negociação bem
        informado e ciente de todo o tramite efetuado.
      </span>
    </div>
  );
}
