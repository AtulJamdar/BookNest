import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import axios from 'axios';
import { FiTrash2, FiEye, FiSearch } from 'react-icons/fi';
import UserDetailsModal from '../../components/UserDetailsModal';

const AdminUsers = () => {
  const { isDarkMode } = useTheme();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data.users);
    } catch (error) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(
      `Delete ${name}? Ensure they have no active issued books.`
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);

      // Optimistic UI update
      setUsers((prev) => prev.filter((user) => user._id !== id));

      setSuccess('User deleted successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to delete user');
    }
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
        }`}
      >
        <p className="text-lg font-medium">Loading users...</p>
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
        <h1 className="text-4xl font-bold mb-10">Manage Users</h1>

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

        {/* Search */}
        <div className="mb-8 relative max-w-md">
          <FiSearch
            className={`absolute left-4 top-3.5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          />
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-11 pr-4 py-3 rounded-2xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
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
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Joined</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user._id}
                    className={`border-t transition-colors duration-150 ${
                      isDarkMode
                        ? 'border-gray-700 hover:bg-gray-700/50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-sm font-semibold rounded-2xl ${
                          user.role === 'admin'
                            ? 'bg-red-500/10 text-red-600'
                            : 'bg-blue-500/10 text-blue-600'
                        }`}
                      >
                        {user.role === 'admin' ? 'Admin' : 'Student'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleViewDetails(user)}
                          className="p-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200"
                          title="View Details"
                        >
                          <FiEye size={18} />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(user._id, user.name)
                          }
                          className="p-2 rounded-2xl bg-red-600 hover:bg-red-700 text-white transition-all duration-200"
                          title="Delete User"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="p-10 text-center text-gray-500">
              No users found.
            </div>
          )}
        </div>
      </div>

      {showModal && selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default AdminUsers;
