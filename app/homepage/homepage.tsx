import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

const HomePage = () => {
  return (
    <>
      <header className="flex items-center shadow-lg">
        <div className="w-[100px] max-w-[100vw] p-4">
          <img
            src={logoLight}
            alt="React Router"
            className="block w-full dark:hidden"
          />
          <img
            src={logoDark}
            alt="React Router"
            className="hidden w-full dark:block"
          />
        </div>
      </header>
      <main className="">VicsOil</main>
    </>
  );
};

export default HomePage;
