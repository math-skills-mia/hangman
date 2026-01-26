import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaGamepad,
  FaReact,
  FaJs,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";
import { ReactTyped } from "react-typed";

function AboutPage() {
  const [activeTab, setActiveTab] = useState("about");

  const typedStrings = [
    "React Developer",
    "Game Creator",
    "Mathmatician",
    "UI/UX Designer",
  ];

  return (
    <div className="min-h-screen bg-lime-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-lime-200">GamesHub</span> & Creator
          </h1>
          <div className="h-1 w-24 bg-lime-200 mx-auto mb-6"></div>

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

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
              {/* Profile Image Placeholder */}
              <div className="w-48 h-48 mx-auto rounded-full bg-linear-to-br from-purple-400 to-blue-400 mb-6 flex items-center justify-center">
                <span className="text-white text-6xl">🎮</span>
              </div>

              <h2 className="text-2xl font-bold text-center text-lime-950 mb-2">
                Mia Striebeck
              </h2>
              <p className="text-slate-600 text-center mb-6">
                Frontend/Backend Developer Mathmatician
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
                  <span>github.com/math-skills-mia</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mia-striebeck/"
                  className="flex items-center gap-3 text-slate-700 hover:text-lime-500 transition"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn Profile</span>
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
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2">
            {/* Tab Navigation */}
            <div className="flex border-b border-slate-200 mb-8">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-6 py-3 font-medium ${activeTab === "about" ? "text-lime-400 border-b-2 border-lime-400" : "text-slate-400"}`}
              >
                <FaCode className="inline mr-2" />
                About Me
              </button>
              <button
                onClick={() => setActiveTab("gameshub")}
                className={`px-6 py-3 font-medium ${activeTab === "gameshub" ? "text-lime-400 border-b-2 border-lime-400" : "text-slate-400"}`}
              >
                <FaGamepad className="inline mr-2" />
                About GamesHub
              </button>
            </div>

            {/* About Me */}
            {activeTab === "about" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-lime-900 mb-4">
                    Hello!
                  </h3>
                  <p className="text-slate-700 mb-4">
                    I'm a mathematician who codes. For me, programming is
                    applied mathematics—it's about solving puzzles, building
                    systems, and finding elegant solutions
                  </p>
                  <p className="text-slate-700 mb-4">
                    Games are the perfect intersection of these interests. Each
                    game is a logical system to design, implement, and refine.
                    The same analytical thinking that solves math problems helps
                    me write clean, efficient code.{" "}
                    <span className="font-bold text-lime-700">
                      This site is where I combine mathematics, programming, and
                      game design.
                    </span>
                  </p>
                  <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500 mt-4">
                    <p className="text-lime-800">
                      GamesHub is where I learning modern web development
                      through building fun, interactive projects.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    The Math ↔ Code Connection
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <span className="text-2xl">🧮</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-700">
                            Problem-Solving
                          </h4>
                          <p className="text-slate-600 text-sm">
                            Breaking complex problems into solvable steps—just
                            like mathematical proofs
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <span className="text-2xl">⚡</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-700">
                            Algorithmic Thinking
                          </h4>
                          <p className="text-slate-600 text-sm">
                            Designing efficient solutions with logical flow and
                            optimization
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <span className="text-2xl">🎯</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-700">
                            Pattern Recognition
                          </h4>
                          <p className="text-slate-600 text-sm">
                            Identifying reusable patterns in code—similar to
                            mathematical structures
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-orange-100 p-2 rounded-lg">
                          <span className="text-2xl">🔍</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-700">
                            Debugging as Proof
                          </h4>
                          <p className="text-slate-600 text-sm">
                            Each bug is a hypothesis to test, with console logs
                            as my mathematical scratchwork
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Mathematical Mindset → Code Solutions
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                    <span className="text-xl">📐</span> Analytical Skills
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Abstract problem decomposition
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Logical reasoning & proof techniques
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Algorithm complexity analysis
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                    <span className="text-xl">🎮</span> Game Development
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Game logic & state machines
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Interactive UI/UX design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Mathematical game mechanics
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                    <span className="text-xl">💻</span> Technical Stack
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      React + TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Mathematical libraries (coming soon)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About Me Content */}
            {activeTab === "about" && (
              <div className="space-y-6">
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
            )}

            {/* About GamesHub Content */}
            {activeTab === "gameshub" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    🎮 About GamesHub
                  </h3>
                  <p className="text-slate-700 mb-4">
                    GamesHub is a collection of classic browser games built with
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

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    🧮 Future Math Games (Coming Soon)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-2 border-dashed border-purple-300 rounded-lg p-4">
                      <h4 className="font-bold text-purple-700 mb-2">
                        Prime Number Hunter
                      </h4>
                      <p className="text-slate-600 text-sm">
                        Identify prime numbers against the clock—applying number
                        theory in real-time
                      </p>
                    </div>
                    <div className="border-2 border-dashed border-blue-300 rounded-lg p-4">
                      <h4 className="font-bold text-blue-700 mb-2">
                        Graph Theory Explorer
                      </h4>
                      <p className="text-slate-600 text-sm">
                        Navigate networks and solve pathfinding problems with
                        visual algorithms
                      </p>
                    </div>
                    <div className="border-2 border-dashed border-green-300 rounded-lg p-4">
                      <h4 className="font-bold text-green-700 mb-2">
                        Logic Gate Simulator
                      </h4>
                      <p className="text-slate-600 text-sm">
                        Build circuits from Boolean logic—bridging discrete math
                        and computing
                      </p>
                    </div>
                    <div className="border-2 border-dashed border-orange-300 rounded-lg p-4">
                      <h4 className="font-bold text-orange-700 mb-2">
                        Calculus Visualizer
                      </h4>
                      <p className="text-slate-600 text-sm">
                        Interactive exploration of derivatives, integrals, and
                        limits
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 mt-4 text-sm italic">
                    Each game turns mathematical concepts into interactive
                    challenges—because the best way to understand math is to
                    play with it.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    🚀 Future Plans
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-700">More Games</h4>
                        <p className="text-slate-600">
                          Memory match, Tic-tac-toe, Word search, and more!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        Planned
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-700">
                          User Features
                        </h4>
                        <p className="text-slate-600">
                          Score tracking, difficulty levels, multiplayer options
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        Ideas
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-700">
                          Tech Improvements
                        </h4>
                        <p className="text-slate-600">
                          Backend integration, real-time features, PWA support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="mt-8 bg-linear-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
              <p className="mb-6">
                Interested in collaboration or have feedback on GamesHub?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:you@example.com"
                  className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition"
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
