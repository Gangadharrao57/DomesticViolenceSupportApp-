import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { storageService } from '../../utils/storage';
import { FileText, AlertCircle, CheckCircle, Clock, Plus, Edit, Trash2 } from 'lucide-react';

interface Report {
  id: string;
  userId: string;
  type: string;
  description: string;
  status: string;
  createdAt: string;
}

export function Dashboard() {
  const { user } = useAuth();
  const [reports, setReports] = useState<Report[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingReport, setEditingReport] = useState<Report | null>(null);
  const [formData, setFormData] = useState({
    type: '',
    description: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (user) {
      loadReports();
    }
  }, [user]);

  const loadReports = () => {
    if (user) {
      const userReports = storageService.getReports(user.id);
      setReports(userReports);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.type) {
      newErrors.type = 'Please select a report type';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || !user) return;

    if (editingReport) {
      // Update existing report
      storageService.updateReport(user.id, editingReport.id, {
        type: formData.type,
        description: formData.description
      });
    } else {
      // Create new report
      const newReport: Report = {
        id: Date.now().toString(),
        userId: user.id,
        type: formData.type,
        description: formData.description,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      storageService.addReport(user.id, newReport);
    }

    setFormData({ type: '', description: '' });
    setShowAddModal(false);
    setEditingReport(null);
    setErrors({});
    loadReports();
  };

  const handleEdit = (report: Report) => {
    setEditingReport(report);
    setFormData({
      type: report.type,
      description: report.description
    });
    setShowAddModal(true);
  };

  const handleDelete = (reportId: string) => {
    if (user && confirm('Are you sure you want to delete this report?')) {
      storageService.deleteReport(user.id, reportId);
      loadReports();
    }
  };

  const handleStatusChange = (reportId: string, newStatus: string) => {
    if (user) {
      storageService.updateReport(user.id, reportId, { status: newStatus });
      loadReports();
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'in-progress':
        return <AlertCircle className="w-5 h-5 text-blue-600" />;
      case 'resolved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Welcome, {user?.name}</h1>
        <p className="text-gray-600">Manage your reports and track your progress</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-900">
                {reports.filter(r => r.status === 'pending').length}
              </p>
              <p className="text-sm text-gray-600">Pending Reports</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-900">
                {reports.filter(r => r.status === 'in-progress').length}
              </p>
              <p className="text-sm text-gray-600">In Progress</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-900">
                {reports.filter(r => r.status === 'resolved').length}
              </p>
              <p className="text-sm text-gray-600">Resolved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-gray-900">My Reports</h2>
          <button
            onClick={() => {
              setEditingReport(null);
              setFormData({ type: '', description: '' });
              setShowAddModal(true);
              setErrors({});
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Plus className="w-4 h-4" />
            New Report
          </button>
        </div>

        <div className="p-6">
          {reports.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No reports yet</p>
              <p className="text-sm text-gray-500 mt-2">Create your first report to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{getStatusIcon(report.status)}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-gray-900">{report.type}</h3>
                          <p className="text-sm text-gray-500">
                            {new Date(report.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <select
                            value={report.status}
                            onChange={(e) => handleStatusChange(report.id, e.target.value)}
                            className={`px-3 py-1 rounded-full text-xs ${getStatusColor(report.status)}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                          </select>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{report.description}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(report)}
                          className="text-sm px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 flex items-center gap-1"
                        >
                          <Edit className="w-3 h-3" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(report.id)}
                          className="text-sm px-3 py-1 rounded border border-red-300 text-red-600 hover:bg-red-50 flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-gray-900 mb-4">
              {editingReport ? 'Edit Report' : 'Create New Report'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Report Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.type 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-purple-500'
                  }`}
                >
                  <option value="">Select a type...</option>
                  <option value="Physical Abuse">Physical Abuse</option>
                  <option value="Emotional Abuse">Emotional Abuse</option>
                  <option value="Financial Abuse">Financial Abuse</option>
                  <option value="Sexual Abuse">Sexual Abuse</option>
                  <option value="Other">Other</option>
                </select>
                {errors.type && (
                  <p className="mt-1 text-sm text-red-600">{errors.type}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.description 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-purple-500'
                  }`}
                  placeholder="Please provide details..."
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-lg text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {editingReport ? 'Update' : 'Create'} Report
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingReport(null);
                    setFormData({ type: '', description: '' });
                    setErrors({});
                  }}
                  className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
