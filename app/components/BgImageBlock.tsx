import type { ReactNode } from "react";

type BgImageBlock = {
  children: ReactNode;
  imageUrl: string;
};

const BgImageBlock = ({ children, imageUrl }: BgImageBlock) => {
  return (
    <section
      className="relative text-white bg-fixed bg-center bg-cover"
      style={{ backgroundImage: imageUrl }}
    >
      <div className="absolute inset-0 bg-green-950/70"></div>
      <div className="relative z-10 mx-auto px-section py-24 text-center">
        {children}
      </div>
    </section>
  );
};

export default BgImageBlock;
