import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Starfield from './Starfield';
import reactLogo from './assets/react.svg';
import mindforgeLogo from './assets/MindForge_logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import viteLogo from '/vite.svg';
import './App.css';

function Home() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
  aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
};
  
  return (
    <>
      <div className="w-full flex justify-center pt-6 z-50 relative">
        <img
          src={mindforgeLogo}
          alt="MindForge Logo"
          className="w-16 sm:w-20 drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
        />
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-start text-center px-4 py-20 space-y-6">
        <Starfield />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-5xl sm:text-6xl font-extrabold p-8 text-white drop-shadow-lg z-10 relative top-10"
        >
          Welcome to MindForge
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          onClick={scrollToAbout}
          className="mt-12 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:from-pink-500 hover:to-purple-600 z-10 relative top-6"
        >
          Let's get started!
        </motion.button>
      </div>

      <div
        ref={aboutRef}
        className="bg-black bg-opacity-90 text-white py-20 px-6 sm:px-20 space-y-10 max-w-4xl mx-auto rounded-3xl mt-16 shadow-lg"
      >
        <h2
          className="text-4xl font-bold text-center"
          style={{
            textShadow: `
              0 0 5px #d8a3ff,
              0 0 10px #bb86fc,
              0 0 20px #9f7efc,
              0 0 30px #8a65f7,
              0 0 40px #7c52e8
            `,
          }}
        >
          What is MindForge?
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-relaxed font-medium text-gray-200">
          MindForge is more than a platform, it’s a mindset. We believe your mind is your greatest tool. That’s why we help you think, write, plan, and brainstorm before relying on AI.
        </p>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed font-medium text-gray-200">
          Whether you're a student, a developer, or just a deep thinker, MindForge keeps your creativity in the spotlight. You come up with the ideas. AI is just your assistant.
        </p>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed font-medium text-gray-200">
          This isn’t just another app. It’s your digital forge where raw thoughts become gold.
        </p>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed font-semibold text-gray-100">
          Interested in being part of us? Sign up or continue with Sign In below.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold shadow-lg"
            >
              Sign Up
            </motion.button>
          </Link>
          <Link to="/signin">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-xl font-semibold shadow-lg"
            >
              Sign In
            </motion.button>
          </Link>
        </div>

        <div className="mt-20">
          <div className="flex justify-center mt-12 space-x-6">
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
              <img
                src={viteLogo}
                className="w-12 transition-transform duration-300 hover:scale-110"
                style={{ filter: 'drop-shadow(0 0 8px #ffb64d)' }}
                alt="Vite logo"
              />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <img
                src={reactLogo}
                className="w-12 transition-transform duration-300 hover:scale-110"
                style={{ filter: 'drop-shadow(0 0 8px #61dafb)' }}
                alt="React logo"
              />
            </a>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            Built with ❤️ using Vite + React
          </p>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
