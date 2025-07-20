import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-indigo-600 rounded-xl">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Feature Flags
            </h1>
          </div>
          <p className="text-gray-600">
            Manage your application's feature flags with ease
          </p>
        </div>

        {/* Simple Access Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Access your feature flag dashboard
            </p>
          </div>

          <button
            onClick={handleNavigateToDashboard}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            Go to Dashboard
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Click above to access the feature flag management dashboard
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Feature Flag Management System</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
