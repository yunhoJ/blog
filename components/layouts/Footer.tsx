export default function Footer() {
	return (
		<footer className="border-t">
			<div className="container flex h-14 items-center justify-center">
				<p className="text-muted-foreground text-sm">
					© {new Date().getFullYear()} yunhoJ. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
