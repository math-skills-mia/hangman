import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaGamepad,
  FaReact,
  FaJs,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";
import { ReactTyped } from "react-typed";

function AboutPage() {
  const [activeTab, setActiveTab] = useState("about");

  const typedStrings = [
    "React Developer",
    "Game Creator",
    "Mathematician",
    "UI/UX Designer",
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-5 px-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-lime-200">LogicArcade</span> & Creator
          </h1>
          <div className="h-1 w-24 bg-lime-200 mx-auto mb-3"></div>

          {/* Typed Component - Perfect for tech skills */}
          <div className="text-xl md:text-2xl text-slate-600 h-10">
            <ReactTyped
              strings={typedStrings}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="font-bold text-white"
            />
          </div>
        </div>

        {/* Grid: 1 col on mobile, 2 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,1fr)_minmax(0,3fr)] gap-8">
          {/* Left Column - Personal Info */}
          <div className="bg-white rounded-2xl shadow-xl p-6 top-6">
            {/* Profile Image Placeholder */}
            <div className="w-48 h-48 mx-auto rounded-full bg-lime-600 mb-6 flex items-center justify-center">
              <span className="text-white text-6xl">image here</span>
            </div>

            <h2 className="text-2xl font-bold text-center text-lime-950 mb-2">
              Mia Striebeck
            </h2>
            <p className="text-slate-600 text-center mb-6">
              Frontend/Backend Developer & Mathematician
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:miaastriebeck@gmail.com"
                className="flex items-center gap-3 text-slate-700 hover:text-lime-500 transition"
              >
                <FaEnvelope className="text-xl" />
                <span>miaastriebeck@gmail.com</span>
              </a>
              <a
                href="https://github.com/math-skills-mia"
                className="flex items-center gap-3 text-slate-700 hover:text-lime-500 transition"
              >
                <FaGithub className="text-xl" />
                <span>@math-skills-mia</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mia-striebeck/"
                className="flex items-center gap-3 text-slate-700 hover:text-lime-500 transition"
              >
                <FaLinkedin className="text-xl" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-bold text-lg text-slate-800 mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-800 rounded-full">
                  <FaReact /> React
                </span>
                <span className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-800 rounded-full">
                  <FaJs /> JavaScript
                </span>
                <span className="flex items-center gap-2 px-3 py-2 bg-yellow-100 text-yellow-800 rounded-full">
                  <SiTypescript /> TypeScript
                </span>
                <span className="flex items-center gap-2 px-3 py-2 bg-teal-100 text-teal-800 rounded-full">
                  <SiTailwindcss /> Tailwind
                </span>
                <span className="flex items-center gap-2 px-3 py-2 bg-purple-100 text-purple-800 rounded-full">
                  <SiVite /> Vite
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Tab Navigation */}
            <div className="flex border-b border-slate-200 mb-8">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-6 py-3 font-medium ${
                  activeTab === "about"
                    ? "text-lime-400 border-b-2 border-lime-400"
                    : "text-slate-400"
                }`}
              >
                <FaCode className="inline mr-2" />
                About Me
              </button>
              <button
                onClick={() => setActiveTab("logicArcade")}
                className={`px-6 py-3 font-medium ${
                  activeTab === "logicArcade"
                    ? "text-lime-400 border-b-2 border-lime-400"
                    : "text-slate-400"
                }`}
              >
                <FaGamepad className="inline mr-2" />
                About LogicArcade
              </button>
            </div>

            {/* About Me */}
            {activeTab === "about" && (
              <>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-lime-900 mb-4">
                      Hello!
                    </h3>
                    <p className="text-slate-700 mb-4">
                      I'm a mathematician who codes. For me, programming is
                      applied mathematics—it's about solving puzzles, building
                      systems, and finding elegant solutions.
                    </p>
                    <p className="text-slate-700 mb-4">
                      Games are the perfect intersection of these interests.
                      Each game is a logical system to{" "}
                      <span className="font-bold text-lime-700">
                        design, implement, and refine.
                      </span>{" "}
                      The same analytical thinking that solves math problems
                      helps me write clean, efficient code.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      Skills & Expertise
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-slate-700 mb-2">
                          Frontend
                        </h4>
                        <ul className="space-y-1 text-slate-600">
                          <li>• React & Next.js</li>
                          <li>• TypeScript</li>
                          <li>• Tailwind CSS</li>
                          <li>• Responsive Design</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-700 mb-2">
                          Development
                        </h4>
                        <ul className="space-y-1 text-slate-600">
                          <li>• Git & GitHub</li>
                          <li>• Vite Build Tool</li>
                          <li>• API Integration</li>
                          <li>• Testing & Debugging</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* About LogicArcade Content */}
            {activeTab === "logicArcade" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    About LogicArcade
                  </h3>
                  <p className="text-slate-700 mb-4">
                    LogicArcade is a collection of browser games built with
                    modern web technologies. The project showcases interactive
                    UI/UX design, state management, and game logic
                    implementation using React and TypeScript.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-bold text-amber-800 mb-2">
                        Project Goals
                      </h4>
                      <ul className="space-y-2 text-amber-700">
                        <li>• Learn React through practical projects</li>
                        <li>• Master TypeScript in real applications</li>
                        <li>• Create responsive, accessible games</li>
                        <li>• Build a portfolio piece</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-bold text-yellow-800 mb-2">
                        Features
                      </h4>
                      <ul className="space-y-2 text-yellow-700">
                        <li>• No installation required</li>
                        <li>• Mobile-responsive design</li>
                        <li>• Clean, modern UI</li>
                        <li>• Progressive enhancement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="mt-8 bg-linear-to-r from-amber-500 to-lime-500 rounded-xl shadow-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
              <p className="mb-6">
                Interested in collaboration or have feedback on LogicArcade?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:you@example.com"
                  className="bg-white text-sky-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition"
                >
                  Send Email
                </a>
                <a
                  href="https://github.com/math-skills-mia/hangman"
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
