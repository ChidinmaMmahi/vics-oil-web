import React, { useState } from "react";
import { products } from "./products";
import type { Product } from "./products";
import ProductModal from "./ProductModal";

const ProductsList = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return (
    <>
      <h2 className="text-4xl font-bold mb-5 sm:mb-7 text-center text-red-800">
        Products we offer
      </h2>
      <div className="flex items-center gap-4">
        <div className="overflow-x-auto pb-7">
          <div className="flex gap-6 w-max px-1 py-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-black/10 border-2 border-green-800/20 p-4 rounded-lg min-w-[250px] max-w-[300px] flex-shrink-0 hover:-translate-y-4 hover:border-green-800 hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="h-48 bg-white w-full rounded mb-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-6">
                  {product.name}
                </h3>
                <h4 className="text-center text-green-800 font-bold text-3xl mb-3">
                  ${product.price.toFixed(2)}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          onClose={() => setSelectedProduct(null)}
          imageUrl={selectedProduct.image}
          name={selectedProduct.name}
          price={selectedProduct.price}
          description={selectedProduct.description || ""}
        />
      )}
    </>
  );
};

export default ProductsList;
