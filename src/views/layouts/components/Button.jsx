export const Button = ({
  children,
  variant = "primary",
  isLink = false,
  href,
  target,
  className,
}) => {
  const ClassName = {
    base: `
    ${className}
    w-[180px] h-[50px] border-[none] rounded-[10px] bg-size-[250%] bg-left relative
    flex items-center justify-center cursor-pointer duration-500 overflow-hidden
    active:scale-[0.95]
    
    *:absolute *:content-["Text"] *:flex *:items-center *:justify-center *:w-[97%] *:h-[92%] 
    *:rounded-lg *:duration-1000 *:bg-[rgba(0,0,0,0.842)] *:bg-size-[200%]
    *:hover:bg-right *:hover:duration-1000
    `,
    primary:
      "bg-[#e63946] *:bg-transparent text-[#F1FAEE] font-semibold hover:bg-[#e63946cc] hover:duration-500",
    secondary:
      "bg-[linear-gradient(65deg,var(--grad-start),var(--grad-end),var(--grad-start),var(--grad-start),var(--grad-end),var(--grad-start))] text-(--grad-end) hover:bg-right hover:duration-1000",
  };

  if (isLink) {
    return (
      <a
        className={`${ClassName["base"]} ${ClassName[variant]}`}
        href={href}
        target={target}
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={`${ClassName["base"]} ${ClassName[variant]}`}>
      <span>{children}</span>
    </button>
  );
};
