import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X, Shield, Phone, Palette } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const themes = [
    { name: 'purple', label: 'Purple', color: '#9333EA' },
    { name: 'blue', label: 'Blue', color: '#2563EB' },
    { name: 'green', label: 'Green', color: '#059669' },
    { name: 'pink', label: 'Pink', color: '#DB2777' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              <span className="text-gray-900">SafeHaven</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/resources" className="text-gray-600 hover:text-gray-900">
                Resources
              </Link>
              <Link to="/support-services" className="text-gray-600 hover:text-gray-900">
                Support Services
              </Link>
              <Link to="/legal-rights" className="text-gray-600 hover:text-gray-900">
                Legal Rights
              </Link>
              <Link 
                to="/emergency" 
                className="flex items-center gap-1 text-red-600 hover:text-red-700"
              >
                <Phone className="w-4 h-4" />
                Emergency
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
                    Dashboard
                  </Link>
                  <Link to="/chat" className="text-gray-600 hover:text-gray-900">
                    Chat
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 rounded-lg text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    Register
                  </Link>
                </>
              )}

              {/* Theme Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowThemeSelector(!showThemeSelector)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                  aria-label="Change theme"
                >
                  <Palette className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                </button>
                
                {showThemeSelector && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-2">
                    <p className="text-xs text-gray-500 px-2 py-1">Choose Theme</p>
                    {themes.map((t) => (
                      <button
                        key={t.name}
                        onClick={() => {
                          setTheme(t.name as any);
                          setShowThemeSelector(false);
                        }}
                        className="w-full flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-50"
                      >
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: t.color }}
                        />
                        <span className="text-gray-700">{t.label}</span>
                        {theme === t.name && (
                          <span className="ml-auto text-green-600">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-2">
                <Link
                  to="/resources"
                  className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  to="/support-services"
                  className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Support Services
                </Link>
                <Link
                  to="/legal-rights"
                  className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Legal Rights
                </Link>
                <Link
                  to="/emergency"
                  className="px-4 py-2 text-red-600 hover:bg-red-50 rounded flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  Emergency
                </Link>
                
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/chat"
                      className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Chat
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="mx-4 px-4 py-2 rounded-lg text-white"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="mx-4 px-4 py-2 rounded-lg text-white"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}

                {/* Theme Selector Mobile */}
                <div className="px-4 py-2">
                  <p className="text-xs text-gray-500 mb-2">Theme</p>
                  <div className="flex gap-2">
                    {themes.map((t) => (
                      <button
                        key={t.name}
                        onClick={() => setTheme(t.name as any)}
                        className="flex-1 py-2 rounded border border-gray-200"
                        style={{
                          backgroundColor: theme === t.name ? t.color : 'white',
                          color: theme === t.name ? 'white' : '#374151'
                        }}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6" />
                <span>SafeHaven</span>
              </div>
              <p className="text-gray-400 text-sm">
                Supporting survivors of domestic violence with resources, legal information, and 24/7 support services.
              </p>
            </div>
            
            <div>
              <p className="mb-4">Quick Links</p>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <Link to="/resources" className="hover:text-white">Resources</Link>
                <Link to="/support-services" className="hover:text-white">Support Services</Link>
                <Link to="/legal-rights" className="hover:text-white">Legal Rights</Link>
                <Link to="/emergency" className="hover:text-white">Emergency Help</Link>
              </div>
            </div>
            
            <div>
              <p className="mb-4">24/7 Helpline</p>
              <p className="text-2xl mb-2">1-800-799-7233</p>
              <p className="text-sm text-gray-400">
                Confidential support available 24/7 in multiple languages
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 SafeHaven. All rights reserved. Your privacy and safety are our priority.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
