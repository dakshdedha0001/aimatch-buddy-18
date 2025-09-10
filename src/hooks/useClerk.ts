import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useClerkSupabaseSync = () => {
  const { user } = useUser();

  useEffect(() => {
    const syncUserProfile = async () => {
      if (!user) return;

      try {
        // Check if profile exists
        const { data: existingProfile, error: selectError } = await supabase
          .from('profiles')
          .select('*')
          .eq('clerk_user_id', user.id)
          .single();

        if (selectError && selectError.code !== 'PGRST116') {
          console.error('Error checking profile:', selectError);
          return;
        }

        const profileData = {
          clerk_user_id: user.id,
          email: user.primaryEmailAddress?.emailAddress || '',
          first_name: user.firstName || '',
          last_name: user.lastName || '',
          image_url: user.imageUrl || '',
        };

        if (!existingProfile) {
          // Create new profile
          const { error: insertError } = await supabase
            .from('profiles')
            .insert(profileData);
          
          if (insertError) {
            console.error('Error creating profile:', insertError);
          }
        } else {
          // Update existing profile
          const { error: updateError } = await supabase
            .from('profiles')
            .update({
              email: profileData.email,
              first_name: profileData.first_name,
              last_name: profileData.last_name,
              image_url: profileData.image_url,
            })
            .eq('clerk_user_id', user.id);

          if (updateError) {
            console.error('Error updating profile:', updateError);
          }
        }
      } catch (error) {
        console.error('Error syncing user profile:', error);
      }
    };

    syncUserProfile();
  }, [user]);

  return { user };
};