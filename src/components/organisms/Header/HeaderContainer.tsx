import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { menuState } from '../../../state';
import Header from './Header';
import { HeaderContextProvider } from './useHeaderContext';

export default function HeaderContainer(): React.ReactElement {
  // Recoil subscriptions
  const [menuIsOpen, setMenuIsOpen] = useRecoilState(
    menuState.header.menuIsOpen,
  );

  // Setters
  const toggleMenu = useCallback(
    () => setMenuIsOpen((prev) => !prev),
    [setMenuIsOpen],
  );
  const closeMenu = useCallback(() => setMenuIsOpen(false), [setMenuIsOpen]);

  return (
    <HeaderContextProvider
      value={{
        closeMenu,
        menuIsOpen,
        toggleMenu,
      }}
    >
      <Header />
    </HeaderContextProvider>
  );
}
