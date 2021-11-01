import { createContext, useContext } from 'react';

export interface HeaderContextProps {
  closeMenu: () => void;
  toggleMenu: () => void;
  menuIsOpen: boolean;
}

const HeaderContext = createContext<HeaderContextProps>({
  closeMenu: () => undefined,
  menuIsOpen: false,
  toggleMenu: () => undefined,
});

export const { Provider: HeaderContextProvider } = HeaderContext;

export default function useHeaderContext(): HeaderContextProps {
  return useContext(HeaderContext);
}
