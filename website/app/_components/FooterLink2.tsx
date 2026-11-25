import styles from "./styles.module.css"

export default function FooterLink2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["normal-3"]} href="./feature">
        <div className={styles["div-64"]}>
          <p className={styles["p-31"]}>{slots[0] ?? "Getting started"}</p>
        </div>
      </a>
  )
}
