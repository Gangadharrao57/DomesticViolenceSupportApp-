import { useState } from 'react';
import { Shield, Eye, EyeOff, RefreshCw } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [showMFA, setShowMFA] = useState(false);
  const [mfaCode, setMfaCode] = useState('');
  const [error, setError] = useState('');

  function generateCaptcha() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (captchaInput !== captchaCode) {
      setError('Captcha code is incorrect');
      return;
    }

    // Simulate MFA requirement
    setShowMFA(true);
  };

  const handleMFASubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mfaCode.length !== 6) {
      setError('Please enter a 6-digit code');
      return;
    }

    // Simulate successful MFA verification
    onLogin();
  };

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setCaptchaInput('');
  };

  if (showMFA) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h2 className="text-center mb-2">Two-Factor Authentication</h2>
          <p className="text-center text-gray-600 mb-6">
            Enter the 6-digit code from your authenticator app
          </p>
          <form onSubmit={handleMFASubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={mfaCode}
                onChange={(e) => setMfaCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center tracking-widest"
                maxLength={6}
              />
            </div>
            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Verify Code
            </button>
            <button
              type="button"
              onClick={() => setShowMFA(false)}
              className="w-full text-gray-600 hover:text-gray-800 text-sm"
            >
              Back to Login
            </button>
          </form>
          <div className="mt-6 text-xs text-gray-500">
            <p>Demo: Enter any 6-digit code to continue</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 p-4 rounded-full">
            <Shield className="w-12 h-12 text-purple-600" />
          </div>
        </div>
        <h1 className="text-center mb-2">Safe Haven Portal</h1>
        <p className="text-center text-gray-600 mb-6">
          Secure access to support and resources
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="captcha" className="block text-gray-700 mb-2">
              Security Verification
            </label>
            <div className="flex gap-2 mb-2">
              <div className="flex-1 bg-gray-100 rounded-lg px-4 py-3 flex items-center justify-center border-2 border-gray-300">
                <span className="tracking-widest select-none" style={{ 
                  fontFamily: 'monospace',
                  letterSpacing: '8px',
                  textDecoration: 'line-through',
                  textDecorationStyle: 'wavy'
                }}>
                  {captchaCode}
                </span>
              </div>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="bg-gray-200 hover:bg-gray-300 px-4 rounded-lg transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
            <input
              id="captcha"
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Enter the code above"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              maxLength={4}
            />
          </div>
          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-purple-600 hover:text-purple-700 text-sm">
            Forgot password?
          </a>
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-xs text-gray-600">
            <strong>Privacy Notice:</strong> Your safety is our priority. All connections are encrypted and your data is protected.
          </p>
        </div>
      </div>
    </div>
  );
}
