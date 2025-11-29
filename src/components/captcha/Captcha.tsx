import React, { useState, useEffect } from 'react';
import { RefreshCw, Check, X } from 'lucide-react';

interface CaptchaProps {
  onVerify: (verified: boolean) => void;
  error?: string;
}

export function Captcha({ onVerify, error }: CaptchaProps) {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [attemptFailed, setAttemptFailed] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setUserInput('');
    setAttemptFailed(false);
    setIsVerified(false);
    onVerify(false);
  };

  const handleVerify = () => {
    if (userInput.toLowerCase() === captchaText.toLowerCase()) {
      setIsVerified(true);
      setAttemptFailed(false);
      onVerify(true);
    } else {
      setIsVerified(false);
      setAttemptFailed(true);
      onVerify(false);
      setTimeout(() => {
        generateCaptcha();
      }, 1500);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    if (attemptFailed) setAttemptFailed(false);
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm text-gray-700">
        CAPTCHA Verification
      </label>
      
      {/* CAPTCHA Display */}
      <div className="flex items-center gap-3">
        <div 
          className="flex-1 h-14 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden border-2 border-gray-300"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.03) 10px, rgba(0,0,0,.03) 20px)',
          }}
        >
          <div className="relative">
            {captchaText.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block text-2xl select-none"
                style={{
                  fontFamily: 'monospace',
                  transform: `rotate(${Math.random() * 20 - 10}deg) translateY(${Math.random() * 4 - 2}px)`,
                  color: `hsl(${Math.random() * 360}, 70%, 40%)`,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  marginLeft: index > 0 ? '2px' : '0'
                }}
              >
                {char}
              </span>
            ))}
          </div>
          {/* Noise lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
            <line x1="0" y1={Math.random() * 100} x2="100%" y2={Math.random() * 100} stroke="#666" strokeWidth="1" />
            <line x1="0" y1={Math.random() * 100} x2="100%" y2={Math.random() * 100} stroke="#666" strokeWidth="1" />
          </svg>
        </div>
        
        <button
          type="button"
          onClick={generateCaptcha}
          className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          title="Refresh CAPTCHA"
        >
          <RefreshCw className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Input Field */}
      <div className="relative">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
          placeholder="Enter the code above"
          disabled={isVerified}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            isVerified 
              ? 'border-green-500 bg-green-50 focus:ring-green-500' 
              : attemptFailed 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:ring-purple-500'
          }`}
        />
        {isVerified && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Check className="w-5 h-5 text-green-600" />
          </div>
        )}
        {attemptFailed && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <X className="w-5 h-5 text-red-600" />
          </div>
        )}
      </div>

      {/* Verify Button */}
      {!isVerified && (
        <button
          type="button"
          onClick={handleVerify}
          disabled={!userInput}
          className="w-full py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          Verify CAPTCHA
        </button>
      )}

      {/* Status Messages */}
      {isVerified && (
        <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded">
          <Check className="w-4 h-4" />
          <span>CAPTCHA verified successfully</span>
        </div>
      )}

      {attemptFailed && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-2 rounded">
          <X className="w-4 h-4" />
          <span>Incorrect code. Generating new CAPTCHA...</span>
        </div>
      )}

      {error && !isVerified && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
