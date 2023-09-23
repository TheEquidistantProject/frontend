export default function RootContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-screen-2xl mx-auto">
			<div className="px-4 xl:px-10">{children}</div>
		</div>
	);
}
