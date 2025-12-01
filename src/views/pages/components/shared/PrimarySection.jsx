import { FaCheck } from "react-icons/fa";
import { Link } from "react-router";
import { ImageWrapper } from "./ImageWrapper";

export const PrimarySection = ({
  header = "Header",
  content = [{ title: "Subtitle 1", text: "Paragraph 1" }],
  src = "",
  variant = "default",
  isList = false,
  link = { text: null, href: "" },
}) => {
  return (
    <section
      className={`-px-res px-res grid grid-cols-1 lg:grid-cols-2 items-center gap-20 py-40 overflow-hidden
        ${variant === "default" && "bg-white"}
        ${
          variant === "reverse" &&
          "bg-[#F1FAEE] rounded-tl-[4rem] rounded-br-[4rem] lg:rounded-tl-[10rem] lg:rounded-br-[10rem]"
        }
        `}
    >
      <div
        className={`flex flex-col gap-8 ${
          variant === "reverse" && "lg:row-start-1 lg:col-start-2"
        }`}
      >
        <h2 className="text-[#e63946] text-lg font-semibold capitalize">
          {header}
        </h2>
        <div className="flex flex-col gap-6">
          <ul className="text-[#05062d] flex flex-col gap-8">
            {content.map(({ title, text }, index) => (
              <li className="flex gap-4" key={index}>
                {isList && (
                  <div>
                    <FaCheck className="mt-1 w-7 h-7 text-[#457B9D]" />
                  </div>
                )}
                <div className="flex flex-col gap-4">
                  {title && <h3 className="font-semibold text-2xl">{title}</h3>}
                  <p className={title ? "text-xl" : "text-2xl"}>{text}</p>
                </div>
              </li>
            ))}
          </ul>

          {link.text && (
            <Link to={link.href} className="text-[#457B9D] text-2xl italic">
              {link.text}
            </Link>
          )}
        </div>
      </div>
      <div className="relative -px-res px-res flex items-center justify-center child:flex-1">
        <div
          className={`rounded-full bg-[#A8DADC] aspect-square w-20 bottom-0 translate-y-[120%] absolute
            ${variant === "default" && "end-0 translate-x-1/2"}
            ${variant === "reverse" && "start-0 -translate-x-1/2"}
            `}
        />

        <Link to={link.href} onClick={(e) => !link.href && e.preventDefault()}>
          <ImageWrapper src={src} />
        </Link>
      </div>
    </section>
  );
};
