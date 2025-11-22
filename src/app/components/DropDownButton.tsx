"use client";

import { useState } from "react";
import Image from "next/image";
import chevron from "@public/icons/chevron-gray-down.png";
import styles from "./DropDownButton.module.css";

export type DropDownButtonProps = {
    src: string;
    text: string;
    altText: string;
    children?: React.ReactNode;
};

export default function DropDownButton({ src, text, altText, children }: DropDownButtonProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <button
                className={styles["dropdown-button"]}
                onClick={() => setOpen(prev => !prev)}
            >
                <Image src={`/icons/${src}.png`} alt={altText} width={27} height={27}
                    style={{ objectFit: "contain" }} />
                <span>{text}</span>
                <Image src={chevron} alt="Toggle dropdown" width={13} height={13}
                    style={{ objectFit: "contain" }} />
            </button>

            {open && (
                <div className={styles["dropdown-content"]}>
                    {children}
                </div>
            )}
        </div>
    );
}
