import React from "react";
import Title from "../components/Title";
import colors from "../styles/colors";

export default function Renato() {
  return (
    <div>
      <Title fontSize={40}>Áreas de atuação</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <AreaCard
          title="Contencioso"
          content="Atua na propositura e defesa de todos os tipos de ações, envolvendo diversas áreas do direito, como cível, comercial, responsabilidade civil, tributária e societária."
        />
        <AreaCard
          title="Direito Administrativo e Regulatório"
          content="Consultoria e auditorias legais, atuação em processos administrativos e judiciais, referentes à concessionárias de serviços públicos, assessoria em licitações e contratações…"
        />
        <AreaCard
          title="Direito do Consumidor"
          content="Assessoria na resolução de casos envolvendo Direito do Consumidor, tanto para empresas como para pessoas físicas, em litígios de alta complexidade."
        />

        <AreaCard
          title="Recuperação Empresarial"
          content="Assistência em juízo ou extrajudicialmente, representando devedores em procedimentos de Recuperação Judicial ou Extrajudicial…"
        />
        <AreaCard
          title="Direito Ambiental"
          content="Assessoria em assuntos jurídicos para a obtenção de licenças necessárias em órgãos ambientais para a implementação de projetos que tenham natureza prejudicial ao meio ambiente."
        />
        <AreaCard
          title="Direito Constitucional"
          content="Elaboração de pareceres sobre projetos de leis, propostas de emendas constitucionais; elaboração de minutas de ação direta de inconstitucionalidade (ADIN)…"
        />
      </div>
    </div>
  );
}

function AreaCard({ title, content }: { title: string; content: string }) {
  return (
    <div
      style={{
        width: 400,
        height: 150,
        margin: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          textDecoration: "underline",
          textDecorationColor: colors.primary,
          textDecorationThickness: "3px",
          fontSize: 22,
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        {title}
      </span>
      <span style={{ marginTop: 5, fontSize: 16, textAlign: "center" }}>
        {content}
      </span>
    </div>
  );
}
