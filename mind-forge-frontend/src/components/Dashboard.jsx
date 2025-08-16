import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const stats = [
    { label: 'Total Score', value: '1,247', change: '+12%', color: 'text-accent' },
    { label: 'Questions Answered', value: '89', change: '+5', color: 'text-success' },
    { label: 'Learning Streak', value: '7 days', change: '+1', color: 'text-warning' },
    { label: 'Accuracy Rate', value: '84%', change: '+3%', color: 'text-accent' }
  ];

  const recentActivity = [
    { type: 'question', title: 'Solved algebra problem', points: 15, time: '2 hours ago' },
    { type: 'achievement', title: 'Earned "Quick Learner" badge', points: 25, time: '1 day ago' },
    { type: 'question', title: 'Completed coding challenge', points: 20, time: '2 days ago' },
    { type: 'milestone', title: 'Reached 1000 points!', points: 50, time: '3 days ago' }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-primary p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">MF</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted">Welcome back, ready to learn?</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="btn btn-secondary">Profile</button>
            <Link to="/" className="btn btn-secondary">Logout</Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex justify-between items-start mb-2">
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-success">
                  {stat.change}
                </div>
              </div>
              <div className="text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Start */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-6"
          >
            <h2 className="text-xl font-bold mb-4">Quick Start</h2>
            <div className="space-y-3">
              <Link to="/ai-assistant" className="btn btn-primary w-full justify-start">
                🤖 Start AI Learning Session
              </Link>
              <Link to="/code-mentor" className="btn btn-gradient-pink w-full justify-start">
                💻 Code Mentor Mode
              </Link>
              <Link to="/balance-tracker" className="btn btn-success w-full justify-start">
                📊 Balance Tracker
              </Link>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="card p-6"
          >
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-tertiary rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{activity.title}</div>
                    <div className="text-muted text-xs">{activity.time}</div>
                  </div>
                  <div className="text-accent font-semibold text-sm">
                    +{activity.points}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Learning Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card p-6"
        >
          <h2 className="text-xl font-bold mb-4">Learning Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">7</span>
              </div>
              <div className="font-semibold">Day Streak</div>
              <div className="text-muted text-sm">Keep it up!</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">84%</span>
              </div>
              <div className="font-semibold">Accuracy</div>
              <div className="text-muted text-sm">Excellent work</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">L3</span>
              </div>
              <div className="font-semibold">Level 3</div>
              <div className="text-muted text-sm">253 pts to Level 4</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
