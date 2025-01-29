import { FC } from 'react';

interface InputProps {
  text?: string;
}

const Input: FC<InputProps> = ({ text }) => (
  <section>
    <button type="button">jj {text}</button>
    <label htmlFor="inputField">ddd</label>
    <input type="text" id="inputField" />
    <img src="" alt="" />
  </section>
);

export default Input;
