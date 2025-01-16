export default function ContactForm() {
  return (
    <section id="contact" className="my-16">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="p-6 bg-zinc-800 rounded-lg border border-gray-700">
        <h3 className="text-xl font-semibold mb-4">
          Want to hire me as a freelancer? Let&apos;s discuss.
        </h3>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-4 px-6 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600"
        >
          Chat on WhatsApp
        </a>
        <form>
          <label className="block text-sm mb-2">Drop your email ID:</label>
          <div className="flex items-center">
            <input
              type="email"
              className="flex-1 px-4 py-2 rounded-l-lg bg-zinc-700 text-white border border-gray-600"
              placeholder="youremail@example.com"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-bold rounded-r-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
