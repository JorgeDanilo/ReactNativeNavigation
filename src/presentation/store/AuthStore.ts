
import { create } from 'zustand';
import storage from '../config/Storage';
import { SecureTokenService } from '../../services/SecureTokenService';
import { AuthService } from '../../services/AuthService';

export interface AuthStore {
  isLoggedIn: boolean;
  isInitializing: boolean;
  isLoading: boolean;
  error: string | null;
  initializeAuth: () => Promise<void>;
  login: ( username: string, password: string ) => Promise<void>;
  logout: () => Promise<void>;
}

const tokenService = new SecureTokenService();
const authService = new AuthService( tokenService );

export const useAuthStore = create<AuthStore>()( ( set ) => ( {

  isLoggedIn: false,
  isInitializing: true,
  isLoading: false,
  error: null,

  initializeAuth: async () => {
    set( { isInitializing: true } );
    try {
      const token = await tokenService.getToken();
      set( { isLoggedIn: !!token } );
    } catch ( error ) {
      set( { error: 'Failed to initialize authentication' } );
    } finally {
      set( { isInitializing: false } );
    }
  },

  login: async ( username, password ) => {
    set( { isLoading: true, error: null } );
    try {
      const token = await authService.login( username, password );
      set( { isLoggedIn: !!token } );
    } catch ( error ) {
      set( { error: 'Login failed' } );
    } finally {
      set( { isLoading: false } );
    }
  },

  logout: async () => {
    set( { isLoading: true } );
    try {
      await authService.logout();
      set( { isLoggedIn: false } );
    } catch ( error ) {
      set( { error: 'Logout failed' } );
    } finally {
      set( { isLoading: false } );
    }
  }


} ) );