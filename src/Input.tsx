import { FC } from 'react';

interface InputProps {
  text?: string;
}

const Input: FC<InputProps> = ({ text }) => {
  if (text) {
    console.log(123);
  }

  return (
    <section>
      <button>jj {text}</button>
      <input type="text" />
      <img src="" alt="" />
    </section>
  );
};

export default Input;
