import Link from 'next/link';
import Image from 'next/image';
import { TrendingDown, TrendingUp } from 'lucide-react';

const BigArticle = ({ article }: any) => {
	return (
		<Link href={`/articles/${article.id || article._id.$oid}`}>
			<div className="shadow-md h-fit bg-white rounded-md group">
				<Image
					src={article.images ? article.images[0] : article.urlToImage[0]}
					alt={article.title}
					width={500}
					height={200}
					className="w-[500px] h-[300px] object-cover rounded-t-md group-hover:opacity-90 transition-opacity duration-200"
				/>

				<div className="px-8 py-6 max-w-[500px] group-hover:opacity-75 transition-opacity duration-200">
					<span className="text-slate-900 font-semibold text-xl line-clamp-3">
						{article.title.trim().replaceAll('"', '')}.
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
							<span className="pl-5">Fox & CNN | {article.date}</span>
						</span>
						{article.images && (
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
						)}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BigArticle;
