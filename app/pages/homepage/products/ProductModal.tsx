import React, { useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Button from "~/components/Button";

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
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-start justify-center pt-24"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-lg p-4 mx-4 shadow-2xl w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl relative"
        ref={modalRef}
      >
        <Button
          extraClasses="absolute -top-4 -right-4 !size-12 !p-0 !rounded-full flex items-center justify-center"
          onClick={onClose}
        >
          <IoCloseSharp className="text-lg" />
        </Button>
        <div className="h-96 w-full rounded mb-2 overflow-hidden bg-gray-200">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2 mb-6">
          <h2 className="text-xl font-semibold text-yellow-600">{name}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-green-700">${price}</h3>
        </div>
      </div>
    </section>
  );
};

export default ProductModal;
