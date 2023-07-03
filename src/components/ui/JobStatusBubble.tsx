import styles from "./JobStatusBubble.module.scss";
import React from "react";

interface JobStatusBubbleProps {
  status: string;
}

export default function JobStatusBubble({ status }: JobStatusBubbleProps) {
  let bubble: React.ReactElement;

  switch (status) {
    case "WAITING":
      bubble = <div className={styles.waiting}>Waiting</div>;
      break;
    case "ACTIVE":
      bubble = <div className={styles.active}>Active</div>;
      break;
    default:
      bubble = <div>Memes</div>;
  }

  return bubble;
}
