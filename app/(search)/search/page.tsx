'use client';

import { useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { X, Search } from 'lucide-react';
import Link from 'next/link';
import BigArticle from '@/components/big-article';

const client = algoliasearch('2L08FIKHNE', 'd7b0ac8a6c02c91e68744bf76490a744');
const index = client.initIndex('test_equidistant');

const SearchPage = () => {
	const [results, setResults] = useState([]);

	useEffect(() => {
		index.search('').then(({ hits }) => setResults(hits as any));
	}, []);

	return (
		<div className="max-w-7xl mx-auto my-24">
			<div className="px-4 xl:px-10">
				<h1 className="font-medium text-2xl text-slate-900 inline-flex items-center justify-between w-full">
					Search Equidistant
					<Link href="/">
						<X
							size={24}
							className="text-slate-600 ml-auto hover:text-slate-900"
						/>
					</Link>
				</h1>

				<div className="relative">
					<input
						type="text"
						placeholder="Start typing ..."
						onChange={(e) =>
							index
								.search(e.target.value || '')
								.then(({ hits }) => setResults(hits as any))
						}
						className="flex items-center gap-x-3 rounded-lg bg-white mt-6
                    transition duration-150 border border-slate-400 h-[64px] w-full 
                    focus:ring-2 focus:ring-sky-200 focus-within:border-sky-500 
                    hover:bg-slate-100/50 disabled:pointer-events-none disabled:opacity-50
                    text-slate-900 outline-none pl-14 text-lg text-medium
                    inner-border-0 placeholder:text-base placeholder:text-slate-foreground1"
					/>
					<Search className="text-slate-400 absolute left-5 top-5" />
				</div>

				<div className="mt-8 flex items-center">
					<span className="font-medium text-slate-900 text-lg border-r border-slate-500 pr-4">
						Articles
					</span>
					<span className="text-slate-600 ml-4">{results.length} results</span>
				</div>

				<div className="mt-8 grid grid-cols-3 gap-10">
					{results.map((article: any) => (
						<BigArticle key={article.title} article={article} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
