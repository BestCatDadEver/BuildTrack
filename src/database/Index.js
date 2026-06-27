import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ughcjcwhmofvtmnritlx.supabase.co'
const supabaseKey = 'sb_publishable_eNIVdaszr-sgZXxU7c7tsw__J-H1_UE'
export const supabase = createClient(supabaseUrl, supabaseKey)

