import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BalanceTracker = () => {
  const [balanceData, setBalanceData] = useState({
    humanThinking: 78,
    aiAssistance: 22,
    totalSessions: 24,
    independentSolves: 18,
    aiHelped: 6,
    mindPoints: 1247,
    streak: 7
  });

  const [timeframe, setTimeframe] = useState('week');

  const weeklyData = [
    { day: 'Mon', human: 85, ai: 15, sessions: 3 },
    { day: 'Tue', human: 70, ai: 30, sessions: 4 },
    { day: 'Wed', human: 90, ai: 10, sessions: 2 },
    { day: 'Thu', human: 65, ai: 35, sessions: 5 },
    { day: 'Fri', human: 80, ai: 20, sessions: 3 },
    { day: 'Sat', human: 75, ai: 25, sessions: 4 },
    { day: 'Sun', human: 82, ai: 18, sessions: 3 }
  ];

  const getBalanceMessage = (percentage) => {
    if (percentage >= 80) return { message: "🧠 Excellent! You're thinking independently", color: "text-green-400" };
    if (percentage >= 60) return { message: "💪 Good balance! Keep strengthening your mind", color: "text-blue-400" };
    if (percentage >= 40) return { message: "🤔 Consider trying more on your own first", color: "text-yellow-400" };
    return { message: "🎯 Let's work on independent thinking!", color: "text-red-400" };
  };

  const balanceMessage = getBalanceMessage(balanceData.humanThinking);

  const recommendations = [
    {
      icon: '🧠',
      title: 'Think First Challenge',
      description: 'Spend 10 minutes thinking before asking AI',
      action: 'Start Challenge',
      points: '+15 MindPoints'
    },
    {
      icon: '📝',
      title: 'Document Your Process',
      description: 'Write down your approach before getting help',
      action: 'Open Journal',
      points: '+10 MindPoints'
    },
    {
      icon: '⏰',
      title: 'Time Boxing',
      description: 'Set 20-minute independent work sessions',
      action: 'Set Timer',
      points: '+20 MindPoints'
    },
    {
      icon: '🎯',
      title: 'Independence Goal',
      description: 'Aim to solve 80% of problems independently',
      action: 'Set Goal',
      points: '+25 MindPoints'
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              📊 Human-AI Balance
            </h1>
            <p className="text-secondary mt-2">Track your independent thinking vs AI assistance</p>
          </div>
          <Link to="/dashboard" className="btn btn-secondary">
            ← Dashboard
          </Link>
        </div>

        {/* Main Balance Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Circular Balance Meter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Your Balance</h2>
            
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="none"
                />
                {/* Human thinking arc */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#humanGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${balanceData.humanThinking * 2.51} 251.2`}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 251.2" }}
                  animate={{ strokeDasharray: `${balanceData.humanThinking * 2.51} 251.2` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                {/* AI assistance arc */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#aiGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${balanceData.aiAssistance * 2.51} 251.2`}
                  strokeDashoffset={`-${balanceData.humanThinking * 2.51}`}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 251.2" }}
                  animate={{ strokeDasharray: `${balanceData.aiAssistance * 2.51} 251.2` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
                
                <defs>
                  <linearGradient id="humanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                  <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#A78BFA" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-4xl font-bold ${balanceMessage.color}`}>
                    {balanceData.humanThinking}%
                  </div>
                  <div className="text-muted text-sm">Independent</div>
                </div>
              </div>
            </div>

            <p className={`${balanceMessage.color} font-semibold mb-4`}>
              {balanceMessage.message}
            </p>

            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                <span>Human Thinking ({balanceData.humanThinking}%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
                <span>AI Help ({balanceData.aiAssistance}%)</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Your Stats</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-tertiary rounded-lg">
                <div className="text-2xl font-bold text-green-400">{balanceData.mindPoints}</div>
                <div className="text-sm text-muted">MindPoints</div>
              </div>
              <div className="text-center p-4 bg-tertiary rounded-lg">
                <div className="text-2xl font-bold text-blue-400">{balanceData.streak}</div>
                <div className="text-sm text-muted">Day Streak</div>
              </div>
              <div className="text-center p-4 bg-tertiary rounded-lg">
                <div className="text-2xl font-bold text-purple-400">{balanceData.independentSolves}</div>
                <div className="text-sm text-muted">Independent Solves</div>
              </div>
              <div className="text-center p-4 bg-tertiary rounded-lg">
                <div className="text-2xl font-bold text-cyan-400">{balanceData.totalSessions}</div>
                <div className="text-sm text-muted">Total Sessions</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted">Independence Rate</span>
                <span className="font-semibold text-green-400">
                  {Math.round((balanceData.independentSolves / balanceData.totalSessions) * 100)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted">This Week's Improvement</span>
                <span className="font-semibold text-blue-400">+12%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted">Best Day</span>
                <span className="font-semibold text-purple-400">Wednesday (90%)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Weekly Trend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Weekly Trend</h2>
          <div className="flex justify-between items-end h-40">
            {weeklyData.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex flex-col gap-1">
                  <div 
                    className="w-8 bg-gradient-to-t from-green-500 to-green-400 rounded-t"
                    style={{ height: `${day.human * 1.2}px` }}
                  ></div>
                  <div 
                    className="w-8 bg-gradient-to-t from-purple-500 to-purple-400 rounded-b"
                    style={{ height: `${day.ai * 1.2}px` }}
                  ></div>
                </div>
                <span className="text-muted text-sm">{day.day}</span>
                <span className="text-xs text-secondary">{day.sessions} sessions</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Improve Your Balance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-tertiary p-6 rounded-lg hover:bg-elevated transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{rec.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">{rec.title}</h4>
                    <p className="text-secondary text-sm mb-4">{rec.description}</p>
                    <div className="flex justify-between items-center">
                      <button className="btn btn-sm btn-primary">
                        {rec.action}
                      </button>
                      <span className="text-green-400 text-sm font-semibold">
                        {rec.points}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BalanceTracker;
