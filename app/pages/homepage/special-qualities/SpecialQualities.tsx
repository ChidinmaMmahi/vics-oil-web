import React from "react";

const SpecialQualities = () => {
  return (
    <section className="py-48 px-section relative flex flex-col items-center bg-yellow-50 dark:bg-yellow-900/10 border-2 border-b-0 sm:border-4 sm:border-b-0 border-yellow-600 dark:border-none">
      <div className="text-2xl sm:text-4xl font-bold bg-[url('/background/yellow-carton.jpg')] border-2 sm:border-4 border-yellow-600 dark:border-none bg-cover bg-center shadow-lg py-12 sm:py-20 px-1 absolute -top-15 sm:-top-25 w-[80vw] text-center">
        <div className="absolute inset-0 bg-yellow-900/50"></div>
        <h2 className="relative z-10 text-yellow-900 text-outline text-shadow-lg">
          What Makes Us Different
        </h2>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="w-1/2">
          <h3 className="text-2xl font-bold mb-3 sm:mb-5">Quality</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-bold mb-3 sm:mb-5">Quality</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialQualities;
