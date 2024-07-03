import { createClient } from "@supabase/supabase-js";



const supabaseUrl = process.env.GATSBY_SUPABASE_URL;
const supabaseKey = process.env.GATSBY_API_KEY;




const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
