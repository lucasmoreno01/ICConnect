import type { JSX } from "react/jsx-runtime";

export default function AppInput(props: {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  inputContent?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}): JSX.Element {
  return (
    <label id="app-input-label">
      {props.label}
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.inputContent}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </label>
  );
}