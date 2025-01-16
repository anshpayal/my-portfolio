export default function Footer() {
  return (
    <footer className="mt-16 py-4 bg-zinc-900 border-t border-gray-700">
      <div className="text-sm flex items-center justify-between max-w-3xl mx-auto text-center">
        <p>&copy; 2025 Ansh Payal. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
