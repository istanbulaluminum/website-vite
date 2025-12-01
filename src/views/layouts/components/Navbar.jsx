import { Link, NavLink } from "react-router";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { MdExpandMore } from "react-icons/md";
import { SiInstructure } from "react-icons/si";
import { phoneFormatter } from "@/lib/helpers";
import { CONTACTS, LINKS } from "@/lib/data";
import { useTranslation } from "@/i18n";
import { LangButtons } from "./LangButtons";
import { FloatingButtons } from "./FloatingButtons";
import { LogoIcon } from "@/lib/icons";
import { useState } from "react";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <>
      <TopBar />
      <div className="px-res flex justify-between items-center sticky left-0 top-0 right-0 z-50 md:backdrop-blur-3xl backdrop-blur--custom">
        <div className="absolute inset-0 bg-white opacity-30 -z-10" />
        <Logo />
        <div className="flex-1" />
        <DesktopMenu />
        <MobileMenu />
      </div>
    </>
  );
};

const TopBar = () => {
  return (
    <>
      <div className="bg-gray-800 p-2 text-white flex items-center" dir="ltr">
        <div className="flex gap-2">
          <a
            href={`mailto:${CONTACTS.email}`}
            target="_blank"
            className="flex items-center gap-1"
          >
            <MdOutlineMail className="text-lg" />
            <span className="hidden md:inline-block">{CONTACTS.email}</span>
          </a>
          <a
            href={`https://wa.me/${CONTACTS.whatsapp}`}
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaWhatsapp className="text-xl" />
            <span className="hidden md:inline-block">
              {phoneFormatter(CONTACTS.whatsapp)}
            </span>
          </a>
          <a
            href={CONTACTS.location.link}
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaLocationDot className="text-lg" /> {CONTACTS.location.text}
          </a>
        </div>
        <div className="flex-1" />
        <LangButtons />
      </div>
      <FloatingButtons />
    </>
  );
};

const DesktopMenu = () => {
  const { t } = useTranslation("navbar");
  const { t: t_buttons } = useTranslation("buttons");

  return (
    <nav className="hidden md:flex">
      {LINKS.map((link) => (
        <div key={link.href} className="relative group flex items-center">
          <Link
            to={link.href}
            className="px-4 hover:text-[#e63946] duration-300 flex items-center gap-1"
          >
            {t(link.label)}{" "}
            {link.list && (
              <IoMdArrowDropdown className="group-hover:text-[#e63946] duration-300" />
            )}
          </Link>

          {link.list && (
            <div
              className="absolute top-full start-0 w-fit text-nowrap bg-white/80 shadow-lg 
              rounded-b-lg hidden group-hover:flex flex-col transition-opacity duration-300"
            >
              {link.list.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className={`px-4 py-3 hover:text-[#e63946] duration-300`}
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      <Button
        variant="primary"
        isLink
        href={`https://wa.me/${CONTACTS.whatsapp}?text=I'm interested in your products`}
        target="_blank"
        className={`hidden xl:block ml-8`}
      >
        {t_buttons("order")}
        <SiInstructure className="ms-2 text-2xl" />
      </Button>
    </nav>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expendedIndex, setExpendedIndex] = useState(-1);

  const { t } = useTranslation("navbar");

  const toggleExpended = (index) => {
    if (expendedIndex === index) {
      setExpendedIndex(-1);
    } else {
      setExpendedIndex(index);
    }
  };

  return (
    <>
      <button className="md:hidden" onClick={() => setIsOpen(true)}>
        <LuMenu className="text-2xl" />
      </button>
      <nav
        className={`md:hidden fixed left-0 top-0 h-screen bg-[#05062d] text-white z-999 w-64 -translate-x-full 
          transition-transform duration-300 flex flex-col gap-4 p-4
          ${isOpen && "translate-x-0"}`}
      >
        <button onClick={() => setIsOpen(false)} className="ms-auto">
          <IoMdClose className="text-2xl" />
        </button>
        {LINKS.map((link, index) => (
          <div key={link.href}>
            <div className="flex items-center">
              <Link href={`${link.href}`} className="px-4 py-2 flex-1">
                {t(link.label)}
              </Link>
              {link.list && (
                <button
                  className="p-1 text-2xl"
                  onClick={() => toggleExpended(index)}
                >
                  <MdExpandMore
                    className={`transition-all duration-300 ${
                      index === expendedIndex ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
            {link.list && expendedIndex === index && (
              <div
                className={`flex flex-col gap-2 overflow-hidden duration-300 transition-all ps-4`}
              >
                {link.list.map((item) => (
                  <Link href={item.href} key={item.href} className="px-6 py-2">
                    {t(item.label)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

const Logo = () => {
  return (
    <a className="flex items-center gap-1" href={"/"} dir="ltr">
      <div className="hidden md:block">
        <LogoIcon width={80} fill="#05062d" />
      </div>
      <div className="flex flex-col justify-center mb-2 tracking-wider">
        <span className="md:text-lg font-bold uppercase text-[#05062d]">
          Istanbul
        </span>
        <span className="md:text-lg font-semibold uppercase bg-[#05062d] text-[#F1FAEE] px-1">
          Aluminum
        </span>
      </div>
    </a>
  );
};
