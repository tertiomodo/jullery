import styles from "./style.module.css";
import clsx from "clsx";

export default function Footer() {
  return <div className={clsx(styles.footer, "wrapper")}>Footer</div>;
}
