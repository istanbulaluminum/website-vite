import { objectTranslation, useTranslation } from "@/i18n";
import { PrimarySection } from "../shared/PrimarySection";

export const ServicesSection = () => {
  const { t } = useTranslation("home_page.services_section");
  const content = objectTranslation("home_page.services_section.content");
  return (
    <>
      <PrimarySection
        header={t("title")}
        content={content}
        src={
          "https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg"
        }
        isList
        variant="reverse"
        link={{
          href: "#",
        }}
      />
    </>
  );
};
