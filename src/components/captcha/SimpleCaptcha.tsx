import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface SimpleCaptchaProps {
  onVerify: (verified: boolean) => void;
  error?: string;
}

export function SimpleCaptcha({ onVerify, error }: SimpleCaptchaProps) {
  const [question, setQuestion] = useState({ text: '', answer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [showError, setShowError] = useState(false);

  const mathQuestions = [
    { text: 'What is 5 + 3?', answer: 8 },
    { text: 'What is 10 - 4?', answer: 6 },
    { text: 'What is 7 + 2?', answer: 9 },
    { text: 'What is 12 - 5?', answer: 7 },
    { text: 'What is 6 + 4?', answer: 10 },
    { text: 'What is 15 - 8?', answer: 7 },
    { text: 'What is 9 + 3?', answer: 12 },
    { text: 'What is 11 - 6?', answer: 5 },
  ];

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const randomQuestion = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];
    setQuestion(randomQuestion);
    setUserAnswer('');
    setIsVerified(false);
    setShowError(false);
    onVerify(false);
  };

  const handleVerify = () => {
    if (parseInt(userAnswer) === question.answer) {
      setIsVerified(true);
      setShowError(false);
      onVerify(true);
    } else {
      setShowError(true);
      onVerify(false);
      setTimeout(() => {
        generateQuestion();
      }, 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setUserAnswer(value);
    if (showError) setShowError(false);
  };

  return (
    <div>
      <label className="block text-sm text-gray-700 mb-2">
        Verify you're human
      </label>
      
      <div className="p-4 border-2 border-gray-300 rounded-lg bg-gray-50">
        <p className="text-gray-900 mb-3">{question.text}</p>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="Your answer"
            disabled={isVerified}
            className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              isVerified 
                ? 'border-green-500 bg-green-50 focus:ring-green-500' 
                : showError 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:ring-purple-500'
            }`}
          />
          
          {!isVerified && (
            <button
              type="button"
              onClick={handleVerify}
              disabled={!userAnswer}
              className="px-4 py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Verify
            </button>
          )}
        </div>

        {isVerified && (
          <div className="flex items-center gap-2 text-sm text-green-600 mt-2">
            <Check className="w-4 h-4" />
            <span>Verified!</span>
          </div>
        )}

        {showError && (
          <p className="text-sm text-red-600 mt-2">
            Incorrect answer. Try again...
          </p>
        )}
      </div>

      {error && !isVerified && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
