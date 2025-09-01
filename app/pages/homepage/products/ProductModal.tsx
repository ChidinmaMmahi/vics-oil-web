import React, { useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Button from "~/components/Button";
import WhatsappLink from "~/components/WhatsapLink";

type ProductModalProps = {
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  onClose: () => void;
};

const ProductModal = ({
  imageUrl,
  name,
  price,
  description,
  onClose,
}: ProductModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <section
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white dark:bg-black dark:border-2 dark:border-white/10 rounded-lg p-4 mx-4 shadow-2xl w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl relative"
        ref={modalRef}
      >
        <Button
          extraClasses="absolute -top-4 -right-4 !size-12 !p-0 !rounded-full flex items-center justify-center"
          onClick={onClose}
        >
          <IoCloseSharp className="text-lg" />
        </Button>
        <div className="h-96 w-full rounded mb-2 overflow-hidden bg-gray-200 dark:bg-white/20">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2 mb-6">
          <h2 className="text-xl font-semibold text-yellow-600">{name}</h2>
          <p className="text-white/70">{description}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-green-700">${price}</h3>
        </div>
        <WhatsappLink
          message={`Hi, I want to buy ${name} for $${price} as stated on your website`}
        >
          <Button>Buy Now</Button>
        </WhatsappLink>
      </div>
    </section>
  );
};

export default ProductModal;
