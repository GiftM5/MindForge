import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    {
      icon: '🧠',
      title: 'Think First, Then AI',
      description: 'Our Smart Prompt Flow asks what you\'ve tried before giving answers, building your critical thinking muscles.',
      gradient: 'var(--gradient-primary)'
    },
    {
      icon: '💻',
      title: 'Code Mentor Mode',
      description: 'Instead of code answers, get logic questions first. Learn to think through problems like a pro developer.',
      gradient: 'var(--gradient-success)'
    },
    {
      icon: '🏆',
      title: 'MindPoints Rewards',
      description: 'Earn points for solving problems independently. The less AI help you need, the more points you get.',
      gradient: 'var(--gradient-secondary)'
    },
    {
      icon: '📊',
      title: 'Human-AI Balance',
      description: 'Visual tracker shows how much you\'re using your brain vs AI. Aim for that perfect balance.',
      gradient: 'var(--gradient-warning)'
    },
    {
      icon: '🧭',
      title: 'Daily Challenges',
      description: 'Self-challenge mode with daily critical thinking puzzles and logic problems to keep you sharp.',
      gradient: 'var(--gradient-cosmic)'
    },
    {
      icon: '👣',
      title: 'Learning Trails',
      description: 'Structured pathways that blend effort, creativity, and AI learning for maximum growth.',
      gradient: 'var(--gradient-blue)'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">MF</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            MindForge
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <Link to="/signin" className="btn btn-secondary">
            Sign In
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Get Started
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full text-sm font-medium text-indigo-300 mb-8">
              🧠 Think first. Forge ahead.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl font-black mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Train Your Brain
            </span>
            <br />
            <span className="text-white">
              Before Using AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-secondary mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            MindForge helps learners, coders, and creatives <strong className="text-white">train their brains</strong> before
            turning to AI by rewarding effort, reflection, and independent problem-solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/signup" className="btn btn-primary btn-lg">
              🚀 Start Your Journey
            </Link>
            <Link to="/ai-assistant" className="btn btn-gradient-pink btn-lg">
              🤖 Try AI Assistant
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex justify-center items-center gap-8 text-sm text-muted"
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Free to use</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>No credit card required</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Start learning instantly</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Features That
            </span>
            <span className="text-white"> Build Minds</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Every feature is designed with one goal: strengthen your independent thinking
            before you reach for AI assistance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass p-8 text-center group relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: feature.gradient }}
              />
              <div className="relative z-10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="card-elevated p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already using MindForge to enhance 
            their critical thinking and problem-solving skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn btn-primary text-lg px-8 py-4">
              Create Free Account
            </Link>
            <Link to="/signin" className="btn btn-secondary text-lg px-8 py-4">
              Sign In to Continue
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MF</span>
              </div>
              <span className="text-xl font-bold">MindForge</span>
            </div>
            
            <div className="flex items-center gap-6 text-muted">
              <span>© 2024 MindForge. Built for learners, by learners.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
