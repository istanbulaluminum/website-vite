export const HeroSection = ({ title, subtitle, background }) => {
  return (
    <section className="-px-res px-res relative min-h-[50vh] flex flex-col justify-center gap-5">
      <div className="absolute inset-0 object-cover -z-40 bg-black">
        <img
          src={background}
          alt="Hero Image"
          width={1920}
          height={1080}
          className="object-cover min-h-[50vh]"
        />
      </div>
      <div className="absolute inset-0 -z-30 bg-black/50" />
      <h1
        className={
          "text-white font-bold text-4xl md:text-5xl lg:text-6xl max-w-xl md:leading-normal lg:leading-[1.75]"
        }
      >
        {title}
      </h1>
      {subtitle && (
        <p className={"text-white text-base lg:text-lg max-w-xl mt-4"}>
          {subtitle}
        </p>
      )}
    </section>
  );
};
