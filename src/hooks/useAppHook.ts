import { useRef, useState } from 'react';

const useAppHook = (): [TInputRef, string, TButtonClickHandler] => {
  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState('');

  const hOnClick = () => {
    setText(ref.current?.value ?? '');
  };

  return [ref, text, hOnClick];
};

export default useAppHook;
