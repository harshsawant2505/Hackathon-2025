import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Search, 
  GitPullRequest, 
  Settings, 
  LogOut,
  Database
} from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

export const Sidebar = () => {
  const { logout } = useAuthStore();

  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Database className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Intelligent DMS</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </NavLink>
          <NavLink 
            to="/documents" 
            className={({ isActive }) => 
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <FileText className="mr-3 h-5 w-5" />
            Documents
          </NavLink>
          <NavLink 
            to="/search" 
            className={({ isActive }) => 
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Search className="mr-3 h-5 w-5" />
            Search
          </NavLink>
          <NavLink 
            to="/workflows" 
            className={({ isActive }) => 
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <GitPullRequest className="mr-3 h-5 w-5" />
            Workflows
          </NavLink>
          <NavLink 
            to="/settings" 
            className={({ isActive }) => 
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </NavLink>
        </nav>
      </div>
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
};