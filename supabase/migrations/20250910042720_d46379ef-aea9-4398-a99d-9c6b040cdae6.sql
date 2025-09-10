-- Since we're using Clerk for authentication and just storing profile data in Supabase,
-- we need to adjust the RLS policies to be more permissive or disable RLS

-- For now, let's disable RLS on profiles table since Clerk handles auth
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;

-- For resumes table, we'll also disable RLS for now since we're using Clerk
-- Users will manage their own data through the application logic
ALTER TABLE public.resumes DISABLE ROW LEVEL SECURITY;