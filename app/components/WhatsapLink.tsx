type WhatsappLinkProps = {
  children: React.ReactNode;
  extraClasses?: string;
};

const WhatsappLink = ({ children, extraClasses }: WhatsappLinkProps) => {
  const message = encodeURIComponent(
    "Hi, I am contacting you from your website"
  );
  const phoneNumber = "2348114910021";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${extraClasses}`}
    >
      {children}
    </a>
  );
};

export default WhatsappLink;
