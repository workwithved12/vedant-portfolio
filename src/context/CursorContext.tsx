import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface CursorContextType {
  cursorText: string;
  cursorVariant: 'default' | 'hover' | 'card';
  setCursor: (text: string, variant?: 'default' | 'hover' | 'card') => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorText: '',
  cursorVariant: 'default',
  setCursor: () => {},
  resetCursor: () => {},
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'card'>('default');

  const setCursor = (text: string, variant: 'default' | 'hover' | 'card' = 'hover') => {
    setCursorText(text);
    setCursorVariant(variant);
  };

  const resetCursor = () => {
    setCursorText('');
    setCursorVariant('default');
  };

  return (
    <CursorContext.Provider value={{ cursorText, cursorVariant, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
