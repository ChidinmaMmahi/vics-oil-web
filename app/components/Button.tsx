type Button = {
  children: string | React.ReactNode;
  extraClasses?: string;
  onClick?: () => void;
};

const generalClasses =
  "bg-red-900 text-white px-8 py-2.5 cursor-pointer hover:scale-[1.05] transition-all duration-500 rounded-sm";

const Button = ({ children, extraClasses, onClick }: Button) => {
  return (
    <button className={`${generalClasses} ${extraClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
