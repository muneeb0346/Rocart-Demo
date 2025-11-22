import Link from "next/link";
import Image from "next/image";
import styles from "@components/SiteButton.module.css";

export type SiteButtonProps = {
    src: string;
    text: string;
    href: string;
    external?: boolean;
    variant?: "big" | "small";
};

export default function SiteButton({
    src,
    text,
    href,
    external,
    variant = "big",
}: SiteButtonProps) {
    const buttonClass = variant === "small" ? styles.small : styles.big;

    const content = (
        <div className={`${styles.inner} ${buttonClass}`}>
            <Image
                src={`/icons/${src}.png`}
                alt=""
                width={variant === "small" ? 19 : 28}
                height={variant === "small" ? 19 : 28}
            />
            <span>{text}</span>
        </div>
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles.sitebutton} ${buttonClass}`}>
                {content}
            </a>
        );
    }

    return <Link href={href} className={`${styles.sitebutton} ${buttonClass}`}>{content}</Link>;
}