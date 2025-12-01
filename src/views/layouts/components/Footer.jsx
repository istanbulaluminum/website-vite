import { LogoIcon } from "@/lib/icons";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router";
import { useTranslation } from "@/i18n";
import { CONTACTS, LINKS } from "@/lib/data";
import { phoneFormatter } from "@/lib/helpers";

const EXTRA_LINKS = [{ href: "#6", label: "Showrooms", order: 3 }];

export const Footer = () => {
  const { t } = useTranslation("footer");
  const { t: t_navbar } = useTranslation("navbar");

  return (
    <footer className="bg-[#05062d] text-white">
      <div className={"py-20 px-res flex flex-col gap-8 leading-[2.5]"}>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-4 flex-2">
            <Logo />

            <p>{t("content")}</p>
          </div>

          <div className="flex flex-col flex-2 gap-4">
            <h3 className="font-semibold lg:h-16">{t("address_title")}</h3>
            <p>
              {t("address_content")}
              <br />
              {t("working_hours")}
              <br />
              <span>{t("Phone:")} </span>
              <span dir="ltr">{phoneFormatter(CONTACTS.phone)}</span>
              <br />
              <span>
                {t("Email:")} {CONTACTS.footerEmail}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 flex-1">
            {LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#A8DADC] duration-300 flex items-center gap-1`}
                style={{ order: index + 2 }}
              >
                {t_navbar(link.label)}
              </Link>
            ))}

            {EXTRA_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#A8DADC] duration-300 flex items-center gap-1"
                style={{ order: link.order }}
              >
                {t_navbar(link.label)}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center py-20 border-t-2 flex justify-center items-center gap-2">
        <FaRegCopyright /> {new Date().getFullYear()} Istanbul Aluminum
      </div>
    </footer>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-1 w-fit h-16" dir="ltr">
      <div>
        <LogoIcon width={58} fill="#fff" />
      </div>
      <div className="flex flex-col justify-center mb-1 tracking-wider">
        <span className="text-sm font-bold uppercase">Istanbul</span>
        <span className="text-sm font-semibold uppercase bg-white text-[#05062d] px-1">
          Aluminum
        </span>
      </div>
    </div>
  );
};
