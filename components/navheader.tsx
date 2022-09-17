import React, { useState } from "react";
import { useRouter } from "next/router";
import colors from "../styles/colors";

export default function NavHeader() {
    return (
        <header
            style={{
                width: "100%",
                height: "50px",
                backgroundColor: "white",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0px 20px",
            }}
        >
            <div>
                <span>ADVS_LOGO</span>
            </div>
            <div>
                <NaveHeaderItem title="Home" url="/" />
                <NaveHeaderItem title="Área de atuação" url="/renato" />
                <NaveHeaderItem title="Sócios" url="/" />
                <NaveHeaderItem title="Contato" url="/contato" />
            </div>
        </header>
    );
}

function NaveHeaderItem({ title, url }: { title: string; url: string }) {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const router = useRouter();
    return (
        <a
            href={url}
            style={{
                color: !isMouseOver ? colors.primary : colors.terceira,
                margin: "0px 10px",
                textDecoration: router.pathname === url ? "underline" : undefined,
                textDecorationColor: router.pathname === url ? colors.terceira : undefined,
                textDecorationThickness: router.pathname === url ? "3px" : undefined,
            }}
            onMouseEnter={() => {
                setIsMouseOver(true);
            }}
            onMouseLeave={() => {
                setIsMouseOver(false);
            }}
        >
            {title}
        </a>
    );
}
