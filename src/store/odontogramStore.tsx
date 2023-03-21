import { create } from "zustand";

interface toothCapturing {
	toothNumber: number;
	toothFace: string;
	captured: boolean;
}

interface OdontogramStore {
	toothCapturing: toothCapturing;
	setToothCapturing: (
		tooth: number,
		toothFace: string,
		captured: boolean,
	) => void;
}

export const useOdontogramStore = create<OdontogramStore>((set) => ({
	toothCapturing: {
		toothNumber: 0,
		toothFace: "",
		captured: false,
	},

	setToothCapturing: (
		toothNumber: number,
		toothFace: string,
		captured: boolean,
	) => {
		set({
			toothCapturing: {
				toothNumber,
				toothFace,
				captured,
			},
		});
	},
}));
