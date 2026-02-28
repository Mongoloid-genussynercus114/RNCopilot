import { supabase } from '@/integrations/supabase';

interface RegisterParams {
  email: string;
  password: string;
  username?: string;
}

interface LoginParams {
  email: string;
  password: string;
}

export async function register({ email, password, username }: RegisterParams) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { username } },
  });
  if (error) throw error;
  return data;
}

export async function login({ email, password }: LoginParams) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data;
}
