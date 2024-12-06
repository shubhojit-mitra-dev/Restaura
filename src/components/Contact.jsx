import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section className="container mt-20 mx-auto my-8 text-center" id="contact">
      <h2 className="mb-16 text-center text-3xl sm:text-5xl font-bold">Contact Us</h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="my-10 md:text-2xl md:my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-sm lg:text-3xl"
          >
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Contact;
