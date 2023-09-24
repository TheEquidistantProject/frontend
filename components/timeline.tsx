import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';
import BigArticle from './big-article';

const Timeline = ({ data }: any) => {
	return (
		<div className="flex justify-between">
			<div className="w-1/6 flex justify-between">
				<div className="mt-3 space-y-4">
					{timestamps.map((timestamp) => (
						<button
							key={timestamp}
							className={cn(
								'text-sm block pb-1',
								'Today' === timestamp
									? 'text-slate-900 font-semibold border-b-2 border-amber-500'
									: 'text-slate-500 font-medium border-b-2 border-transparent hover:text-slate-900'
							)}
						>
							{timestamp}
						</button>
					))}
				</div>

				<div className="flex flex-col items-center gap-y-2">
					<Clock size={24} className="text-slate-500" />

					<div className="border-r border-slate-400 h-full"></div>
				</div>
			</div>

			<div className="grid grid-cols-2 mb-12 gap-10 mt-4">
				{data.slice(0,10).map((user: any) => (
					<BigArticle key={user.id} article={user} />
				))}
			</div>
		</div>
	);
};

export default Timeline;

const timestamps = ['Today', 'Yesterday', 'This Week', 'This Month'];
