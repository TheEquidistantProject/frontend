'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import Image from 'next/image';
import { Circle, Star, TrendingUp } from 'lucide-react';

const Carousel = ({ data }: any) => {
	const ids = data.map((user: any) => user.id);
	const [active, setActive] = useState(ids[0]);
	const activeUsers = data.filter((user: any) => user.id === active);

	return (
		<div className="mt-12 flex justify-center max-w-7xl mx-auto">
			<ul className="space-y-6 mr-24 mt-12">
				{data.map((user: any) => (
					<li key={user.id} className="w-[100px] flex items-center">
						<button
							onClick={() => setActive(user.id)}
							className={cn(
								'text-sm',
								active === user.id
									? 'text-slate-900 font-semibold'
									: 'text-slate-600'
							)}
						>
							#{user.login}
						</button>

						{active === user.id && (
							<span className="text-sky-500 mt-0.5 ml-auto">
								<Circle size={8} fill="#0ea5e9" />
							</span>
						)}
					</li>
				))}
			</ul>

			<div>
				<span className="text-slate-500 font-semibold text-sm">Trending</span>
				<div className="shadow h-fit bg-white rounded-md mt-4 mb-6">
					<Image
						src={activeUsers[0].avatar_url}
						alt={activeUsers[0].login}
						width={500}
						height={200}
						className="w-[600px] h-[300px] object-cover rounded-t-md"
					/>

					<div className="px-8 py-6 max-w-[600px]">
						<span className="text-slate-900 font-semibold text-xl">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
							molestias ipsam eum nobis, iure consequatur!
						</span>

						<div className="flex items-center justify-between text-slate-500 mt-4">
							<span className="flex items-center">
								<Image
									src={activeUsers[0].avatar_url}
									alt={activeUsers[0].login}
									width={24}
									height={24}
									className="rounded-full"
								/>
								<span className="ml-2">
									{activeUsers[0].login} | 28 minutes ago
								</span>
							</span>
							<span className="inline-flex items-center">
								<TrendingUp size={24} className="text-green-500" />
								<span className="ml-1.5 text-slate-900 font-medium">1.2%</span>
							</span>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-slate-500 font-semibold text-sm inline-flex items-center gap-x-2">
						Seeing news on{' '}
						<span className="text-lg text-slate-900">
							#{activeUsers[0].login}
						</span>
					</span>
					<span className="inline-flex items-center gap-x-1 text-slate-500 font-semibold text-sm">
						<Star size={16} className="text-amber-500" />
						Follow
					</span>
				</div>
			</div>

			<div className="ml-16">
				<span className="text-slate-500 font-semibold text-sm">Related</span>

				<ul className="mt-4 rounded-md bg-white shadow">
					{data.map((user: any, index: number) => (
						<li key={user.id}>
							<div
								className={cn(
									'flex items-center',
									index === 0 ? 'rounded-t-md' : 'border-t',
									index === data.length - 1 ? 'rounded-b-md' : ''
								)}
							>
								<Image
									src={user.avatar_url}
									alt={user.login}
									width={108}
									height={108}
									className={cn(
										index === 0 ? 'rounded-tl-md' : '',
										index === data.length - 1 ? 'rounded-bl-md' : ''
									)}
								/>

								<div className="p-4 w-[300px]">
									<span className="text-slate-900 font-medium truncate whitespace-break-spaces line-clamp-2">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Cum ex veritatis et illo fuga nesciunt distinctio
										consequatur! Quod voluptate eveniet obcaecati quia est,
										animi et autem laboriosam debitis dolore non.
									</span>

									<div className="flex items-center justify-between text-slate-500 text-sm mt-2">
										<span className="flex items-center">
											<span className="">28 minutes ago</span>
										</span>
										<span className="inline-flex items-center">
											<TrendingUp size={16} className="text-green-500" />
											<span className="ml-1.5 text-slate-900 font-medium">
												1.2%
											</span>
										</span>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Carousel;
