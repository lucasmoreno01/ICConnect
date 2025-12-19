import type { JSX } from "react";
import "./Styles.css";

export default function AppCard(props: {
  title: string;
  start?: string;
  end?: string;
  content: string;
  eventUrl?: string;
}): JSX.Element {

  const handleClick = () => {
    if (props.eventUrl) {
      window.open(props.eventUrl, "_blank");
    }
  };

  return (
    <div className="app-card" onClick={handleClick} style={{ cursor: props.eventUrl ? "pointer" : "default" }}>
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
