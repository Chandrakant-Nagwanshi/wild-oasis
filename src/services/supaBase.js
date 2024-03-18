import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://budoktkgjbvjxxdedzcq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1ZG9rdGtnamJ2anh4ZGVkemNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3ODUzMTcsImV4cCI6MjAyNDM2MTMxN30.uMQFsftTnC2zkYUh4dXfl8srB2988E0CEPyvywo8LN8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
