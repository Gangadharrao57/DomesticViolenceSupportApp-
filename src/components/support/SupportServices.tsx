import React, { useState } from 'react';
import { MapPin, Phone, Globe, Clock, Search, Filter } from 'lucide-react';

const supportServices = [
  {
    id: 1,
    name: 'National Domestic Violence Hotline',
    type: 'Hotline',
    description: '24/7 confidential support from trained advocates. Available in multiple languages.',
    phone: '1-800-799-7233',
    website: 'thehotline.org',
    availability: '24/7',
    services: ['Crisis Support', 'Safety Planning', 'Referrals'],
    location: 'National'
  },
  {
    id: 2,
    name: 'SafeHouse Emergency Shelter',
    type: 'Shelter',
    description: 'Emergency housing for individuals and families fleeing domestic violence.',
    phone: '1-888-555-0123',
    website: 'safehouse.org',
    availability: '24/7',
    services: ['Emergency Housing', 'Meals', 'Counseling', 'Childcare'],
    location: 'New York, NY'
  },
  {
    id: 3,
    name: 'Legal Aid Society',
    type: 'Legal',
    description: 'Free legal assistance for survivors seeking restraining orders or custody help.',
    phone: '1-800-555-0156',
    website: 'legalaid.org',
    availability: 'Mon-Fri 9AM-5PM',
    services: ['Legal Consultation', 'Court Advocacy', 'Document Filing'],
    location: 'Multiple Locations'
  },
  {
    id: 4,
    name: 'Healing Hearts Counseling Center',
    type: 'Counseling',
    description: 'Trauma-informed therapy and support groups for survivors and their families.',
    phone: '1-800-555-0189',
    website: 'healinghearts.org',
    availability: 'Mon-Sat 8AM-8PM',
    services: ['Individual Therapy', 'Group Therapy', 'Family Counseling'],
    location: 'Los Angeles, CA'
  },
  {
    id: 5,
    name: 'RAINN National Sexual Assault Hotline',
    type: 'Hotline',
    description: 'Support for survivors of sexual violence, available 24/7.',
    phone: '1-800-656-4673',
    website: 'rainn.org',
    availability: '24/7',
    services: ['Crisis Support', 'Medical Referrals', 'Legal Advocacy'],
    location: 'National'
  },
  {
    id: 6,
    name: 'WomenSafe',
    type: 'Shelter',
    description: 'Transitional housing program with job training and childcare support.',
    phone: '1-800-555-0198',
    website: 'womensafe.org',
    availability: '24/7',
    services: ['Housing', 'Job Training', 'Financial Planning', 'Childcare'],
    location: 'Chicago, IL'
  },
  {
    id: 7,
    name: 'Men\'s Domestic Abuse Helpline',
    type: 'Hotline',
    description: 'Specialized support for male survivors of domestic abuse.',
    phone: '1-800-555-0234',
    website: 'menshotline.org',
    availability: '24/7',
    services: ['Crisis Support', 'Legal Referrals', 'Counseling Referrals'],
    location: 'National'
  },
  {
    id: 8,
    name: 'Community Health Clinic',
    type: 'Medical',
    description: 'Free and low-cost medical care, including trauma-informed services.',
    phone: '1-800-555-0267',
    website: 'communityhealthclinic.org',
    availability: 'Mon-Fri 8AM-6PM',
    services: ['Medical Care', 'Mental Health', 'Prescriptions'],
    location: 'Houston, TX'
  }
];

const serviceTypes = ['All', 'Hotline', 'Shelter', 'Legal', 'Counseling', 'Medical'];

export function SupportServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredServices = supportServices.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'All' || service.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-gray-900 mb-4">Support Services Directory</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find emergency hotlines, shelters, legal aid, counseling services, and other support resources near you.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="max-w-2xl mx-auto mb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by service name, location, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {serviceTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedType === type
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={
                selectedType === type
                  ? { backgroundColor: 'var(--color-primary)' }
                  : {}
              }
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-gray-900 mb-1">{service.name}</h3>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-primary)'
                  }}
                >
                  {service.type}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4">{service.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                <a href={`tel:${service.phone}`} className="hover:underline">
                  {service.phone}
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                <a
                  href={`https://${service.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {service.website}
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                <span>{service.availability}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                <span>{service.location}</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-2">Services Offered:</p>
              <div className="flex flex-wrap gap-2">
                {service.services.map((s, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No services found matching your criteria</p>
          <p className="text-sm text-gray-500 mt-2">
            Try adjusting your search or filters
          </p>
        </div>
      )}

      {/* Emergency Banner */}
      <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-gray-900 mb-2">In Immediate Danger?</h3>
            <p className="text-gray-700 mb-3">
              If you are in immediate danger, call 911 or your local emergency services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:911"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Call 911
              </a>
              <a
                href="tel:18007997233"
                className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50"
              >
                National Hotline: 1-800-799-7233
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
