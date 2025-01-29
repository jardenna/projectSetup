import { FC } from 'react';

interface InputProps {
  text?: string;
}

const Input: FC<InputProps> = ({ text }) => (
  <section>
    <button>jj {text}</button>
  </section>
);

export default Input;
