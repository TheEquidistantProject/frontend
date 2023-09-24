import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from "@/components/footer";

const satoshi = localFont({
	src: [
		{
			path: './fonts/Satoshi.ttf',
			style: 'normal',
		},
		{
			path: './fonts/Satoshi-Italic.ttf',
			style: 'italic',
		},
	],
});

export const metadata: Metadata = {
	title: 'The Equidistant',
	description:
		'A news site that stands as a beacon against the tide of misinformation and bias prevalent in the news sphere.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={satoshi.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
