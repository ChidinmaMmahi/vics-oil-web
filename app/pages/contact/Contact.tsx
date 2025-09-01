import emailjs from "emailjs-com";
import { useRef } from "react";

import Button from "~/components/Button";
import PageAnimation from "~/components/PageAnimation";
import PageMargin from "~/components/PageMargin";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { MdEmail, MdPhone } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";

type FormInputProps = {
  label: string;
  type: string;
  name: string;
  textarea?: boolean;
};

type SocialContactProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
};

const FormInput = ({ label, type, name, textarea }: FormInputProps) => {
  const inputClasses =
    "bg-black/20 dark:bg-white/20 border border-black/30 dark:border-white/10 rounded-md p-2 focus:outline-none focus:border-red-700 dark:focus:border-red-700/50";
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="dark:text-white/70 text-sm">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          className={`${inputClasses} resize-none`}
          rows={5}
          required
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className={inputClasses}
          required
        />
      )}
    </div>
  );
};

const SocialContact = ({ icon, label, value, link }: SocialContactProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-white/10 dark:text-white/50 p-2 rounded-md cursor-pointer"
    >
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs">{value}</p>
      </div>
    </a>
  );
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_zqfqp8t",
        "template_0mz1ben",
        form.current,
        "ec5u3scPKvYCGcfru"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <PageAnimation>
      <PageMargin>
        <main className="pb-20 px-section pt-4">
          <section className="w-full h-[400px] rounded overflow-hidden shadow-lg mb-10">
            <iframe
              title="VicsOil Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.87898868372!2d3.382358475132305!3d6.536963123006453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d0f3ab0db23%3A0xe45196acd5fe74fd!2s4%20Anifowoshe%20St%2C%20Bariga%2C%20Lagos%20100223%2C%20Lagos!5e0!3m2!1sen!2sng!4v1756416614513!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>

          <form
            action=""
            className="mb-10 md:w-2/3 xl:w-1/2 space-y-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <h1 className="text-2xl font-medium mb-4 text-red-800">
              Leave Us A Message
            </h1>
            <FormInput label="Name" type="text" name="name" />
            <FormInput label="Email" type="email" name="email" />
            <FormInput label="Phone Number" type="tel" name="phone" />
            <FormInput
              label="Message"
              type="textarea"
              name="message"
              textarea
            />
            <Button>Send Message</Button>
          </form>

          <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-8">
            <SocialContact
              icon={<MdPhone className="text-green-600" />}
              label="Phone"
              value="09027184113"
              link="tel:09027184113"
            />
            <SocialContact
              icon={<MdEmail className="text-blue-700" />}
              label="Email"
              value="vicsoilng@gmail.com"
              link="mailto:vicsoilng@gmail.com"
            />
            <SocialContact
              icon={<ImWhatsapp className="text-green-600" />}
              label="WhatsApp"
              value="+234 902 718 4113"
              link="https://wa.me/2349027184113"
            />
            <SocialContact
              icon={<LuInstagram className="text-pink-700" />}
              label="Instagram"
              value="vics_oil"
              link="https://www.instagram.com/vics_oil/"
            />
            <SocialContact
              icon={<FaFacebook className="text-blue-700" />}
              label="Facebook"
              value="vicsoilng"
            />
            <SocialContact
              icon={<FaTiktok />}
              label="Tiktok"
              value="vicsoilng"
            />
          </section>
        </main>
      </PageMargin>
    </PageAnimation>
  );
};

export default Contact;
