import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import axios from 'axios';
import { FiDownload, FiFileText } from 'react-icons/fi';
import {
    generateBooksReport,
    generateUsersReport,
    generateIssuesReport,
    generateFinesReport,
    exportBooksToExcel,
    exportUsersToExcel,
    exportIssuesToExcel,
    exportFinesToExcel,
  } from '../../services/reportService';

  const AdminReports = () => {
    const { isDarkMode } = useTheme();
    const [data, setData] = useState({
      books: [],
      users: [],
      issues: [],
      fines: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      fetchAllData();
    }, []);
  
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [booksRes, usersRes, issuesRes, finesRes] = await Promise.all([
          axios.get('http://localhost:5000/api/books'),
          axios.get('http://localhost:5000/api/users'),
          axios.get('http://localhost:5000/api/issues'),
          axios.get('http://localhost:5000/api/fines'),
        ]);
  
        setData({
          books: booksRes.data.books,
          users: usersRes.data.users,
          issues: issuesRes.data.issues,
          fines: finesRes.data.fines,
        });
      } catch (error) {
        setError('Error fetching data for reports');
      } finally {
        setLoading(false);
      }
    };
  
    const ReportCard = ({ title, description, icon: Icon, onPDF, onExcel, count }) => (
      <div
        className={`p-6 rounded-lg shadow ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-500 text-white rounded-lg">
              <Icon size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">{title}</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {count} records
              </p>
            </div>
          </div>
        </div>
  
        <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
  
        <div className="flex gap-2">
          <button
            onClick={onPDF}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded font-semibold text-sm"
          >
            <FiDownload size={16} />
            PDF
          </button>
          <button
            onClick={onExcel}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-semibold text-sm"
          >
            <FiDownload size={16} />
            Excel
          </button>
        </div>
      </div>
    );
  
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
          <h1 className="text-4xl font-bold mb-8">📊 Reports & Analytics</h1>
  
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ReportCard
              title="Books Report"
              description="Download detailed report of all books in the library"
              icon={FiFileText}
              count={data.books.length}
              onPDF={() => generateBooksReport(data.books)}
              onExcel={() => exportBooksToExcel(data.books)}
            />
  
            <ReportCard
              title="Users Report"
              description="Download list of all registered users and admins"
              icon={FiFileText}
              count={data.users.length}
              onPDF={() => generateUsersReport(data.users)}
              onExcel={() => exportUsersToExcel(data.users)}
            />
  
            <ReportCard
              title="Issues Report"
              description="Download report of all book issues and returns"
              icon={FiFileText}
              count={data.issues.length}
              onPDF={() => generateIssuesReport(data.issues)}
              onExcel={() => exportIssuesToExcel(data.issues)}
            />
  
            <ReportCard
              title="Fines Report"
              description="Download detailed fines report"
              icon={FiFileText}
              count={data.fines.length}
              onPDF={() => generateFinesReport(data.fines)}
              onExcel={() => exportFinesToExcel(data.fines)}
            />
          </div>
  
          {/* Summary Statistics */}
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-2xl font-bold mb-6">📈 Summary Statistics</h2>
  
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <p className="text-3xl font-bold text-blue-500">{data.books.length}</p>
                <p className="text-sm">Total Books</p>
              </div>
              <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <p className="text-3xl font-bold text-purple-500">{data.users.length}</p>
                <p className="text-sm">Total Users</p>
              </div>
              <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <p className="text-3xl font-bold text-green-500">{data.issues.length}</p>
                <p className="text-sm">Total Issues</p>
              </div>
              <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <p className="text-3xl font-bold text-orange-500">₹{data.fines.reduce((sum, f) => sum + f.totalFine, 0)}</p>
                <p className="text-sm">Total Fines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdminReports;