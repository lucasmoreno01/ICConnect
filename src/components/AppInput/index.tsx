import type { JSX } from 'react/jsx-runtime';

export default function AppInput(props: {
  type: string;
  name: string;
}): JSX.Element {
  return (
    <label>
      Usuário
      <input type={props.type} name={props.name} placeholder="Login" />
    </label>
  );
}