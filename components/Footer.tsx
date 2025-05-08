import React from "react";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#000115] text-gray-300 py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          Built with coffee ☕, code 💻, and questionable sleep patterns by{" "}
          <span className="font-semibold text-white">Sidharth Sangelia</span>.
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/sidharthsangelia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sidharthsangelia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
