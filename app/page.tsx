import Carousel from '@/components/carousel';
import RootContainer from '@/components/ui/containers/root';

async function fetchData() {
	const res = await fetch('https://api.github.com/users?per_page=3');
	const json = await res.json();
	return json;
}

export default async function Index() {
	const json = await fetchData();
	return (
		<>
			<div className="bg-gradient-to-t from-slate-200 via-slate-200 to-white pb-16">
				<RootContainer>
					<Carousel data={json} />
				</RootContainer>
			</div>

			<div className="drop-shadow-sm py-12">
				<RootContainer>
					hi
				</RootContainer>
			</div>
		</>
	);
}
