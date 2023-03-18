export const getToothFaceNameByInitial = (initial: string): string => {
  const toothFaceNames: { [key: string]: string } = {
    M: "Mesial",
    D: "Distal",
    B: "Bucal",
    L: "Lingual",
    O: "Oclusal",
    P: "Palatino",
    I: "Incisal",
  };

  return (
    toothFaceNames[initial.toUpperCase()] || "Letra de cara de diente no válida"
  );
};
