import { useTranslation } from "@/i18n";
import { HeroSection } from "./components/shared/HeroSection";

export const AboutPage = () => {
  const { t } = useTranslation("about_page");
  return (
    <>
      <div className="flex-1 px-res">
        <HeroSection
          title={t("hero_section.title")}
          background="/images/hero_section_bg.png"
        />
      </div>
    </>
  );
};
