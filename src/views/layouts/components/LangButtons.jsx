import { AE, TR, US } from "country-flag-icons/react/1x1";
import { useEffect } from "react";
import { useTranslation } from "@/i18n";

export const LangButtons = () => {
  return (
    <div className="flex gap-2">
      <LangButton lang="en">
        <US
          title="English Language"
          className="w-5 h-5 rounded-full ring-1 ring-gray-300"
        />
        EN
      </LangButton>
      <LangButton lang="ar">
        <AE
          title="Arabic Language"
          className="w-5 h-5 rounded-full ring-1 ring-gray-300"
        />
        AR
      </LangButton>
      <LangButton lang="tr">
        <TR
          title="Turkish Language"
          className="w-5 h-5 rounded-full ring-1 ring-gray-300"
        />
        TR
      </LangButton>
    </div>
  );
};

const LangButton = ({ lang, children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (document.dir === i18n.dir()) return;
    document.dir = i18n.dir();
  }, [i18n]);

  if (i18n.language === lang) return;

  return (
    <>
      <button
        onClick={() => i18n.changeLanguage(lang)}
        className="flex gap-1 items-center cursor-pointer hover:opacity-80"
      >
        {children || lang.toUpperCase()}
      </button>
    </>
  );
};
