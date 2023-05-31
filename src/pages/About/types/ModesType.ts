import { Dispatch, SetStateAction } from 'react';

interface editModeInterface {
  active: boolean;
  changes: boolean;
}

export interface ModeInterface {
  name: string;
  phrase?: string;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<editModeInterface>>;
  idUser?: string;
  warningEdit: boolean;
  setWarningEdit: Dispatch<SetStateAction<boolean>>;
}
