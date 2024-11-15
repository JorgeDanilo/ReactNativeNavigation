import { useAuthStore } from '../store/AuthStore';

export const useAuth = () => {

  const { isLoggedIn, isInitializing, isLoading, error, initializeAuth, login, logout } = useAuthStore();

  return {
    isLoggedIn,
    isInitializing,
    isLoading,
    error,
    
    initializeAuth,
    login,
    logout
  };
};