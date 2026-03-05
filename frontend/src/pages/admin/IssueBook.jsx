import React, { useState, useEffect, useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import axios from 'axios';
import { FiPlus } from 'react-icons/fi';

const API_BASE = 'http://localhost:5000/api';

const IssueBook = () => {
  const { isDarkMode } = useTheme();

  const [students, setStudents] = useState([]);
  const [books, setBooks] = useState([]);

  const [formData, setFormData] = useState({
    userId: '',
    bookId: '',
    dueDate: '',
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [studentsRes, booksRes] = await Promise.all([
        axios.get(`${API_BASE}/users/role/students`),
        axios.get(`${API_BASE}/books`),
      ]);

      setStudents(studentsRes.data.students || []);
      setBooks(booksRes.data.books || []);
    } catch (err) {
      setError('Failed to load students or books.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const minDueDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 14);
    return date.toISOString().split('T')[0];
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.userId || !formData.bookId || !formData.dueDate) {
      setError('All fields are required.');
      return;
    }

    if (formData.dueDate < minDueDate) {
      setError('Due date must be at least 14 days from today.');
      return;
    }

    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      await axios.post(`${API_BASE}/issues/issue-book`, formData);

      setSuccess('Book issued successfully.');
      setFormData({ userId: '', bookId: '', dueDate: '' });

      // Optimistic update: reduce available copies locally
      setBooks((prev) =>
        prev.map((b) =>
          b._id === formData.bookId
            ? { ...b, availableCopies: b.availableCopies - 1 }
            : b
        )
      );
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to issue book.');
    } finally {
      setSubmitting(false);
    }
  };

  const availableBooks = useMemo(
    () => books.filter((b) => b.availableCopies > 0),
    [books]
  );

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'
        }`}
      >
        <p className="text-lg font-medium">Loading data...</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Issue Book
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Assign a book to a student with a valid return date.
          </p>
        </div>

        {(error || success) && (
          <div
            className={`mb-6 p-4 rounded-2xl border text-sm flex justify-between items-start gap-4 ${
              error
                ? 'bg-red-50 border-red-200 text-red-700'
                : 'bg-green-50 border-green-200 text-green-700'
            }`}
          >
            <span>{error || success}</span>
            <button
              onClick={() => {
                setError('');
                setSuccess('');
              }}
              className="text-xs font-semibold opacity-70 hover:opacity-100"
            >
              Close
            </button>
          </div>
        )}

        <div
          className={`rounded-2xl shadow-sm border p-8 ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student */}
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Select Student
              </label>
              <select
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300'
                }`}
              >
                <option value="">Choose a student</option>
                {students.map((student) => (
                  <option key={student._id} value={student._id}>
                    {student.name} ({student.email})
                  </option>
                ))}
              </select>
            </div>

            {/* Book */}
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Select Book
              </label>
              <select
                name="bookId"
                value={formData.bookId}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300'
                }`}
              >
                <option value="">Choose a book</option>
                {books.map((book) => (
                  <option
                    key={book._id}
                    value={book._id}
                    disabled={book.availableCopies === 0}
                  >
                    {book.title} — {book.author}{' '}
                    {book.availableCopies === 0
                      ? '(Out of stock)'
                      : `(${book.availableCopies} available)`}
                  </option>
                ))}
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Due Date
              </label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                min={minDueDate}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300'
                }`}
              />
              <p className="mt-2 text-xs text-gray-500">
                Must be at least 14 days from today.
              </p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold transition"
            >
              <FiPlus size={18} />
              {submitting ? 'Issuing...' : 'Issue Book'}
            </button>
          </form>
        </div>

        {/* Stats */}
        <div
          className={`mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6`}
        >
          <div
            className={`rounded-2xl border p-6 ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            <p className="text-3xl font-bold">{students.length}</p>
            <p className="text-sm text-gray-500 mt-1">Total Students</p>
          </div>

          <div
            className={`rounded-2xl border p-6 ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            <p className="text-3xl font-bold">{availableBooks.length}</p>
            <p className="text-sm text-gray-500 mt-1">Books In Stock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueBook;