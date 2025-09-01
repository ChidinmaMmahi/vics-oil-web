type WhatsappLinkProps = {
  children: React.ReactNode;
  extraClasses?: string;
  message?: string;
};

const WhatsappLink = ({
  children,
  extraClasses,
  message,
}: WhatsappLinkProps) => {
  const encodedMessage = encodeURIComponent(
    message || "Hi, I am contacting you from your website"
  );
  const phoneNumber = "2349027184113";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

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
