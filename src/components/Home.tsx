import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Scale, Phone, MessageCircle, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-gray-900 mb-6">
                You Are Not Alone
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                SafeHaven provides comprehensive support, resources, and legal guidance for anyone experiencing domestic violence. We're here to help you find safety and rebuild your life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/emergency"
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Get Emergency Help
                </Link>
                <Link
                  to="/resources"
                  className="px-6 py-3 rounded-lg text-white hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  Browse Resources
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8 border-4" style={{ borderColor: 'var(--color-primary)' }}>
                <div className="grid grid-cols-2 gap-6">
                  {/* Support Icon */}
                  <div className="flex flex-col items-center justify-center p-6 rounded-lg" style={{ backgroundColor: 'var(--color-bg)' }}>
                    <Shield className="w-16 h-16 mb-3" style={{ color: 'var(--color-primary)' }} />
                    <p className="text-center text-gray-700">Safe & Secure</p>
                  </div>
                  
                  {/* Heart Icon */}
                  <div className="flex flex-col items-center justify-center p-6 rounded-lg" style={{ backgroundColor: 'var(--color-bg)' }}>
                    <Heart className="w-16 h-16 mb-3" style={{ color: 'var(--color-primary)' }} />
                    <p className="text-center text-gray-700">Compassionate Care</p>
                  </div>
                  
                  {/* Phone Icon */}
                  <div className="flex flex-col items-center justify-center p-6 rounded-lg" style={{ backgroundColor: 'var(--color-bg)' }}>
                    <Phone className="w-16 h-16 mb-3" style={{ color: 'var(--color-primary)' }} />
                    <p className="text-center text-gray-700">24/7 Helpline</p>
                  </div>
                  
                  {/* Users Icon */}
                  <div className="flex flex-col items-center justify-center p-6 rounded-lg" style={{ backgroundColor: 'var(--color-bg)' }}>
                    <Users className="w-16 h-16 mb-3" style={{ color: 'var(--color-primary)' }} />
                    <p className="text-center text-gray-700">Community Support</p>
                  </div>
                </div>
                
                {/* Central Message */}
                <div className="mt-8 text-center p-6 rounded-lg" style={{ backgroundColor: 'var(--color-bg)' }}>
                  <MessageCircle className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--color-primary)' }} />
                  <p className="text-gray-900 mb-2">Confidential Support Available</p>
                  <p className="text-sm text-gray-600">Your safety and privacy are our top priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">How We Can Help</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform provides comprehensive support services designed to help you through every step of your journey to safety and recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg)' }}>
                <Shield className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-gray-900 mb-2">Safety Planning</h3>
              <p className="text-gray-600 text-sm">
                Create personalized safety plans and access emergency resources when you need them most.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg)' }}>
                <Scale className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-gray-900 mb-2">Legal Rights</h3>
              <p className="text-gray-600 text-sm">
                Understand your legal rights and access information about restraining orders and legal protection.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg)' }}>
                <MessageCircle className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-gray-900 mb-2">24/7 Support Chat</h3>
              <p className="text-gray-600 text-sm">
                Connect with trained support counselors anytime through our confidential chat service.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg)' }}>
                <Heart className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-gray-900 mb-2">Health Resources</h3>
              <p className="text-gray-600 text-sm">
                Access information about physical and mental health services, including trauma support.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg)' }}>
                <Users className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-gray-900 mb-2">Support Groups</h3>
              <p className="text-gray-600 text-sm">
                Join survivor support groups and connect with others who understand your experience.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg)' }}>
                <Phone className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-gray-900 mb-2">Emergency Services</h3>
              <p className="text-gray-600 text-sm">
                Quick access to emergency hotlines, shelters, and immediate assistance services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">The Reality of Domestic Violence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the scope helps us provide better support and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl mb-2" style={{ color: 'var(--color-primary)' }}>1 in 4</p>
              <p className="text-gray-600">
                Women experience severe intimate partner violence
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl mb-2" style={{ color: 'var(--color-primary)' }}>1 in 7</p>
              <p className="text-gray-600">
                Men have experienced severe physical violence by an intimate partner
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl mb-2" style={{ color: 'var(--color-primary)' }}>24/7</p>
              <p className="text-gray-600">
                Support available anytime you need it
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-4">Ready to Take the First Step?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Create an account to access personalized resources, safety planning tools, and confidential support services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3 rounded-lg text-white text-lg"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Create Free Account
            </Link>
            <Link
              to="/support-services"
              className="px-8 py-3 border-2 rounded-lg text-lg hover:bg-gray-50"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              View Support Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
