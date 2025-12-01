import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { CONTACTS } from "@/lib/data";

export const FloatingButtons = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHide = () => {
    if (window.scrollY < 100) {
      setIsHidden(true);
    } else if (window.scrollY > 100) {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleHide);
    return () => {
      window.removeEventListener("scroll", toggleHide);
    };
  }, []);

  return (
    <>
      <a
        href={`https://wa.me/${CONTACTS.whatsapp}`}
        target="_blank"
        className={`fixed bottom-5 start-5 px-5 py-2 bg-green-400 text-white rounded-full shadow-lg z-50 
                  hover:bg-green-500 transition-all duration-300 flex items-center gap-2
          ${isHidden ? "hidden" : ""}`}
        dir="ltr"
      >
        <FaWhatsapp className="text-xl" /> WhatsApp
      </a>

      <a
        href="#"
        className={`fixed bottom-5 end-5 md:end-16 p-2 bg-[#457B9D] text-white rounded-full shadow-lg z-50 
                    hover:bg-[#05062d] transition-all duration-300 ${
                      isHidden ? "hidden" : ""
                    }`}
        dir="ltr"
      >
        <FaArrowUp className="text-xl" />
      </a>
    </>
  );
};
