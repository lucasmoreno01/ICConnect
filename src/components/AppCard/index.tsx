import type { JSX } from "react";

export default function AppCard(props: {
  title: string;
  start?: string;
  end?: string;
  content: string;
  onClick?: () => void;
}): JSX.Element {
  return (
    <div
      className="app-card"
      onClick={props.onClick}
      style={{ cursor: props.onClick ? "pointer" : "default" }}
    >
      <div className="card-row">
        <h2>{props.title}</h2>
        <div className="card-dates">
          {props.start && <p>{props.start}</p>}
          {props.end && <p>{props.end}</p>}
        </div>
      </div>

      <p
        className="content"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  );
}
