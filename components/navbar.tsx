import Link from 'next/link';
import { Github, Search } from 'lucide-react';
import Image from 'next/image';
import RootContainer from './ui/containers/root';

const Navbar = () => (
	<RootContainer>
		<nav className="flex items-center justify-between pb-8 pt-10">
			<a
				href="https://github.com/TheEquidistantProject"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Github size={24} />
			</a>

			<h1 className="sr-only">The Equidistant</h1>
			<Image
				src="/logo.svg"
				alt="The Equidistant Logo"
				width={131}
				height={61}
			/>

			<Link href="/search">
				<Search size={24} />
			</Link>
		</nav>
	</RootContainer>
);

export default Navbar;
