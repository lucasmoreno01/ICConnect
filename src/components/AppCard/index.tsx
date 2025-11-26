import type { JSX, MouseEventHandler } from "react";
import "./Styles.css";

export default function AppCard(props: {
  title: string;
  label?: string;
  content: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}): JSX.Element {
  return (
    <div className="app-card" onClick={props.onClick}>
      <div className="card-row">
        <h2>{props.title}</h2>
        <p id="label-left">{props.label}</p>
      </div>
      <p
        className="content"
        dangerouslySetInnerHTML={{ __html: props.content }}
      >
      </p>
    </div>
  );
}
