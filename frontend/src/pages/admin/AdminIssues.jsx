import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import axios from 'axios';
import { FiCheck } from 'react-icons/fi';

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

      // Optimistic UI update instead of full refetch
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
    <div
      className={`min-h-screen ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold mb-10">Manage Issues</h1>

        {error && (
          <div className="mb-6 p-4 rounded-2xl border border-red-200 bg-red-50 text-red-700">
            {error}
            <button
              onClick={() => setError('')}
              className="float-right font-semibold"
            >
              ✕
            </button>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 rounded-2xl border border-green-200 bg-green-50 text-green-700">
            {success}
            <button
              onClick={() => setSuccess('')}
              className="float-right font-semibold"
            >
              ✕
            </button>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setFilter('active')}
            className={`px-5 py-2 rounded-2xl font-semibold transition-all duration-200 ${
              filter === 'active'
                ? 'bg-blue-600 text-white shadow'
                : isDarkMode
                ? 'bg-gray-800 border border-gray-700 text-white'
                : 'bg-white border border-gray-200 text-gray-700'
            }`}
          >
            Active Issues
          </button>

          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-2xl font-semibold transition-all duration-200 ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow'
                : isDarkMode
                ? 'bg-gray-800 border border-gray-700 text-white'
                : 'bg-white border border-gray-200 text-gray-700'
            }`}
          >
            All Issues
          </button>
        </div>

        {/* Table */}
        <div
          className={`rounded-2xl border overflow-hidden ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead
                className={`text-left text-sm uppercase tracking-wide ${
                  isDarkMode
                    ? 'bg-gray-900 text-gray-400'
                    : 'bg-gray-50 text-gray-500'
                }`}
              >
                <tr>
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Book</th>
                  <th className="px-6 py-4">Issued</th>
                  <th className="px-6 py-4">Due</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr
                    key={issue._id}
                    className={`border-t transition-colors duration-150 ${
                      isDarkMode
                        ? 'border-gray-700 hover:bg-gray-700/50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold">
                      {issue.userId?.name || 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {issue.userId?.email || 'N/A'}
                    </td>
                    <td className="px-6 py-4">
                      {issue.bookId?.title || 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {new Date(issue.issueDate).toLocaleDateString()}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm ${
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
                        className={`px-3 py-1 text-sm font-semibold rounded-2xl ${getStatusBadge(
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
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-all duration-200"
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
            <div className="p-10 text-center text-gray-500">
              No issues found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminIssues;