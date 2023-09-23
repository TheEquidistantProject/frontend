import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import Image from 'next/image';
import RootContainer from './ui/containers/root';

const Navbar = () => (
	<RootContainer>
		<nav className="flex items-center justify-between pb-8 pt-10">
			<button>
				<Menu size={24} />
			</button>

			<Image
				src="/logo.svg"
				alt="The Equidistant Logo"
				width={119}
				height={55}
			/>

			<button>
				<Search size={24} />
			</button>
		</nav>
	</RootContainer>
);

export default Navbar;
