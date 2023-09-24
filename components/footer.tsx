import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import FlexBox from './ui/containers/flex-box';
import Image from 'next/image';
import RootContainer from './ui/containers/root';

const Footer: React.FC = () => {
	return (
		<footer className="bg-slate-50 pointer-events-none">
			<RootContainer>
				<div className="space-y-8 py-20 lg:space-y-16">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
						<div>
							<FlexBox>
								<span className="sr-only">The Equidistant</span>
								<Image
									src="/logo.svg"
									alt="The Equidistant Logo"
									width={119}
									height={55}
								/>
							</FlexBox>

							<p className="mt-6 max-w-xs text-sm text-slate-600">
								A news site that stands as a beacon against the tide of
								misinformation and bias prevalent in the news sphere.
							</p>

							<ul className="mt-8 flex gap-6">
								{SOCIAL_MEDIA_LINKS.map((link) => (
									<li key={link.key}>
										<a
											href={link.href}
											rel="noreferrer"
											target="_blank"
											className="text-slate-600 hover:opacity-75"
										>
											<span className="sr-only">{link.company}</span>
											{link.icon}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
							{FOOTER_SECTIONS.map((section) => (
								<div key={section.title}>
									<span className="font-medium text-sky-600">
										{section.title}
									</span>

									<ul className="mt-6 space-y-4 text-sm">
										{section.links.map((link) => (
											<li key={link.title}>
												<p className="text-slate-600 hover:opacity-75">
													{link.title}
												</p>
											</li>
										))}
									</ul>
								</div>
							))}

							{/** map through more sections here to render them in the next col */}
						</div>
					</div>

					<div
						className="flex flex-col items-center justify-between gap-y-4 border-t border-slate-300
                    pt-8 text-sm text-slate-600 sm:flex-row"
					>
						<span>
							&copy; {new Date().getFullYear()}. The Equidistant Project. All
							rights reserved.
						</span>
					</div>
				</div>
			</RootContainer>
		</footer>
	);
};

export default Footer;

// ---- constants ---- //

const SOCIAL_MEDIA_LINKS = [
	{
		key: 'facebook',
		company: 'Facebook',
		icon: <Facebook size={24} strokeWidth={1.5} />,
		href: 'https://www.facebook.com/The Equidistant',
	},
	{
		key: 'instagram',
		company: 'Instagram',
		icon: <Instagram size={24} strokeWidth={1.5} />,
		href: 'https://www.instagram.com/The Equidistant',
	},
	{
		key: 'twitter',
		company: 'Twitter',
		icon: <Twitter size={24} strokeWidth={1.5} />,
		href: 'https://www.twitter.com/TheEquidistant',
	},
	{
		key: 'github',
		company: 'GitHub',
		icon: <Github size={24} strokeWidth={1.5} />,
		href: 'https://www.github.com/TheEquidistant',
	},
	{
		key: 'linkedin',
		company: 'LinkedIn',
		icon: <Linkedin size={24} strokeWidth={1.5} />,
		href: 'https://www.linkedin.com/in/TheEquidistant',
	},
];

const FOOTER_SECTIONS = [
	{
		title: 'Account',
		links: [
			{
				title: 'Log In',
				href: '/auth/login',
			},
			{
				title: 'Sign Up',
				href: '/auth/signup',
			},
			{
				title: 'My Account',
				href: '/account',
			},
			{
				title: 'Settings',
				href: '/account/settings',
			},
		],
	},
	{
		title: 'Company',
		links: [
			{
				title: 'About',
				href: '/about',
			},
			{
				title: 'Careers',
				href: '/careers',
			},
			{
				title: 'Blog',
				href: '/blog',
			},
			{
				title: 'Meet the Team',
				href: '/team',
			},
		],
	},
	{
		title: 'Help',
		links: [
			{
				title: 'Support',
				href: '/support',
			},
			{
				title: 'Contact Us',
				href: '/contact',
			},
			{
				title: 'FAQs',
				href: '/faqs',
			},
		],
	},
	{
		title: 'Legal',
		links: [
			{
				title: 'Accessibility',
				href: '/accessibility',
			},
			{
				title: 'Privacy Policy',
				href: '/privacy-policy',
			},
			{
				title: 'Terms of Service',
				href: '/tos',
			},
			{
				title: 'Refund Policy',
				href: '/refund-policy',
			},
		],
	},
];
