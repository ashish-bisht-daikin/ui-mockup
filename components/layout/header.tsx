"use client";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { KeyRound } from "lucide-react";
import { images } from "@/app/constants/images";
import { forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useTheme } from "next-themes";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Daikin Split System Air Conditioners",
    href: "",
    description:
      "Efficient and versatile, suitable for a wide range of residential applications.",
  },
  {
    title: "Daikin Multi Split Air Conditioners",
    href: "",
    description:
      "One outdoor unit connected to multiple indoor units for ultimate climate control.",
  },
  {
    title: "Daikin Ducted Air Conditioning",
    href: "",
    description:
      "Centralized air conditioning solution for whole-house comfort.",
  },
  {
    title: "Daikin VRV Systems",
    href: "",
    description:
      "Variable Refrigerant Volume systems for large commercial applications.",
  },
  {
    title: "Daikin Air Purifiers",
    href: "",
    description:
      "Improve indoor air quality with advanced filtration and air purification technology.",
  },
  {
    title: "Daikin Floor Standing Air Conditioners",
    href: "",
    description: "Ideal for homes with limited ceiling or wall space.",
  },
];
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme(darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <header className="shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <Image
            width={200}
            height={40}
            src={images.company_logo}
            alt="company-logo"
          />
        </div>
        <div className="flex  items-center justify-between w-1/6">
          <Switch
            checked={darkMode}
            onCheckedChange={(e) => setDarkMode((darkMode) => !darkMode)}
            id="color-mode"
            className={`cursor-pointer ${darkMode ? "night" : ""}`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bell-dot cursor-pointer"
          >
            <path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            <circle cx="18" cy="8" r="3" stroke="red" fill="red" />
          </svg>
          <KeyRound className="cursor-pointer" />
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <NavigationMenu className="py-4 px-8 font-bolder">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Daikin India
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Daikin India provides advanced, energy-efficient air
                        conditioning solutions with innovative technology and
                        excellent customer service.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="" title="Introduction">
                  Comprehensive solutions for all your air conditioning needs.
                </ListItem>
                <ListItem href="" title="Installation">
                  Guidelines on installing Daikin air conditioning systems.
                </ListItem>
                <ListItem href="" title="Maintenance">
                  Best practices for maintaining your Daikin air conditioners.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Careers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
