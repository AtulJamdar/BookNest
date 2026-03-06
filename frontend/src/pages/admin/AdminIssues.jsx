import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import axios from 'axios';
import { FiCheck } from 'react-icons/fi';
import AdminSidebar from '../../components/AdminSidebar';

const AdminIssues = () => {
  const { isDarkMode } = useTheme();

  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('active');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchIssues();
  }, [filter]);

  const fetchIssues = async () => {
    try {
      setLoading(true);
      let url = 'http://localhost:5000/api/issues/active/all';

      if (filter === 'all') {
        url = 'http://localhost:5000/api/issues';
      }

      const response = await axios.get(url);
      setIssues(response.data.issues);
    } catch (error) {
      setError('Failed to fetch issues');
    } finally {
      setLoading(false);
    }
  };

  const handleReturnBook = async (issueId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/issues/return-book/${issueId}`
      );

      setIssues((prev) =>
        prev.map((issue) =>
          issue._id === issueId
            ? { ...issue, status: 'returned' }
            : issue
        )
      );

      setSuccess('Book marked as returned');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to return book');
    }
  };

  const isOverdue = (dueDate) => {
    return new Date() > new Date(dueDate);
  };

  const getDaysOverdue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = today - due;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusBadge = (issue) => {
    if (issue.status === 'returned') {
      return 'bg-green-500/10 text-green-600';
    }

    if (isOverdue(issue.dueDate)) {
      return 'bg-red-500/10 text-red-600';
    }

    return 'bg-yellow-500/10 text-yellow-600';
  };

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
        }`}
      >
        <p className="text-lg font-medium">Loading issues...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      
      <AdminSidebar />

      <div
        className={`flex-1 ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

          <div className="mb-10">
            <h1 className="text-3xl font-semibold tracking-tight">
              Manage Issues
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Track issued books and manage returns.
            </p>
          </div>

          {error && (
            <div className="mb-6 flex items-center justify-between rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-red-700 shadow-sm">
              <span className="text-sm font-medium">{error}</span>
              <button
                onClick={() => setError('')}
                className="text-sm font-semibold hover:text-red-900 transition-all"
              >
                ✕
              </button>
            </div>
          )}

          {success && (
            <div className="mb-6 flex items-center justify-between rounded-xl border border-green-200 bg-green-50 px-5 py-3 text-green-700 shadow-sm">
              <span className="text-sm font-medium">{success}</span>
              <button
                onClick={() => setSuccess('')}
                className="text-sm font-semibold hover:text-green-900 transition-all"
              >
                ✕
              </button>
            </div>
          )}

          {/* Filter Tabs */}
          <div className="mb-8 flex flex-wrap gap-3">
            <button
              onClick={() => setFilter('active')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                filter === 'active'
                  ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-700'
                  : isDarkMode
                  ? 'bg-gray-800 border border-gray-700 hover:bg-gray-700'
                  : 'bg-white border border-gray-200 hover:bg-gray-50'
              }`}
            >
              Active Issues
            </button>

            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-700'
                  : isDarkMode
                  ? 'bg-gray-800 border border-gray-700 hover:bg-gray-700'
                  : 'bg-white border border-gray-200 hover:bg-gray-50'
              }`}
            >
              All Issues
            </button>
          </div>

          {/* Table Card */}
          <div
            className={`rounded-xl shadow-sm border overflow-hidden transition-all ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead
                  className={`text-xs uppercase tracking-wide ${
                    isDarkMode
                      ? 'bg-gray-900 text-gray-400'
                      : 'bg-gray-50 text-gray-500'
                  }`}
                >
                  <tr>
                    <th className="px-6 py-4 text-left">Student</th>
                    <th className="px-6 py-4 text-left">Email</th>
                    <th className="px-6 py-4 text-left">Book</th>
                    <th className="px-6 py-4 text-left">Issued</th>
                    <th className="px-6 py-4 text-left">Due</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {issues.map((issue) => (
                    <tr
                      key={issue._id}
                      className={`border-t transition-all duration-200 ${
                        isDarkMode
                          ? 'border-gray-700 hover:bg-gray-700/50'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <td className="px-6 py-4 font-medium">
                        {issue.userId?.name || 'N/A'}
                      </td>

                      <td className="px-6 py-4 text-gray-500">
                        {issue.userId?.email || 'N/A'}
                      </td>

                      <td className="px-6 py-4 font-medium">
                        {issue.bookId?.title || 'N/A'}
                      </td>

                      <td className="px-6 py-4">
                        {new Date(issue.issueDate).toLocaleDateString()}
                      </td>

                      <td
                        className={`px-6 py-4 ${
                          issue.status === 'issued' &&
                          isOverdue(issue.dueDate)
                            ? 'text-red-600 font-semibold'
                            : ''
                        }`}
                      >
                        {new Date(issue.dueDate).toLocaleDateString()}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusBadge(
                            issue
                          )}`}
                        >
                          {issue.status === 'returned'
                            ? 'Returned'
                            : isOverdue(issue.dueDate)
                            ? `Overdue (${getDaysOverdue(
                                issue.dueDate
                              )} days)`
                            : 'Issued'}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center">
                        {issue.status === 'issued' ? (
                          <button
                            onClick={() => handleReturnBook(issue._id)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-all duration-200 hover:shadow-md"
                          >
                            <FiCheck size={16} />
                            Return
                          </button>
                        ) : (
                          <span className="text-sm text-gray-400">
                            Completed
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {issues.length === 0 && (
              <div className="p-12 text-center text-sm text-gray-500">
                No issues found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIssues;