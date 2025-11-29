import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, AlertTriangle, Shield, Users, Clock } from 'lucide-react';

export function EmergencyHelp() {
  const [showSafetyPlan, setShowSafetyPlan] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Emergency Alert */}
      <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 flex-shrink-0" />
          <div className="flex-1">
            <h2 className="mb-2">Are You in Immediate Danger?</h2>
            <p className="mb-4">
              If you or someone else is in immediate danger, please call 911 or your local emergency services right away.
            </p>
            <a
              href="tel:911"
              className="inline-block px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-gray-100"
            >
              Call 911 Now
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-gray-900 mb-4">Emergency Help & Support</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access immediate help, crisis hotlines, and emergency resources available 24/7.
        </p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div
            className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-bg)' }}
          >
            <Phone className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
          </div>
          <h3 className="text-gray-900 mb-2">24/7 Hotline</h3>
          <p className="text-gray-600 text-sm mb-4">
            Speak with a trained advocate anytime, day or night.
          </p>
          <a
            href="tel:18007997233"
            className="block w-full py-2 text-center rounded-lg text-white"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            1-800-799-7233
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div
            className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-bg)' }}
          >
            <MessageCircle className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
          </div>
          <h3 className="text-gray-900 mb-2">Crisis Text Line</h3>
          <p className="text-gray-600 text-sm mb-4">
            Text with a counselor if you can't talk on the phone.
          </p>
          <a
            href="sms:741741?body=START"
            className="block w-full py-2 text-center rounded-lg text-white"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Text START to 741741
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div
            className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-bg)' }}
          >
            <MapPin className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
          </div>
          <h3 className="text-gray-900 mb-2">Find a Shelter</h3>
          <p className="text-gray-600 text-sm mb-4">
            Locate emergency shelters in your area.
          </p>
          <button
            className="w-full py-2 rounded-lg text-white"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Search Shelters
          </button>
        </div>
      </div>

      {/* Safety Planning Section */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
        <div className="flex items-start gap-4 mb-6">
          <Shield className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
          <div className="flex-1">
            <h2 className="text-gray-900 mb-2">Quick Safety Planning</h2>
            <p className="text-gray-600">
              Essential steps to take when planning to leave or stay safe in an emergency situation.
            </p>
          </div>
          <button
            onClick={() => setShowSafetyPlan(!showSafetyPlan)}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            {showSafetyPlan ? 'Hide' : 'Show'} Plan
          </button>
        </div>

        {showSafetyPlan && (
          <div className="space-y-4 mt-6 pt-6 border-t border-gray-200">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600">1</span>
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">Prepare Important Documents</h4>
                <p className="text-sm text-gray-600">
                  Gather ID, birth certificates, social security cards, bank statements, insurance papers, and any legal documents.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600">2</span>
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">Pack an Emergency Bag</h4>
                <p className="text-sm text-gray-600">
                  Include clothes, medications, cash, keys, phone charger, and important documents. Keep it hidden and accessible.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600">3</span>
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">Create a Code Word</h4>
                <p className="text-sm text-gray-600">
                  Establish a code word with trusted friends or family that signals you need help without alerting your abuser.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600">4</span>
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">Plan Your Route</h4>
                <p className="text-sm text-gray-600">
                  Know the fastest way to leave your home and where you'll go. Have multiple options if possible.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600">5</span>
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">Protect Your Privacy</h4>
                <p className="text-sm text-gray-600">
                  Clear your browser history, use private browsing, and consider getting a separate phone if possible.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Additional Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
            <div>
              <h3 className="text-gray-900 mb-2">For Friends & Family</h3>
              <p className="text-sm text-gray-600 mb-3">
                If someone you know is experiencing domestic violence, learn how you can help.
              </p>
              <button className="text-sm hover:underline" style={{ color: 'var(--color-primary)' }}>
                Learn How to Help →
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
            <div>
              <h3 className="text-gray-900 mb-2">After You Leave</h3>
              <p className="text-sm text-gray-600 mb-3">
                Resources and support for rebuilding your life after leaving an abusive relationship.
              </p>
              <button className="text-sm hover:underline" style={{ color: 'var(--color-primary)' }}>
                View Resources →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-gray-900 mb-2">Safety Notice</h3>
        <p className="text-sm text-gray-700">
          <strong>Computer Safety:</strong> If you think your internet or computer use is being monitored, please use a safer computer or call a hotline. Your abuser may be able to see your browsing history even if you clear it. Consider using a friend's device or a public library computer.
        </p>
      </div>
    </div>
  );
}
