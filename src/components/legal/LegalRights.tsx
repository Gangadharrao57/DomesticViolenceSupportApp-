import React, { useState } from 'react';
import { Scale, FileText, ShieldCheck, Home, Users, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';

const legalTopics = [
  {
    id: 'restraining-orders',
    title: 'Restraining Orders',
    icon: ShieldCheck,
    color: '#9333EA',
    content: {
      overview: 'A restraining order (also called a protection order) is a court order that can protect you from abuse or harassment.',
      details: [
        'Types of restraining orders include emergency, temporary, and permanent orders',
        'Orders can require the abuser to stay away from you, your home, workplace, and school',
        'Violating a restraining order is a criminal offense',
        'You don\'t need a lawyer to get a restraining order, but legal aid can help'
      ],
      steps: [
        'Go to your local courthouse and ask for restraining order forms',
        'Fill out the forms describing the abuse and why you need protection',
        'File the forms with the court clerk',
        'Attend your court hearing (usually within 10-15 days)',
        'If granted, keep a copy of the order with you at all times'
      ]
    }
  },
  {
    id: 'divorce-separation',
    title: 'Divorce & Separation',
    icon: FileText,
    color: '#DB2777',
    content: {
      overview: 'Understanding your rights during divorce or separation when domestic violence is involved.',
      details: [
        'You have the right to file for divorce if you\'ve experienced abuse',
        'Domestic violence can affect custody, visitation, and support decisions',
        'You may be eligible for exclusive use of the family home',
        'The court can order your spouse to pay your attorney fees'
      ],
      steps: [
        'Document all instances of abuse with dates, photos, and witnesses',
        'Consult with a domestic violence attorney or legal aid organization',
        'File for divorce in your local family court',
        'Request temporary orders for custody, support, and protection',
        'Attend mediation or court hearings as required'
      ]
    }
  },
  {
    id: 'custody-visitation',
    title: 'Child Custody & Visitation',
    icon: Users,
    color: '#2563EB',
    content: {
      overview: 'How domestic violence affects child custody and visitation arrangements.',
      details: [
        'Courts consider domestic violence when making custody decisions',
        'You can request supervised visitation for the other parent',
        'Courts prioritize the safety and well-being of children',
        'Past abuse doesn\'t automatically mean no contact with children'
      ],
      steps: [
        'Document any abuse witnessed by or directed at children',
        'Request a custody evaluation if needed',
        'Propose a parenting plan that ensures safety',
        'Request supervised visitation if appropriate',
        'Keep records of all interactions and violations'
      ]
    }
  },
  {
    id: 'housing-rights',
    title: 'Housing Rights',
    icon: Home,
    color: '#059669',
    content: {
      overview: 'Your rights regarding housing when experiencing domestic violence.',
      details: [
        'You may be able to break a lease early due to domestic violence',
        'Landlords cannot discriminate against domestic violence survivors',
        'You may qualify for emergency housing assistance',
        'Public housing authorities have protections for survivors'
      ],
      steps: [
        'Review your state\'s domestic violence housing laws',
        'Notify your landlord in writing about the situation',
        'Provide required documentation (police reports, restraining orders)',
        'Contact local housing assistance programs',
        'Apply for emergency or transitional housing if needed'
      ]
    }
  },
  {
    id: 'financial-rights',
    title: 'Financial Rights',
    icon: DollarSign,
    color: '#F59E0B',
    content: {
      overview: 'Protecting your financial interests and accessing economic resources.',
      details: [
        'You have the right to marital property and assets',
        'Courts can order spousal and child support',
        'You may be able to access joint bank accounts',
        'Economic abuse is recognized as a form of domestic violence'
      ],
      steps: [
        'Document all financial accounts and assets',
        'Open a separate bank account in your name only',
        'Request temporary financial support from the court',
        'Apply for government assistance programs if needed',
        'Consult with an attorney about asset division'
      ]
    }
  },
  {
    id: 'immigrant-rights',
    title: 'Rights for Immigrants',
    icon: Scale,
    color: '#DC2626',
    content: {
      overview: 'Special protections and rights available to immigrant survivors of domestic violence.',
      details: [
        'You can apply for immigration relief without your abuser\'s help (VAWA)',
        'U-Visa available for victims of crimes including domestic violence',
        'You can still call police regardless of immigration status',
        'Many shelters and services don\'t require documentation'
      ],
      steps: [
        'Contact an immigration attorney familiar with VAWA',
        'Gather evidence of abuse and your relationship',
        'File Form I-360 (VAWA self-petition) with USCIS',
        'Apply for work authorization',
        'Consult with advocates about additional protections'
      ]
    }
  }
];

export function LegalRights() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-gray-900 mb-4">Know Your Legal Rights</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Understanding your legal rights is an important step in protecting yourself and your family. Below you'll find information about various legal topics related to domestic violence.
        </p>
      </div>

      {/* Legal Topics */}
      <div className="space-y-4 mb-12">
        {legalTopics.map((topic) => {
          const Icon = topic.icon;
          const isExpanded = expandedTopic === topic.id;

          return (
            <div
              key={topic.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleTopic(topic.id)}
                className="w-full p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: topic.color + '20' }}
                >
                  <Icon className="w-6 h-6" style={{ color: topic.color }} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-gray-900">{topic.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {topic.content.overview}
                  </p>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="pt-6">
                    <h4 className="text-gray-900 mb-3">Key Information</h4>
                    <ul className="space-y-2 mb-6">
                      {topic.content.details.map((detail, index) => (
                        <li key={index} className="flex gap-3 text-sm text-gray-600">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: topic.color }}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-gray-900 mb-3">Steps to Take</h4>
                    <ol className="space-y-3">
                      {topic.content.steps.map((step, index) => (
                        <li key={index} className="flex gap-3 text-sm text-gray-600">
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs"
                            style={{ backgroundColor: topic.color }}
                          >
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>

                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Need Legal Help?</strong> Contact a local legal aid organization or domestic violence organization for free or low-cost legal assistance.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Additional Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
          <h3 className="text-gray-900 mb-2">Find Legal Aid</h3>
          <p className="text-sm text-gray-600 mb-4">
            Connect with free or low-cost legal services in your area specializing in domestic violence cases.
          </p>
          <button
            className="px-4 py-2 rounded-lg text-white"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Search Legal Services
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
          <h3 className="text-gray-900 mb-2">Court Advocacy</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get support navigating the court system from trained domestic violence advocates.
          </p>
          <button
            className="px-4 py-2 rounded-lg text-white"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Find an Advocate
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-gray-900 mb-2">Legal Disclaimer</h3>
        <p className="text-sm text-gray-700">
          This information is provided for educational purposes only and does not constitute legal advice. Laws vary by state and jurisdiction. For specific legal advice regarding your situation, please consult with a qualified attorney or legal aid organization in your area.
        </p>
      </div>
    </div>
  );
}
