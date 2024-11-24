import {
  Button,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextNavbar,
} from "@nextui-org/react";
import { LucideGithub, LucideLinkedin } from "lucide-react";
import React from "react";

import { ThemeToggler } from "./ThemeToggler";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <NextNavbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit flex">
            Mentess
            <span className="hidden md:block">Software</span>
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex" justify="center">
        {menuItems.map((item, i) => (
          <NavbarItem key={i}>
            <Link color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggler />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="https://github.com/beratmentess"
            isIconOnly
            variant="light"
          >
            <LucideGithub />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="https://www.linkedin.com/in/mahir-berat-mente%C5%9F-34649b1b0/"
            isIconOnly
            variant="light"
          >
            <LucideLinkedin />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
}

export const AcmeLogo = () => (
  <img alt="Logo" className="h-12" src="/logo.png" />
);
