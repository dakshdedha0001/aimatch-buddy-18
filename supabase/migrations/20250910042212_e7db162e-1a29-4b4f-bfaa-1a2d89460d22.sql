-- Create profiles table to store user data from Clerk
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  clerk_user_id TEXT NOT NULL UNIQUE,
  email TEXT,
  first_name TEXT,
  last_name TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (clerk_user_id = auth.jwt() ->> 'sub');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Update resumes table to use clerk_user_id instead of user_id
ALTER TABLE public.resumes 
ADD COLUMN clerk_user_id TEXT;

-- Update existing RLS policies for resumes to use clerk_user_id
DROP POLICY IF EXISTS "Users can view their own resumes" ON public.resumes;
DROP POLICY IF EXISTS "Users can insert their own resumes" ON public.resumes;
DROP POLICY IF EXISTS "Users can update their own resumes" ON public.resumes;
DROP POLICY IF EXISTS "Users can delete their own resumes" ON public.resumes;

CREATE POLICY "Users can view their own resumes" 
ON public.resumes 
FOR SELECT 
USING (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can insert their own resumes" 
ON public.resumes 
FOR INSERT 
WITH CHECK (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can update their own resumes" 
ON public.resumes 
FOR UPDATE 
USING (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can delete their own resumes" 
ON public.resumes 
FOR DELETE 
USING (clerk_user_id = auth.jwt() ->> 'sub');