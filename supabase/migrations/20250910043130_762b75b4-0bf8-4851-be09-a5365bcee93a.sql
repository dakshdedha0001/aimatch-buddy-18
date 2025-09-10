-- Re-enable RLS and create permissive policies since we're using Clerk for authentication
-- The application logic will handle user-specific access control

-- Enable RLS on both tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resumes ENABLE ROW LEVEL SECURITY;

-- Create permissive policies that allow full access
-- Since Clerk handles authentication, we'll allow all operations on both tables
-- The application logic will ensure users only access their own data

-- Profiles policies - allow all operations
CREATE POLICY "Allow all access to profiles" ON public.profiles FOR ALL USING (true) WITH CHECK (true);

-- Resumes policies - allow all operations  
CREATE POLICY "Allow all access to resumes" ON public.resumes FOR ALL USING (true) WITH CHECK (true);