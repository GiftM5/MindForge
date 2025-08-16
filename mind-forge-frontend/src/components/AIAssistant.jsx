import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI learning assistant. I'll help you think through problems step by step, provide hints when needed, and score your responses based on difficulty. What would you like to work on today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sample questions with different difficulty levels
  const sampleQuestions = [
    {
      id: 1,
      question: "What is 15 + 27?",
      correctAnswer: "42",
      difficulty: 1,
      points: 5,
      hints: ["Try breaking it down: 15 + 20 + 7", "15 + 27 = 15 + 20 + 7 = 35 + 7"]
    },
    {
      id: 2,
      question: "Explain the difference between 'affect' and 'effect'.",
      correctAnswer: "Affect is a verb meaning to influence something. Effect is a noun meaning the result of a change.",
      difficulty: 3,
      points: 15,
      hints: ["Think about parts of speech", "One is an action, one is a result"]
    },
    {
      id: 3,
      question: "What is the time complexity of binary search?",
      correctAnswer: "O(log n)",
      difficulty: 4,
      points: 20,
      hints: ["Think about how the search space is reduced each step", "Each comparison eliminates half the remaining elements"]
    },
    {
      id: 4,
      question: "Solve for x: 2x + 5 = 17",
      correctAnswer: "6",
      difficulty: 2,
      points: 10,
      hints: ["Subtract 5 from both sides first", "Then divide by 2"]
    }
  ];

  const evaluateAnswer = (userAnswer, question) => {
    const normalizedUser = userAnswer.toLowerCase().trim();
    const normalizedCorrect = question.correctAnswer.toLowerCase().trim();
    
    // Simple similarity check - in a real app, you'd use more sophisticated NLP
    if (normalizedUser === normalizedCorrect) {
      return { isCorrect: true, score: question.points, feedback: "Perfect! That's exactly right." };
    } else if (normalizedUser.includes(normalizedCorrect) || normalizedCorrect.includes(normalizedUser)) {
      const partialPoints = Math.floor(question.points * 0.7);
      return { isCorrect: false, score: partialPoints, feedback: "Close! You're on the right track." };
    } else {
      return { isCorrect: false, score: 0, feedback: "Not quite right. Let me help you understand." };
    }
  };

  const generateAIResponse = (userMessage) => {
    // Smart Prompt Flow - Ask what they've tried first
    if (userMessage.toLowerCase().includes('help') || userMessage.toLowerCase().includes('stuck') || userMessage.toLowerCase().includes('how')) {
      return {
        content: `🧠 **Hold on! Let's think first.**\n\nBefore I give you the answer, I'd love to know:\n\n**What have you tried so far?**\n\nThis helps me understand your thinking process and give you better, more targeted help. Even if your attempts didn't work, they're valuable!\n\n💡 *Remember: The goal is to strengthen your problem-solving muscles before getting AI assistance.*`,
        showHint: false
      };
    }

    // Check if user is asking for a new question
    if (userMessage.toLowerCase().includes('question') || userMessage.toLowerCase().includes('problem') || !currentQuestion) {
      const randomQuestion = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
      setCurrentQuestion(randomQuestion);
      return {
        content: `Here's a ${randomQuestion.difficulty === 1 ? 'beginner' : randomQuestion.difficulty === 2 ? 'easy' : randomQuestion.difficulty === 3 ? 'medium' : 'advanced'} level question worth ${randomQuestion.points} points:\n\n**${randomQuestion.question}**\n\n🧠 **Before you answer, take a moment to think:**\n• What's your first instinct?\n• What approaches come to mind?\n• Have you seen similar problems before?\n\nThen share your answer! If you need a hint, just ask.`,
        showHint: false
      };
    }

    // Check if user is asking for a hint
    if (userMessage.toLowerCase().includes('hint') && currentQuestion) {
      const randomHint = currentQuestion.hints[Math.floor(Math.random() * currentQuestion.hints.length)];
      return {
        content: `💡 **Hint:** ${randomHint}\n\n🤔 **Think about it:** How does this hint change your approach? What new ideas does it spark?\n\nGive it another try!`,
        showHint: true
      };
    }

    // Evaluate the answer if we have a current question
    if (currentQuestion) {
      const evaluation = evaluateAnswer(userMessage, currentQuestion);
      setCurrentScore(prev => prev + evaluation.score);
      setTotalQuestions(prev => prev + 1);

      let response = `${evaluation.feedback}\n\n`;

      if (evaluation.isCorrect) {
        response += `🎉 **+${evaluation.score} points!** Your total score is now ${currentScore + evaluation.score}.\n\n`;
        response += `**Explanation:** ${currentQuestion.correctAnswer}\n\n`;
        response += `🧠 **Reflection moment:** What clicked for you? What was your thought process? Understanding your own thinking helps you tackle similar problems in the future.\n\n`;
        response += "Ready for another challenge?";
      } else if (evaluation.score > 0) {
        response += `📈 **+${evaluation.score} points** for partial credit! Your total score is now ${currentScore + evaluation.score}.\n\n`;
        response += `**The correct answer is:** ${currentQuestion.correctAnswer}\n\n`;
        response += `🤔 **Learning moment:** You were on the right track! What part of your reasoning was correct? What would you adjust next time?\n\n`;
        response += "Want to try another question?";
      } else {
        response += `**The correct answer is:** ${currentQuestion.correctAnswer}\n\n`;
        response += `💪 **Growth mindset:** Every wrong answer is a step toward understanding! What did you learn from this attempt? How will you approach similar problems differently?\n\n`;
        response += "Don't worry, learning takes practice! Want to try another question or need me to explain this concept further?";
      }

      setCurrentQuestion(null);
      return { content: response, showHint: false };
    }

    // Default helpful response with thinking prompts
    return {
      content: `🧠 **Welcome to MindForge!** I'm here to help you learn by thinking first.\n\nI can help you with:\n• 📚 Practice questions (I'll ask what you think first!)\n• 💡 Hints when you're stuck (after you've tried)\n• 🔍 Explanations (with reflection questions)\n• 📈 Progress tracking\n\n**What would you like to work on?** Remember, the best learning happens when you engage your mind before getting answers!`,
      showHint: false
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: aiResponse.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-primary p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="btn btn-secondary">
              ← Back
            </Link>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                🧠 Smart Prompt Flow
              </h1>
              <p className="text-muted">Think first, then get AI assistance</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{currentScore}</div>
              <div className="text-sm text-muted">Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{totalQuestions}</div>
              <div className="text-sm text-muted">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">
                {totalQuestions > 0 ? Math.round((currentScore / (totalQuestions * 20)) * 100) : 0}%
              </div>
              <div className="text-sm text-muted">Accuracy</div>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-3xl p-4 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-accent-secondary text-white' 
                    : 'card'
                }`}>
                  <div className="whitespace-pre-wrap">{message.content}</div>
                  <div className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="card p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <span className="text-muted ml-2">AI is thinking...</span>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-primary p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question, request a practice problem, or get help with a concept..."
              className="input textarea flex-1 resize-none"
              rows="2"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="btn btn-primary px-6"
            >
              Send
            </button>
          </div>
          
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => setInputValue("Give me a practice question")}
              className="btn btn-secondary text-sm"
            >
              Practice Question
            </button>
            <button
              onClick={() => setInputValue("I need a hint")}
              className="btn btn-secondary text-sm"
              disabled={!currentQuestion}
            >
              Need a Hint
            </button>
            <button
              onClick={() => setInputValue("Explain this concept further")}
              className="btn btn-secondary text-sm"
            >
              Get Explanation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
