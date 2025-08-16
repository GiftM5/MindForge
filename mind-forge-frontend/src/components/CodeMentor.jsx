import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CodeMentor = () => {
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const challenges = [
    {
      id: 1,
      title: "Two Sum Problem",
      difficulty: "Easy",
      points: 15,
      description: "Given an array of integers and a target sum, return indices of two numbers that add up to the target.",
      example: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1] (because nums[0] + nums[1] = 2 + 7 = 9)",
      steps: [
        {
          question: "What's the first approach that comes to mind for solving this problem?",
          type: "text",
          hints: ["Think about checking every possible pair", "Consider the brute force approach first"]
        },
        {
          question: "What would be the time complexity of checking every possible pair?",
          type: "multiple",
          options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
          correct: 1,
          explanation: "Checking every pair requires nested loops, giving us O(n²) time complexity."
        },
        {
          question: "Can you think of a data structure that could help us solve this more efficiently?",
          type: "text",
          hints: ["What if we could look up values quickly?", "Think about hash tables/maps"]
        },
        {
          question: "What would be the time complexity using a hash map approach?",
          type: "multiple",
          options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
          correct: 0,
          explanation: "With a hash map, we can solve this in O(n) time with a single pass."
        }
      ],
      solution: `function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}`
    },
    {
      id: 2,
      title: "Reverse a String",
      difficulty: "Easy",
      points: 10,
      description: "Write a function that reverses a string. The input string is given as an array of characters.",
      example: "Input: ['h','e','l','l','o']\nOutput: ['o','l','l','e','h']",
      steps: [
        {
          question: "What's the simplest approach to reverse an array?",
          type: "text",
          hints: ["Think about swapping elements", "Consider using two pointers"]
        },
        {
          question: "If we use two pointers, where should they start?",
          type: "multiple",
          options: ["Both at the beginning", "Both at the end", "One at start, one at end", "One at middle"],
          correct: 2,
          explanation: "We start with one pointer at the beginning and one at the end, then move them toward each other."
        },
        {
          question: "When should we stop swapping?",
          type: "text",
          hints: ["When do the pointers meet?", "Think about the middle of the array"]
        }
      ],
      solution: `function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap characters
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    
    return s;
}`
    }
  ];

  const startChallenge = (challenge) => {
    setCurrentChallenge(challenge);
    setCurrentStep(0);
    setUserAnswers({});
    setShowSolution(false);
  };

  const handleAnswer = (answer) => {
    const newAnswers = { ...userAnswers, [currentStep]: answer };
    setUserAnswers(newAnswers);

    if (currentStep < currentChallenge.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate score based on correct answers
      let correctCount = 0;
      currentChallenge.steps.forEach((step, index) => {
        if (step.type === 'multiple' && newAnswers[index] === step.correct) {
          correctCount++;
        }
      });
      const earnedPoints = Math.round((correctCount / currentChallenge.steps.filter(s => s.type === 'multiple').length) * currentChallenge.points);
      setScore(score + earnedPoints);
      setShowSolution(true);
    }
  };

  const resetChallenge = () => {
    setCurrentChallenge(null);
    setCurrentStep(0);
    setUserAnswers({});
    setShowSolution(false);
  };

  if (!currentChallenge) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                💻 Code Mentor Mode
              </h1>
              <p className="text-secondary mt-2">Think through the logic first, then see the solution</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{score}</div>
                <div className="text-sm text-muted">Points</div>
              </div>
              <Link to="/dashboard" className="btn btn-secondary">
                ← Dashboard
              </Link>
            </div>
          </div>

          {/* Challenge Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 cursor-pointer"
                onClick={() => startChallenge(challenge)}
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{challenge.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                      challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {challenge.difficulty}
                    </span>
                    <span className="text-blue-400 font-semibold">{challenge.points}pts</span>
                  </div>
                </div>
                <p className="text-secondary mb-4">{challenge.description}</p>
                <div className="bg-tertiary p-3 rounded font-mono text-sm text-muted">
                  {challenge.example}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentStepData = currentChallenge.steps[currentStep];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">{currentChallenge.title}</h1>
            <p className="text-secondary">Step {currentStep + 1} of {currentChallenge.steps.length}</p>
          </div>
          <button onClick={resetChallenge} className="btn btn-secondary">
            ← Back to Challenges
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted mb-2">
            <span>Progress</span>
            <span>{Math.round(((currentStep + 1) / currentChallenge.steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-tertiary rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / currentChallenge.steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!showSolution ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass p-8"
            >
              <h2 className="text-xl font-semibold text-white mb-6">
                {currentStepData.question}
              </h2>

              {currentStepData.type === 'text' ? (
                <div className="space-y-4">
                  <textarea
                    className="input textarea w-full h-32"
                    placeholder="Share your thoughts and approach..."
                  />
                  <button 
                    onClick={() => handleAnswer('text-answer')}
                    className="btn btn-primary"
                  >
                    Continue →
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {currentStepData.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="w-full p-4 text-left bg-tertiary hover:bg-elevated border border-primary hover:border-accent rounded-lg transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {currentStepData.hints && (
                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">💡 Hints:</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    {currentStepData.hints.map((hint, index) => (
                      <li key={index}>• {hint}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="glass p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">🎉 Challenge Complete!</h2>
                <p className="text-secondary mb-6">Great job thinking through the problem step by step!</p>
                <div className="text-3xl font-bold text-green-400 mb-2">+{currentChallenge.points} Points</div>
                <div className="text-muted">Added to your total score</div>
              </div>

              <div className="glass p-8">
                <h3 className="text-xl font-bold text-white mb-4">💡 Solution</h3>
                <pre className="bg-tertiary p-4 rounded-lg overflow-x-auto text-sm">
                  <code className="text-green-400">{currentChallenge.solution}</code>
                </pre>
              </div>

              <div className="flex gap-4">
                <button onClick={resetChallenge} className="btn btn-primary">
                  Try Another Challenge
                </button>
                <Link to="/dashboard" className="btn btn-secondary">
                  Back to Dashboard
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CodeMentor;
