import type { AuthChangeEvent, Session, User } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { create } from 'zustand';
import { getSession } from '@/features/auth/services/authService';
import { supabase } from '@/integrations/supabase';

interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;
  setLoading: (isLoading: boolean) => void;
  clearSession: () => void;
  initialize: () => Promise<void>;
  cleanup: () => void;
}

let authSubscription: { unsubscribe: () => void } | null = null;

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  session: null,
  isLoading: true,
  isAuthenticated: false,

  setUser: (user) => {
    const { session } = get();
    set({ user, isAuthenticated: !!session && !!user });
  },

  setSession: (session) => {
    const { user } = get();
    set({ session, isAuthenticated: !!session && !!user });
  },

  setLoading: (isLoading) => set({ isLoading }),

  clearSession: () => set({ user: null, session: null, isAuthenticated: false }),

  initialize: async () => {
    if (!supabase) {
      set({ isLoading: false });
      return;
    }
    try {
      set({ isLoading: true });
      if (authSubscription) {
        authSubscription.unsubscribe();
        authSubscription = null;
      }
      const { session } = await getSession();
      if (session?.user) {
        set({ user: session.user, session, isAuthenticated: true, isLoading: false });
      } else {
        set({ user: null, session: null, isAuthenticated: false, isLoading: false });
      }
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(
        (_event: AuthChangeEvent, updatedSession: Session | null) => {
          if (updatedSession?.user) {
            set({ user: updatedSession.user, session: updatedSession, isAuthenticated: true });
          } else {
            set({ user: null, session: null, isAuthenticated: false });
          }
        }
      );
      authSubscription = subscription;
    } catch (error) {
      console.error('Auth initialization error:', error);
      set({ user: null, session: null, isAuthenticated: false, isLoading: false });
    }
  },

  cleanup: () => {
    if (authSubscription) {
      authSubscription.unsubscribe();
      authSubscription = null;
    }
  },
}));

export function useAuthInit() {
  const initialize = useAuthStore((s) => s.initialize);
  const cleanup = useAuthStore((s) => s.cleanup);

  useEffect(() => {
    initialize();
    return () => cleanup();
  }, [initialize, cleanup]);
}
