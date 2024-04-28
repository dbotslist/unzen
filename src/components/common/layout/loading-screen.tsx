import Loader from "../feedback/loader";

export default function LoadingScreen() {
	return (
		<div className="flex flex-col h-[50vh] justify-center w-full">
			<Loader className="w-6 h-6 mx-auto" />
		</div>
	);
}
