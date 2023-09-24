import {
	TrendingUp,
	TrendingDown,
	ThumbsUp,
	ThumbsDown,
	Share,
} from 'lucide-react';
import Image from 'next/image';

async function fetchData(id: string) {
	const res = await fetch(`https://backend.muthu.live/api/articles/${id}`, {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	});
	const json = await res.json();
	return json.data[0];
}

export async function generateStaticParams() {
	const posts = await fetch('https://backend.muthu.live/api/ids').then((res) =>
		res.json()
	);

	return posts.data.map((post: string) => ({
		id: post,
	}));
}

const ArticlePage = async ({ params }: { params: { id: string } }) => {
	const article = await fetchData(params.id);
	const content = article.body
		.split('\n')
		.filter((line: string) => line.length > 0);

	return (
		<div className="border-t border-slate-300 max-w-screen-2xl mx-auto mt-4 mb-20 px-4">
			<div className="mt-12 max-w-4xl mx-auto">
				<h1 className="text-3xl font-medium text-slate-900">
					{article.title}.
				</h1>

				<div className="flex items-center justify-between text-slate-500 mt-8">
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
						<span className="pl-5">Fox & CNN</span>
					</span>
					<span className="inline-flex items-center">
						<span className="pr-8">Date generated: {article.date}</span>
						{article.popularity > 0 ? (
							<TrendingUp size={24} className="text-green-500" />
						) : (
							<TrendingDown size={24} className="text-red-500" />
						)}
						<span className="ml-1.5 text-slate-900 font-medium">
							{Math.abs(article.popularity)}% views
						</span>
					</span>
				</div>

				<Image
					src={article.images[0]}
					alt={article.title}
					width={500}
					height={300}
					className="w-full object-cover rounded-md mt-8"
				/>

				<div className="mt-8 text-slate-900 text-xl">
					{content.map((paragraph: string, index: number) => (
						<p className="mb-4" key={index}>
							{paragraph}
						</p>
					))}
				</div>

				<div className="flex items-center justify-between border-t mt-8 pt-8 border-slate-300">
					<div className="flex items-center gap-x-6">
						<ThumbsUp size={24} className="text-slate-500" />
						<ThumbsDown size={24} className="text-slate-500" />
					</div>

					<Share size={24} className="text-slate-500" />
				</div>
			</div>
		</div>
	);
};

export default ArticlePage;
