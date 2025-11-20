import { NavbarItem } from "@/types/navbar";

export const navbarData: NavbarItem[] = [
  {
    id: crypto.randomUUID(),
    title: "Services",
    href: "services",
    external: false
  },
  {
    id: crypto.randomUUID(),
    title: "About",
    href: "about",
    external: false
  },
  {
    id: crypto.randomUUID(),
    title: "Before You Call",
    href: "before-you-call",
    external: false
  },
  {
    id: crypto.randomUUID(),
    title: "Contact",
    href: "contact",
    external: false
  },
  {
    id: crypto.randomUUID(),
    title: "Pages",
    submenu: [
      {
        id: crypto.randomUUID(),
        title: "Home",
        href: "/",
        external: false
      },
      {
        id: crypto.randomUUID(),
        title: "Docs",
        href: "docs",
        external: false
      },
      {
        id: crypto.randomUUID(),
        title: "Support",
        href: "support",
        external: false
      },
      {
        id: crypto.randomUUID(),
        title: "Blog",
        href: "blog",
        external: false
      },
      {
        id: crypto.randomUUID(),
        title: "Error 404",
        href: "error",
        external: false
      }
    ]
  }
];
