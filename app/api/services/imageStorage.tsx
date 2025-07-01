import { createClient } from '@supabase/supabase-js';
function createSupabaseClient() {
	return createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
}

const supabase = createSupabaseClient();

export default supabase;
