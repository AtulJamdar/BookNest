import React, { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import axios from "axios";
import { FiEdit2, FiTrash2, FiPlus, FiSearch } from "react-icons/fi";
import BookModal from "../../components/BookModal";
import AdminSidebar from "../../components/AdminSidebar";
import DashboardMain from "../../components/layout/DashboardMain";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

// ============================================================================
// ALERT CARD COMPONENT
// ============================================================================
const AlertCard = ({ message, type, onClose, isDarkMode }) => {
  const isError = type === "error";
  const bgColor = isError
    ? "bg-red-500/10"
    : "bg-emerald-500/10";
  const textColor = isError ? "text-red-500" : "text-emerald-500";
  const borderColor = isError
    ? "border-red-500/20"
    : "border-emerald-500/20";
  const hoverBg = isError
    ? "hover:bg-red-500/20"
    : "hover:bg-emerald-500/20";

  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3 animate-in slide-in-from-top-2 ${bgColor} ${textColor} ${borderColor}`}
    >
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className={`rounded-md p-1 transition ${hoverBg}`}
        aria-label="Close alert"
      >
        ✕
      </button>
    </div>
  );
};

// ============================================================================
// SEARCH BAR COMPONENT
// ============================================================================
const SearchBar = ({ searchTerm, onSearch, isDarkMode }) => (
  <div className="relative w-full">
    <FiSearch
      size={18}
      className={`absolute left-3 top-1/2 -translate-y-1/2 ${
        isDarkMode ? "text-gray-500" : "text-gray-400"
      }`}
    />
    <Input
      type="text"
      placeholder="Search by title or author..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className={`w-full rounded-xl pl-10 transition-all ${
        isDarkMode
          ? "bg-gray-800/50 border-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          : "bg-white border-gray-200 focus:ring-indigo-500 focus:border-indigo-500"
      }`}
    />
  </div>
);

// ============================================================================
// TABLE HEADER COMPONENT
// ============================================================================
const TableHeader = ({ isDarkMode }) => (
  <thead
    className={`text-xs font-semibold uppercase tracking-wider ${
      isDarkMode
        ? "bg-gray-800/50 text-gray-400"
        : "bg-gray-50 text-gray-600"
    }`}
  >
    <tr>
      <th className="px-6 py-4 text-left">Book Details</th>
      <th className="px-6 py-4 text-left">Category</th>
      <th className="px-6 py-4 text-center">Total</th>
      <th className="px-6 py-4 text-center">Available</th>
      <th className="px-6 py-4 text-right">Actions</th>
    </tr>
  </thead>
);

// ============================================================================
// TABLE ROW COMPONENT
// ============================================================================
const BookTableRow = ({ book, onEdit, onDelete, isDarkMode }) => (
  <tr
    className={`border-t transition-colors ${
      isDarkMode
        ? "border-gray-700 hover:bg-gray-800/40"
        : "border-gray-200 hover:bg-gray-50"
    }`}
  >
    {/* Book Details */}
    <td className="px-6 py-4">
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-sm text-gray-900 dark:text-white">
          {book.title}
        </span>
        <span className={`text-xs ${
          isDarkMode ? "text-gray-500" : "text-gray-600"
        }`}>
          by {book.author}
        </span>
      </div>
    </td>

    {/* Category */}
    <td className="px-6 py-4">
      <span
        className={`inline-block rounded-lg px-2.5 py-1 text-xs font-medium ${
          isDarkMode
            ? "bg-gray-700/50 text-gray-300"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        {book.category}
      </span>
    </td>

    {/* Total Copies */}
    <td className="px-6 py-4 text-center">
      <span className="text-sm font-semibold text-gray-900 dark:text-white">
        {book.totalCopies}
      </span>
    </td>

    {/* Available Copies */}
    <td className="px-6 py-4 text-center">
      <span
        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
          book.availableCopies > 0
            ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
            : "bg-rose-500/20 text-rose-600 dark:text-rose-400"
        }`}
      >
        {book.availableCopies}
      </span>
    </td>

    {/* Actions */}
    <td className="px-6 py-4">
      <div className="flex justify-end gap-2">
        <Button
          onClick={() => onEdit(book)}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${
            isDarkMode
              ? "border-indigo-500/30 text-indigo-400 hover:bg-indigo-600 hover:text-white"
              : "border-indigo-200 text-indigo-600 hover:bg-indigo-600 hover:text-white"
          }`}
          title="Edit book"
        >
          <FiEdit2 size={16} />
        </Button>

        <Button
          onClick={() => onDelete(book._id)}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${
            isDarkMode
              ? "border-rose-500/30 text-rose-400 hover:bg-rose-600 hover:text-white"
              : "border-rose-200 text-rose-600 hover:bg-rose-600 hover:text-white"
          }`}
          title="Delete book"
        >
          <FiTrash2 size={16} />
        </Button>
      </div>
    </td>
  </tr>
);

// ============================================================================
// EMPTY STATE COMPONENT
// ============================================================================
const EmptyState = ({ isDarkMode }) => (
  <tr>
    <td colSpan="5" className="px-6 py-16 text-center">
      <div className="flex flex-col items-center gap-3">
        <FiSearch
          size={32}
          className={isDarkMode ? "text-gray-600" : "text-gray-400"}
        />
        <p
          className={`text-sm font-medium ${
            isDarkMode ? "text-gray-500" : "text-gray-600"
          }`}
        >
          No books found matching your search
        </p>
      </div>
    </td>
  </tr>
);

// ============================================================================
// LOADING STATE COMPONENT
// ============================================================================
const LoadingState = ({ isDarkMode }) => (
  <div
    className={`flex min-h-screen items-center justify-center ${
      isDarkMode ? "bg-gray-900" : "bg-gray-50"
    }`}
  >
    <div className="flex flex-col items-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500/20 border-t-indigo-600" />
      <p
        className={`text-sm font-medium ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Loading books…
      </p>
    </div>
  </div>
);

