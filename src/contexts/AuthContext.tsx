import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate login - in a real app, this would make an API call
    try {
      // For demo purposes, accept any email/password combination
      const mockUser: User = {
        id: '1',
        name: email.split('@')[0], // Use email prefix as name
        email: email,
      };
      setUser(mockUser);
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    // Simulate signup - in a real app, this would make an API call
    try {
      const mockUser: User = {
        id: '1',
        name: name,
        email: email,
      };
      setUser(mockUser);
    } catch (error) {
      throw new Error('Signup failed');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
