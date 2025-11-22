import Image from "next/image";
import Link from "next/link";
import logo from "@public/icons/logo.png";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function Logo({ width = 159, height = 40, className }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image
        src={logo}
        alt="Logo"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}
