import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

export const hasSupabaseEnv = Boolean(supabaseUrl && supabaseKey);

if (!hasSupabaseEnv) {
  console.warn(
    'Supabase environment variables are missing. Public pages will still load, but comments and admin features are disabled until VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are configured.',
  );
}

export const supabase = hasSupabaseEnv
  ? createClient(supabaseUrl, supabaseKey)
  : null;
