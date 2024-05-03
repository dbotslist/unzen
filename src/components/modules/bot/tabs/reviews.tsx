import ErrorMessage from "@/components/common/feedback/error-message";
import { Progress } from "@nextui-org/progress";
import {
	IconAlertTriangleFilled,
	IconSquareNumber1Filled,
	IconSquareNumber2Filled,
	IconSquareNumber3Filled,
	IconSquareNumber4Filled,
	IconSquareNumber5Filled,
	IconStarFilled,
} from "@tabler/icons-react";

export default function ReviewsBotTab() {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex lg:flex-row flex-col gap-3">
				<div className="lg:w-1/2 w-full rounded-xl bg-content1 p-5 flex flex-col gap-3">
					<h1 className="text-2xl font-bold">Reviews & rating (MOCKED)</h1>
					<div className="flex gap-4 items-center">
						<div className="flex gap-1 items-center">
							<IconSquareNumber5Filled className="w-5 h-5" />{" "}
							<IconStarFilled className="w-5 h-5 text-warning" />
						</div>
						<Progress color="warning" value={50} />
					</div>
					<div className="flex gap-4 items-center">
						<div className="flex gap-1 items-center">
							<IconSquareNumber4Filled className="w-5 h-5" />{" "}
							<IconStarFilled className="w-5 h-5 text-warning" />
						</div>
						<Progress color="warning" value={40} />
					</div>
					<div className="flex gap-4 items-center">
						<div className="flex gap-1 items-center">
							<IconSquareNumber3Filled className="w-5 h-5" />{" "}
							<IconStarFilled className="w-5 h-5 text-warning" />
						</div>
						<Progress color="warning" value={30} />
					</div>
					<div className="flex gap-4 items-center">
						<div className="flex gap-1 items-center">
							<IconSquareNumber2Filled className="w-5 h-5" />{" "}
							<IconStarFilled className="w-5 h-5 text-warning" />
						</div>
						<Progress color="warning" value={20} />
					</div>
					<div className="flex gap-4 items-center">
						<div className="flex gap-1 items-center">
							<IconSquareNumber1Filled className="w-5 h-5" />{" "}
							<IconStarFilled className="w-5 h-5 text-warning" />
						</div>
						<Progress color="warning" value={10} />
					</div>
				</div>
				<div className="w-full">
					<ErrorMessage
						icon={<IconAlertTriangleFilled className="w-6 h-6" />}
						message="This section is work in progress"
						isCentered
					/>
				</div>
			</div>
			<ErrorMessage
				icon={<IconAlertTriangleFilled className="w-6 h-6" />}
				message="This section is also work in progress"
				isCentered
			/>
		</div>
	);
}
