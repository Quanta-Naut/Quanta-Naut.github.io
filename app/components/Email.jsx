"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qzqew3t",
        "template_1hjhmdo",
        form.current,
        "Ncs3h9vJg-Xs4PbGd"
      )
      .then((result) => {
        toast.success("Message sent");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        toast.error("Something went wrong");
      });

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Quanta-Naut" target="blank">
            <Image
              src={"./images/github-icon.svg"}
              alt="Github Icon"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/tarun-kumar-s-676a74267/" target="blank">
            <Image
              src={"./images/linkedin-icon.svg"}
              alt="Linkedin Icon"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="user_email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block text-sm mb-2 font-medium"
            >
              Name
            </label>
            <input
              name="user_name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            value="Send"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full border-2 border-pink-600 hover:text-pink-600 transition-colors duration-850"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
const Section = () => {
  return (
    <div id="contacts">
      <div className="flex flex-col items-center justify-center mt-28">
        <h2 className="text-4xl font-bold">Contact</h2>
      </div>
      <EmailSection />
    </div>
  );
};

export default Section;
