import { useTranslation } from "@/i18n";
import { HeroSection } from "./components/home/HeroSection";
import { ImageWrapper } from "./components/shared/ImageWrapper";
import { PrimarySection } from "./components/shared/PrimarySection";
import { AboutSection } from "./components/home/AboutSection";
import { ServicesSection } from "./components/home/ServicesSection";

export const HomePage = () => {
  const { t } = useTranslation("home_page");
  return (
    <>
      <div className="flex-1 px-res">
        <HeroSection />

        <AboutSection />

        <ServicesSection />
        <PrimarySection
          header={t("about_section.title")}
          content={[
            { text: t("about_section.content.0") },
            { text: t("about_section.content.1") },
          ]}
          src={
            "https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg"
          }
          link={{
            href: "#",
            text: "Read More...",
          }}
        />
      </div>
    </>
  );
};