// ============================================================================
// MAIN ADMIN BOOKS COMPONENT
// ============================================================================
const AdminBooks = () => {
  const { isDarkMode } = useTheme();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/books");
      setBooks(response.data.books);
    } catch (err) {
      setError("Failed to load books. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this book permanently? This action cannot be undone.")) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      setSuccess("Book deleted successfully");
      fetchBooks();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete book");
      setTimeout(() => setError(""), 4000);
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

  const handleModalClose = () => {
    setShowModal(false);
    setEditingBook(null);
  };

  const handleModalSuccess = () => {
    handleModalClose();
    fetchBooks();
    setSuccess(editingBook ? "Book updated successfully" : "Book created successfully");
    setTimeout(() => setSuccess(""), 3000);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <LoadingState isDarkMode={isDarkMode} />;
  }

  return (
    <div
      className={`flex w-full min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <DashboardMain
        isDarkMode={isDarkMode}
        heroTitle="Books management"
        heroSubtitle="Manage your catalog, availability, and new titles with ease."
      >
        {/* Content Wrapper */}
        <div className="w-full space-y-6">
          {/* Alerts Section */}
          {(error || success) && (
            <div className="space-y-3">
              {error && (
                <AlertCard
                  message={error}
                  type="error"
                  onClose={() => setError("")}
                  isDarkMode={isDarkMode}
                />
              )}
              {success && (
                <AlertCard
                  message={success}
                  type="success"
                  onClose={() => setSuccess("")}
                  isDarkMode={isDarkMode}
                />
              )}
            </div>
          )}

          {/* Header with Controls */}
          <div
            className={`rounded-xl border p-6 ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <SearchBar
                searchTerm={searchTerm}
                onSearch={setSearchTerm}
                isDarkMode={isDarkMode}
              />
              <Button
                onClick={handleAddNew}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/40 active:scale-95 whitespace-nowrap"
              >
                <FiPlus size={18} />
                Add Book
              </Button>
            </div>
          </div>

          {/* Books Table */}
          <div
            className={`w-full overflow-hidden rounded-xl border ${
              isDarkMode
                ? "border-gray-700 bg-gray-800/30"
                : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <TableHeader isDarkMode={isDarkMode} />
                <tbody>
                  {filteredBooks.length === 0 ? (
                    <EmptyState isDarkMode={isDarkMode} />
                  ) : (
                    filteredBooks.map((book) => (
                      <BookTableRow
                        key={book._id}
                        book={book}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        isDarkMode={isDarkMode}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Results Counter */}
          {filteredBooks.length > 0 && (
            <div
              className={`text-sm font-medium ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Showing {filteredBooks.length} of {books.length} books
            </div>
          )}
        </div>
      </DashboardMain>

      {/* Book Modal */}
      {showModal && (
        <BookModal
          book={editingBook}
          onClose={handleModalClose}
          onSuccess={handleModalSuccess}
        />
      )}
    </div>
  );
};

export default AdminBooks;