import { Dispatch, SetStateAction } from "react";

export interface universalContextType {
  universalData: universalDataType;
  setUniversalData: Dispatch<SetStateAction<universalDataType>>;
}

export interface universalDataType {
  dialog: {
    isVisible: boolean;
    dialogType: string;
  };
}
