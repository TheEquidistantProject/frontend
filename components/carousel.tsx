'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import Image from 'next/image';
import { Circle, Star, TrendingDown, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const Carousel = ({ data }: any) => {
	const [active, setActive] = useState(hashtags[0]);
	const articles = data.filter((article: any) => article.tags.includes(active));
	const lhsArticles = articles.slice(1, 4);

	return (
		<div className="mt-12 flex justify-center max-w-7xl mx-auto">
			<ul className="space-y-6 mr-24 mt-12">
				{hashtags.map((tag: string) => (
					<li key={tag} className="w-[120px] flex items-center">
						<button
							onClick={() => setActive(tag)}
							className={cn(
								'text-sm',
								active === tag
									? 'text-slate-900 font-semibold'
									: 'text-slate-600 font-medium'
							)}
						>
							#{tag === 'war' ? 'conflict' : tag.toLocaleLowerCase()}
						</button>

						{active === tag && (
							<span className="text-sky-500 mt-0.5 ml-auto">
								<Circle size={8} fill="#0ea5e9" />
							</span>
						)}
					</li>
				))}
			</ul>

			<div>
				<span className="text-slate-500 font-semibold text-sm">Trending</span>
				<Link href={`/articles/${articles[0].id}`}>
					<div className="shadow-md h-fit bg-white rounded-md mt-4 mb-6 group">
						<Image
							src={articles[0].images[0]}
							alt={articles[0].id}
							width={500}
							height={200}
							className="w-[500px] h-[300px] object-cover rounded-t-md group-hover:opacity-90 transition-opacity duration-200"
						/>

						<div className="px-8 py-6 max-w-[500px] group-hover:opacity-75 transition-opacity duration-200">
							<span className="text-slate-900 font-semibold text-xl line-clamp-3">
								{articles[0].title.trim().replaceAll('"', '')}.
							</span>

							<div className="flex items-center justify-between text-slate-500 mt-4">
								<span className="flex -space-x-3 items-center">
									<Image
										src="https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg"
										alt="CNN Logo"
										width={24}
										height={24}
										className="rounded-full object-cover h-8 w-8 inline-block ring-2 ring-white"
									/>
									<Image
										src="https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg"
										alt="Fox News Logo"
										width={24}
										height={24}
										className="rounded-full object-cover h-8 w-8 inline-block ring-2 ring-white"
									/>
									<span className="pl-5">Fox & CNN | {articles[0].date}</span>
								</span>
								<span className="inline-flex items-center">
									{articles[0].popularity > 0 ? (
										<TrendingUp size={24} className="text-green-500" />
									) : (
										<TrendingDown size={24} className="text-red-500" />
									)}
									<span className="ml-1.5 text-slate-900 font-medium">
										{Math.abs(articles[0].popularity)}%
									</span>
								</span>
							</div>
						</div>
					</div>
				</Link>
				<div className="flex items-center justify-between">
					<span className="text-slate-500 font-medium text-sm inline-flex items-center gap-x-2">
						Seeing news on{' '}
						<span className="text-lg text-slate-900">
							#{active === 'war' ? 'conflict' : active}
						</span>
					</span>
					<span className="inline-flex items-center gap-x-1 text-slate-500 font-medium text-sm">
						<Star size={16} className="text-amber-500" fill="#f59e0b" />
						Follow
					</span>
				</div>
			</div>

			<div className="ml-16">
				<span className="text-slate-500 font-semibold text-sm">Related</span>

				<ul className="mt-4 mb-6 rounded-md bg-white shadow-md">
					{lhsArticles.map((article: any, index: number) => (
						<li key={article.id}>
							<Link href={`/articles/${article.id}`}>
								<div
									className={cn(
										'flex items-center group',
										index === 0 ? 'rounded-t-md' : 'border-t',
										index === lhsArticles.length - 1 ? 'rounded-b-md' : ''
									)}
								>
									<Image
										src={article.images[0]}
										alt={article.id}
										width={150}
										height={112}
										className={cn(
											'group-hover:opacity-90 transition-opacity object-cover w-[150px] h-[112px] shrink-0',
											index === 0 ? 'rounded-tl-md' : '',
											index === lhsArticles.length - 1 ? 'rounded-bl-md' : ''
										)}
									/>

									<div className="p-4 w-[350px] group-hover:opacity-75 transition-opacity">
										<span className="text-slate-900 font-medium truncate whitespace-break-spaces line-clamp-2">
											{article.title.trim().replaceAll('"', '')}.
										</span>

										<div className="flex items-center justify-between text-slate-500 text-sm mt-2">
											<span className="flex items-center">
												<span className="">{article.date}</span>
											</span>
											<span className="inline-flex items-center">
												{article.popularity > 0 ? (
													<TrendingUp size={24} className="text-green-500" />
												) : (
													<TrendingDown size={24} className="text-red-500" />
												)}
												<span className="ml-1.5 text-slate-900 font-medium">
													{Math.abs(article.popularity)}%
												</span>
											</span>
										</div>
									</div>
								</div>
							</Link>
						</li>
					))}
				</ul>

				<span className="text-slate-500 font-medium text-sm text-right block">
					Made with ❤️ at HackUIowa
				</span>
			</div>
		</div>
	);
};

export default Carousel;

var hashtags = ['politics', 'war', 'environment', 'finance', 'sports'];
