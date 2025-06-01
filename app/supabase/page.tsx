import { createClient } from '@supabase/supabase-js';

export default async function SupabasePage() {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	const { data, error } = await supabase.from('notepad').select('*');
	console.log(data);
	console.log(error);
	data?.map((item) => {
		console.log(item.id);
	});
	return <div>SupabasePage</div>;
}
