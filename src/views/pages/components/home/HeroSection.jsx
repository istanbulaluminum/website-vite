import { useTranslation } from "@/i18n";
import { CONTACTS } from "@/lib/data";
import { Button } from "@/views/layouts/components/Button";
import { FcCalculator } from "react-icons/fc";
import { SiInstructure } from "react-icons/si";

export const HeroSection = () => {
  const { t } = useTranslation("home_page.hero_section");
  const { t: t_buttons } = useTranslation("buttons");
  return (
    <section className="-px-res px-res relative min-h-screen flex flex-col justify-center pb-20 gap-5">
      <div className="absolute inset-0 object-cover -z-40 bg-black">
        <img
          src={"/images/hero_section_bg.png"}
          alt="Hero Image"
          width={1920}
          height={1080}
          className="object-cover min-h-screen"
        />
      </div>
      <div className="absolute inset-0 -z-30 bg-black/0" />
      <h1
        className={
          "text-white font-bold text-4xl md:text-5xl lg:text-6xl max-w-xl md:leading-normal  lg:leading-[1.75]"
          // dir === "ltr" ? "leading-[1.4]" : "leading-[1.75]"
        }
      >
        {t("title")}
      </h1>
      <p
        className={
          "text-white text-base lg:text-lg max-w-xl mt-4"
          // dir === "ltr" ? "leading-[2]" : "leading-[2.5]"
        }
      >
        {t("subtitle")}
      </p>
      <div className={`flex gap-3 md:gap-4 mt-8`}>
        <Button
          isLink
          href={`https://wa.me/${CONTACTS.whatsapp}?text=I'm interested in your products`}
          target="_blank"
        >
          {t_buttons("order")}
          <SiInstructure className="ms-2 text-2xl" />
        </Button>
        <Button variant="secondary" isLink href={`#`} target="_blank">
          {t_buttons("calc")}
          <FcCalculator className="ms-1 text-2xl" />
        </Button>
      </div>
    </section>
  );
};
