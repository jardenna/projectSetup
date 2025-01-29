import { FC } from 'react';

interface InputProps {
  aext?: string;
  name: string;
}

export enum HEnum {
  App = 'app',
  Name = 'name',
}

const Input: FC<InputProps> = ({ aext, name }) => (
  <section>
    <button type="button">
      jj {aext} {name}
    </button>
    <label htmlFor="inputField">ddd</label>
    <input type="text" id="inputField" />
    <img src="" alt="" />
  </section>
);

export default Input;
