import type { JSX } from "react/jsx-runtime";
import "./Styles.css";

export default function AppInput(props: {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  inputContent?: string,
}): JSX.Element {
  return (
    <label id="app-input-label">
      {props.label}
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.inputContent}

      />
    </label>
  );
}
