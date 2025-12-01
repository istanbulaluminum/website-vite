export const ImageWrapper = ({
  width = 640,
  height = 512,
  maxWidth = 640,
  aspectRatio = 1.25,
  src,
}) => {
  return (
    <div
      className="relative min-w-24 min-h-24 pt-12 pr-12 pl-8 pb-8 group hover:p-8f"
      style={{ maxWidth }}
    >
      <div className="w-24 h-24 bg-[#457B9D] absolute top-0 rounded-lg right-0 transition-all duration-500 group-hover:w-2 group-hover:h-[50%] group-hover:rounded-sm group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:-translate-x-4" />
      <div className="w-16 h-16 bg-[#e63946] absolute bottom-0 rounded-lg left-0 transition-all  duration-500 group-hover:w-2 group-hover:h-[50%] group-hover:rounded-sm group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:translate-x-0" />
      <img
        src={src}
        alt="Image"
        width={width}
        height={height}
        className="object-cover scale-100 group-hover:scale-[1.05] transition-transform duration-500 w-full cursor-pointer rounded-3xl"
        style={{ aspectRatio }}
      />
    </div>
  );
};
