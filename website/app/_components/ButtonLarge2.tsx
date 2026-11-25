import styles from "./styles.module.css"

export default function ButtonLarge2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary"]} href="https://www.postsynq.in/signup">
        <div className={styles["content-2"]}>
          <div className={styles["div-6"]}>
            <p className={styles["p-3"]}>{slots[0] ?? "Start free trial"}</p>
          </div>
          <div className={styles["div-6"]}>
            <p className={styles["p-3"]}>{slots[1] ?? "Start free trial"}</p>
          </div>
        </div>
      </a>
  )
}
