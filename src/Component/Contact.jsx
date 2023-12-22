import React from "react";

const ContactUsForm = () => {
  return (
    <section className="flex justify-center items-center bg-slate-700 ">
      <div className="mt-36 mb-5">
        <p className="text-center text-6xl font-medium mt-5">
          Feel free to{" "}
          <span className="text-cyan-200 underline">Connect Us.</span>
        </p>
        <form
          action="https://formspree.io/f/xbjnrgod"
          method="POST"
          className="form-container flex flex-col lg:p-4 p-7 mt-10 mb-5"
        >
          <input
            type="text"
            placeholder="Enter User Name"
            name="username"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email here"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter your message..."
            autoComplete="off"
            required
          ></textarea>

          <input
            type="submit"
            className="bg-yellow-400 cursor-pointer p-2 text-2xl"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;
