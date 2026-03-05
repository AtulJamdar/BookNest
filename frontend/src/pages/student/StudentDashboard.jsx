import React, { useState, useEffect, useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiBook, FiAlertCircle, FiCalendar, FiMessageSquare } from 'react-icons/fi';

const StudentDashboard = () => {
  const { isDarkMode } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeBooks, setActiveBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [userFines, setUserFines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [activeRes, booksRes, finesRes] = await Promise.all([
        axios.get(`http://localhost:5000/api/issues/user/${user.id}/active`),
        axios.get('http://localhost:5000/api/books'),
        axios.get(`http://localhost:5000/api/fines/user/${user.id}`),
      ]);

      setActiveBooks(activeRes.data.issues);
      setAllBooks(booksRes.data.books);
      setUserFines(finesRes.data.fines);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isOverdue = (dueDate) => {
    return new Date() > new Date(dueDate);
  };

  const getDaysLeft = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const pendingFines = userFines.filter((f) => f.status === 'pending');
  const totalPendingFine = pendingFines.reduce((sum, f) => sum + f.totalFine, 0);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome, {user.name}! 👋</h1>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
            <p className="text-3xl font-bold text-blue-500">{activeBooks.length}</p>
            <p className="text-sm text-gray-500">Active Books</p>
          </div>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
            <p className="text-3xl font-bold text-red-500">{pendingFines.length}</p>
            <p className="text-sm text-gray-500">Pending Fines</p>
          </div>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
            <p className="text-3xl font-bold text-orange-500">₹{totalPendingFine}</p>
            <p className="text-sm text-gray-500">Fine Amount</p>
          </div>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
            <p className="text-3xl font-bold text-green-500">{allBooks.length}</p>
            <p className="text-sm text-gray-500">Available Books</p>
          </div>
        </div>

        {/* My Issued Books */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">📚 My Issued Books</h2>
          {activeBooks.length === 0 ? (
            <div className={`p-6 rounded-lg text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <p>You don't have any issued books.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {activeBooks.map((issue) => {
                const daysLeft = getDaysLeft(issue.dueDate);
                const overdue = isOverdue(issue.dueDate);

                return (
                  <div
                    key={issue._id}
                    className={`p-6 rounded-lg ${
                      isDarkMode ? 'bg-gray-800' : 'bg-white'
                    } shadow`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{issue.bookId.title}</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          by {issue.bookId.author}
                        </p>
                        <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Category: {issue.bookId.category}
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Issued: {new Date(issue.issueDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center gap-2 text-sm font-semibold ${
                          overdue ? 'text-red-500' : 'text-green-500'
                        }`}>
                          <FiCalendar size={16} />
                          {overdue ? (
                            <span>Overdue by {Math.abs(daysLeft)} days ⚠️</span>
                          ) : (
                            <span>{daysLeft} days left</span>
                          )}
                        </div>
                        <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Due: {new Date(issue.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Pending Fines */}
        {pendingFines.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">⚠️ Pending Fines</h2>
            <div className="grid grid-cols-1 gap-4">
              {pendingFines.map((fine) => (
                <div
                  key={fine._id}
                  className={`p-6 rounded-lg border-l-4 border-red-500 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold">{fine.bookId?.title}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Days Overdue: {fine.daysOverdue} days
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-red-500">₹{fine.totalFine}</p>
                      <p className="text-sm text-gray-500">Fine Amount</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Browse Available Books */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">🔍 Browse Available Books</h2>
            <button
              onClick={() => navigate('/student/requests')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
            >
              <FiMessageSquare size={18} />
              My Requests
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search books by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-300'
              }`}
            />
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book._id}
                className={`p-6 rounded-lg shadow ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold flex-1">{book.title}</h3>
                  <span className={`px-3 py-1 rounded text-sm font-semibold whitespace-nowrap ml-2 ${
                    book.availableCopies > 0
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}>
                    {book.availableCopies > 0 ? `${book.availableCopies} Available` : 'Out of Stock'}
                  </span>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {book.author}
                </p>
                <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Category: {book.category}
                </p>
                {book.isbn && (
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    ISBN: {book.isbn}
                  </p>
                )}
                <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total Copies: {book.totalCopies}
                </p>
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className={`p-6 rounded-lg text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <p>No books found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;