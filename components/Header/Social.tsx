import { cn } from "@/lib/cn";
import { Github, LucideProps, Twitter } from "lucide-react";
import Link from "next/link";

export default function Social() {
  const links = [
    {
      id: "github",
      href: "",
      icon: (props: LucideProps) => <Github {...props} aria-hidden="true" />,
      label: "Github",
    },
    {
      id: "twitter",
      href: "",
      icon: (props: LucideProps) => <Twitter {...props} aria-hidden="true" />,
      label: "Twitter",
    },
  ];

  return <nav className={cn("relative mr-5 pr-5")}></nav>;
}
