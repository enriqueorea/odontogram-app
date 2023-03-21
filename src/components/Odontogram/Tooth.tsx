import type { FC } from "react";
import { useOdontogramStore } from "~/store/odontogramStore";
import { useUiStore } from "~/store/uiStore";

interface ToothProps {
	toothNumber: number;
}

const isAnteriorTooth = (toothNumber: number): boolean => {
	const firstDigit = Math.floor(toothNumber / 10);
	const secondDigit = toothNumber % 10;

	return firstDigit <= 2 && secondDigit >= 1 && secondDigit <= 3;
};

export const Tooth: FC<ToothProps> = ({ toothNumber }) => {
	const isAnterior = isAnteriorTooth(toothNumber);

	const { setToothCapturing } = useOdontogramStore();

	const { toggleCapturing } = useUiStore();

	const handleToothClick = (toothFace: string) => {
		console.log("Diente: ", toothNumber, "Cara: ", toothFace);
		setToothCapturing(toothNumber, toothFace, true);
		toggleCapturing();
	};

	return (
		<div className="p-1 flex flex-col items-center">
			<div
				className={
					" h-20 w-20 bg-[#f3f3f3f3] rounded-full border border-[#333] grid grid-cols-2 grid-rows-2 relative overflow-hidden shadow-xl"
				}
			>
				{isAnterior || (
					<button
						onClick={() => handleToothClick("O")}
						type="button"
						className="z-10 bg-white hover:bg-blue-400 hover:scale-150 grid place-content-center w-8 h-8 border border-[#333] rounded-full justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					>
						O
					</button>
				)}
				<div className="max-h-full max-w-full border-l border-[#333] hover:bg-blue-400">
					<button
						onClick={() => handleToothClick("M")}
						type="button"
						className="w-full  h-full"
					>
						M
					</button>
				</div>{" "}
				<div className="max-h-full max-w-full border-l border-[#333]">
					<button
						onClick={() => handleToothClick(isAnterior ? "L" : "B")}
						type="button"
						className="w-full  h-full hover:bg-blue-400"
					>
						{isAnterior ? "L" : "B"}
					</button>
				</div>{" "}
				<div
					className={`max-h-full ${
						isAnterior ? "col-span-2" : ""
					} max-w-full border-l border-t border-[#333]`}
				>
					<button
						onClick={() => handleToothClick("D")}
						type="button"
						className="w-full  h-full hover:bg-blue-400"
					>
						D
					</button>
				</div>{" "}
				{!isAnterior && (
					<div className="max-h-full max-w-full border-l border-t border-[#333]">
						<button
							onClick={() => handleToothClick("L")}
							type="button"
							className="w-full  h-full hover:bg-blue-400"
						>
							L
						</button>
					</div>
				)}
			</div>
			<div className="pt-1">
				<p>{toothNumber}</p>
			</div>
		</div>
	);
};
