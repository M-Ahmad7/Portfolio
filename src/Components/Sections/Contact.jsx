import React, { useRef, useState } from "react";
import ScrollAnimation from "../ScrollAnimation";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "SERVICE_ID:",
      import.meta.env.VITE_SERVICE_ID,
      "TEMPLATE_ID:",
      import.meta.env.VITE_TEMPLATE_ID,
      "PUBLIC_KEY:",
      import.meta.env.VITE_PUBLIC_KEY
    );

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Ooops! Something went wrong. Please try again!");
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center"
    >
      <ScrollAnimation>
        <div className="px-4 max-md:w-screen md:w-150 ">
          <h2 className="text-2xl  font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-500 leading-tight bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form
            action=""
            className="space-y-6"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-4 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_15px_#3b82f6]"
            >
              Submit
            </button>
          </form>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Contact;
