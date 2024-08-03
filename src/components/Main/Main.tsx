import styles from "./style.module.css";
import clsx from "clsx";

export default function Main() {
  return <div className={clsx(styles.main, "wrapper")}>Main</div>;
}
