import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

// UI Components using relative paths
import { Button } from '../components/ui/button';
import { Input } from "../components/ui/input";
import { Field, FieldGroup, FieldLabel } from "../components/ui/field";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { register, loading } = useAuth();
  const { isDarkMode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');

    try {
      await register(name.trim(), email.trim(), password);
      navigate('/student/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      
      {/* Centered Card Container */}
      <div className={`w-full max-w-md p-8 rounded-2xl border shadow-xl transition-all ${
        isDarkMode 
          ? 'bg-gray-800/50 border-gray-700 backdrop-blur-sm' 
          : 'bg-white border-gray-200'
      }`}>
        
        {/* Logo & Header */}
        <div className="mb-8 text-center">
          {/* <div className="mx-auto h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-4">
            <span className="text-white font-bold text-xl">E</span>
          </div> */}
          <h2 className={`text-2xl font-bold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Create Account
          </h2>
          <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Fill in your details to register as a student.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3 rounded-lg border border-red-500/50 bg-red-500/10 text-red-500 text-sm text-center animate-in fade-in zoom-in duration-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <FieldGroup className="space-y-4">
            
            {/* Name Field */}
            <Field>
              <FieldLabel className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>
                Full Name
              </FieldLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Atul Sunil Jamdar"
                className={`w-full transition-all ${
                  isDarkMode 
                    ? 'bg-gray-900/50 border-gray-700 text-white focus:ring-indigo-500' 
                    : 'bg-white border-gray-300'
                }`}
              />
            </Field>

            {/* Email Field */}
            <Field>
              <FieldLabel className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>
                Email address
              </FieldLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="atul@endity.in"
                className={`w-full transition-all ${
                  isDarkMode 
                    ? 'bg-gray-900/50 border-gray-700 text-white focus:ring-indigo-500' 
                    : 'bg-white border-gray-300'
                }`}
              />
            </Field>

            {/* Password Field */}
            <Field>
              <FieldLabel className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>
                Password
              </FieldLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className={`w-full transition-all ${
                  isDarkMode 
                    ? 'bg-gray-900/50 border-gray-700 text-white focus:ring-indigo-500' 
                    : 'bg-white border-gray-300'
                }`}
              />
            </Field>

            {/* Confirm Password Field */}
            <Field>
              <FieldLabel className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>
                Confirm Password
              </FieldLabel>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="••••••••"
                className={`w-full transition-all ${
                  isDarkMode 
                    ? 'bg-gray-900/50 border-gray-700 text-white focus:ring-indigo-500' 
                    : 'bg-white border-gray-300'
                }`}
              />
            </Field>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-xl shadow-md transition-all active:scale-[0.98] mt-4"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating account...
                </span>
              ) : 'Create Account'}
            </Button>
          </FieldGroup>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Already registered?</span>{' '}
          <button
            onClick={() => navigate('/login')}
            className="font-semibold text-indigo-500 hover:text-indigo-400 transition-colors"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;