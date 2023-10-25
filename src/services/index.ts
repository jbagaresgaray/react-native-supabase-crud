import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xfkqzfixbaidhijmfdhz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhma3F6Zml4YmFpZGhpam1mZGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMDQ2NDcsImV4cCI6MjAxMzc4MDY0N30.ei-MY6Pu1fVx59KTuOBc6yxnR08inbd5XM_LSfYMzCI";

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;
