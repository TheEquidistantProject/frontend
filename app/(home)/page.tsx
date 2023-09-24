import Carousel from '@/components/carousel';
import Timeline from '@/components/timeline';
import RootContainer from '@/components/ui/containers/root';

async function fetchData() {
	const res = await fetch('https://backend.muthu.live/api/articles', {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	});
	const json = await res.json();
	return json;
}

export default async function Index() {
	const json = await fetchData();

	return (
		<>
			<div className="bg-gradient-to-t from-slate-200 via-slate-200 to-white pb-16">
				<RootContainer>
					<Carousel data={json.data} />
				</RootContainer>
			</div>

			<div className="drop-shadow-md pt-12">
				<RootContainer>
					<div className="max-w-7xl mx-auto flex space-x-6">
						<div className="w-full">
							<h2 className="text-xl font-semibold text-slate-900 border-b-2 border-sky-500 pb-2">
								Explore Latest
							</h2>

							<div className="mt-6">
								<Timeline data={json.data} />
							</div>
						</div>
					</div>
				</RootContainer>
			</div>
		</>
	);
}
