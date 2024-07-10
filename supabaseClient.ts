import { createClient } from "@supabase/supabase-js";



try {

  const supabaseUrl = process.env.GATSBY_SUPABASE_URL;
  const supabaseKey = process.env.GATSBY_API_KEY;
}

catch (e) {

  console.log("broken")

}



const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
