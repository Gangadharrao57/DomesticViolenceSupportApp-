import React, { useState } from 'react';
import { BookOpen, Heart, Home, Phone, Users, FileText, Search } from 'lucide-react';

const resourceCategories = [
  {
    id: 'safety',
    title: 'Safety Planning',
    icon: Home,
    color: '#9333EA',
    resources: [
      {
        title: 'Creating a Safety Plan',
        description: 'Step-by-step guide to creating a personalized safety plan for yourself and your children.',
        link: '#'
      },
      {
        title: 'Emergency Go-Bag Checklist',
        description: 'Essential items to pack in case you need to leave quickly.',
        link: '#'
      },
      {
        title: 'Digital Safety Tips',
        description: 'Protect your online privacy and keep your communications safe.',
        link: '#'
      }
    ]
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    icon: Heart,
    color: '#DB2777',
    resources: [
      {
        title: 'Understanding Trauma',
        description: 'Learn about trauma responses and how to cope with traumatic experiences.',
        link: '#'
      },
      {
        title: 'Mental Health Support',
        description: 'Access mental health resources and find therapists specializing in domestic violence.',
        link: '#'
      },
      {
        title: 'Physical Health Resources',
        description: 'Medical care information and health resources for survivors.',
        link: '#'
      }
    ]
  },
  {
    id: 'legal',
    title: 'Legal Information',
    icon: FileText,
    color: '#2563EB',
    resources: [
      {
        title: 'Restraining Orders',
        description: 'How to obtain a restraining order and what it means for your protection.',
        link: '#'
      },
      {
        title: 'Custody and Divorce',
        description: 'Understanding your rights regarding children and divorce proceedings.',
        link: '#'
      },
      {
        title: 'Free Legal Aid',
        description: 'Directory of free and low-cost legal services for survivors.',
        link: '#'
      }
    ]
  },
  {
    id: 'support',
    title: 'Support Groups',
    icon: Users,
    color: '#059669',
    resources: [
      {
        title: 'Online Support Communities',
        description: 'Connect with other survivors in moderated online support groups.',
        link: '#'
      },
      {
        title: 'Local Support Groups',
        description: 'Find in-person support groups in your area.',
        link: '#'
      },
      {
        title: 'Family & Friends Resources',
        description: 'Information for friends and family members who want to help.',
        link: '#'
      }
    ]
  },
  {
    id: 'education',
    title: 'Education',
    icon: BookOpen,
    color: '#F59E0B',
    resources: [
      {
        title: 'Recognizing Abuse',
        description: 'Understanding different types of abuse and warning signs.',
        link: '#'
      },
      {
        title: 'Healthy Relationships',
        description: 'Learn what healthy relationships look like and how to build them.',
        link: '#'
      },
      {
        title: 'Financial Independence',
        description: 'Resources for achieving financial independence and stability.',
        link: '#'
      }
    ]
  },
  {
    id: 'emergency',
    title: 'Emergency Contacts',
    icon: Phone,
    color: '#DC2626',
    resources: [
      {
        title: 'National Hotlines',
        description: '24/7 crisis hotlines with trained counselors ready to help.',
        link: '#'
      },
      {
        title: 'Local Shelters',
        description: 'Emergency shelter information and availability in your area.',
        link: '#'
      },
      {
        title: 'Crisis Text Lines',
        description: 'Text-based support services for when you can\'t talk on the phone.',
        link: '#'
      }
    ]
  }
];

export function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory
    ? resourceCategories.filter(cat => cat.id === selectedCategory)
    : resourceCategories;

  const searchResults = searchTerm
    ? resourceCategories.flatMap(cat =>
        cat.resources
          .filter(res =>
            res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            res.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(res => ({ ...res, category: cat.title, color: cat.color }))
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-gray-900 mb-4">Resources & Information</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find comprehensive resources to help you understand your situation, plan for safety, and access support services.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Search Results */}
        {searchTerm && searchResults.length > 0 && (
          <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
            {searchResults.map((result, index) => (
              <div
                key={index}
                className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: result.color }}
                  />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">{result.category}</p>
                    <h4 className="text-gray-900 mb-1">{result.title}</h4>
                    <p className="text-sm text-gray-600">{result.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === null
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Resources
        </button>
        {resourceCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category.id
                ? 'text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={
              selectedCategory === category.id
                ? { backgroundColor: category.color }
                : {}
            }
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div
                className="p-6 text-white"
                style={{ backgroundColor: category.color }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-8 h-8" />
                  <h2>{category.title}</h2>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {category.resources.map((resource, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {resource.description}
                      </p>
                      <button
                        className="text-sm hover:underline"
                        style={{ color: category.color }}
                      >
                        Learn More →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Download Resources Section */}
      <div className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-gray-900 mb-4">Downloadable Resources</h2>
          <p className="text-gray-600 mb-6">
            Download PDF guides and worksheets to help you plan and stay safe
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:shadow-md">
              Safety Plan Template
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:shadow-md">
              Emergency Contacts Card
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:shadow-md">
              Legal Rights Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
