import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import axios from 'axios';
import { FiEdit2, FiTrash2, FiPlus, FiSearch } from 'react-icons/fi';
import BookModal from '../../components/BookModal';

const AdminBooks = () => {
  const { isDarkMode } = useTheme();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data.books);
    } catch (error) {
      setError('Error fetching books');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`http://localhost:5000/api/books/${id}`);
        setSuccess('Book deleted successfully');
        fetchBooks();
        setTimeout(() => setSuccess(''), 3000);
      } catch (error) {
        setError(error.response?.data?.message || 'Error deleting book');
      }
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditingBook(null);
    setShowModal(true);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-600'
        }`}
      >
        <div className="animate-pulse text-sm">Loading books...</div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Manage Books
            </h1>
            <p className="text-sm opacity-60 mt-1">
              Add, edit and manage your library collection
            </p>
          </div>

          <button
            onClick={handleAddNew}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm"
          >
            <FiPlus size={18} />
            Add Book
          </button>
        </div>

        {/* Alerts */}
        {error && (
          <div
            className={`mb-6 p-4 rounded-xl border flex justify-between items-center ${
              isDarkMode
                ? 'bg-red-900/30 border-red-800 text-red-300'
                : 'bg-red-50 border-red-200 text-red-600'
            }`}
          >
            <span className="text-sm">{error}</span>
            <button onClick={() => setError('')} className="text-lg">
              ✕
            </button>
          </div>
        )}

        {success && (
          <div
            className={`mb-6 p-4 rounded-xl border flex justify-between items-center ${
              isDarkMode
                ? 'bg-green-900/30 border-green-800 text-green-300'
                : 'bg-green-50 border-green-200 text-green-600'
            }`}
          >
            <span className="text-sm">{success}</span>
            <button onClick={() => setSuccess('')} className="text-lg">
              ✕
            </button>
          </div>
        )}

        {/* Search */}
        <div className="mb-8 relative max-w-md">
          <FiSearch
            className={`absolute left-3 top-3 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}
          />
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              isDarkMode
                ? 'bg-gray-900 border-gray-800 text-gray-100'
                : 'bg-white border-gray-300'
            }`}
          />
        </div>

        {/* Table */}
        <div
          className={`rounded-2xl shadow-sm border overflow-x-auto ${
            isDarkMode
              ? 'bg-gray-900 border-gray-800'
              : 'bg-white border-gray-200'
          }`}
        >
          <table className="w-full min-w-[700px]">
            <thead
              className={`${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
              } border-b ${
                isDarkMode ? 'border-gray-800' : 'border-gray-200'
              }`}
            >
              <tr className="text-left text-xs uppercase tracking-wider opacity-60">
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4 text-center">Total</th>
                <th className="px-6 py-4 text-center">Available</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr
                  key={book._id}
                  className={`border-b transition ${
                    isDarkMode
                      ? 'border-gray-800 hover:bg-gray-900'
                      : 'border-gray-100 hover:bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4 font-medium">
                    {book.title}
                  </td>
                  <td className="px-6 py-4">{book.author}</td>
                  <td className="px-6 py-4">{book.category}</td>
                  <td className="px-6 py-4 text-center">
                    {book.totalCopies}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        book.availableCopies > 0
                          ? isDarkMode
                            ? 'bg-green-900/40 text-green-300'
                            : 'bg-green-100 text-green-700'
                          : isDarkMode
                          ? 'bg-red-900/40 text-red-300'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {book.availableCopies}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleEdit(book)}
                        className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
                      >
                        <FiEdit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredBooks.length === 0 && (
            <div className="p-10 text-center text-sm opacity-60">
              No books found.
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <BookModal
          book={editingBook}
          onClose={() => {
            setShowModal(false);
            setEditingBook(null);
          }}
          onSuccess={() => {
            setShowModal(false);
            setEditingBook(null);
            fetchBooks();
            setSuccess(
              editingBook
                ? 'Book updated successfully'
                : 'Book added successfully'
            );
            setTimeout(() => setSuccess(''), 3000);
          }}
        />
      )}
    </div>
  );
};

export default AdminBooks;