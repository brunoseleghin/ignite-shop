import { createContext, ReactNode, useState } from "react";

export type StatusType = 'open' | 'close'

interface DialogContextProps {
  status: StatusType;
  setStatusDialog: (status: StatusType) => void;
}

interface CartContextProviderProps {
  children: ReactNode
}

export const DialogContext = createContext({} as DialogContextProps);

export function DialogContextProvider({ children }:  CartContextProviderProps) {
  const [status, setStatus] = useState<StatusType>('close')

  function setStatusDialog(status: StatusType) {
    setStatus(status)
  }

  return (
    <DialogContext.Provider value={{ status, setStatusDialog }}>
      {children}
    </DialogContext.Provider>
  )
}
