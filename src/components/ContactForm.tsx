"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "defaultServiceId";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "defaultTemplateId";
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "defaultUserId";

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(() => {
        setSuccessMessage("Email sent successfully!");
        setEmail("");
      })
      .catch(() => {
        setSuccessMessage("Failed to send email. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="my-16">
      <h2 className="text-4xl font-semibold mb-8 text-zinc-700 dark:text-white">
        Contact Me
      </h2>
      <div className="p-6 dark:bg-zinc-800 rounded-lg border border-gray-400 dark:border-gray-700">
        <h3 className="text-xl font-medium mb-4 text-zinc-700 dark:text-white">
          Want to hire me as a freelancer? Let&apos;s discuss.
        </h3>
        <a
          href="https://wa.me/918273637701?text=Hi%2C%20I%20want%20to%20work%20with%20you!"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 inline-flex items-center gap-2"
        >
          <FaWhatsapp size={18} />
          Chat on WhatsApp
        </a>
        <form onSubmit={handleEmailSubmit}>
          <label className="block text-sm mb-2 text-zinc-700 dark:text-white">
            Drop in your email ID and I will get back to you.
          </label>
          <div className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-l-lg dark:bg-zinc-700 bg-gray-200 text-white focus:outline-none"
              placeholder="youremail@example.com"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
        {successMessage && (
          <p className="mt-4 text-sm text-green-500">{successMessage}</p>
        )}
      </div>
    </section>
  );
}
