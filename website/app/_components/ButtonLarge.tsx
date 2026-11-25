import styles from "./styles.module.css"

export default function ButtonLarge({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["outline-black"]} href="https://www.postsynq.in/login">
        <div className={styles["content"]}>
          <div className={styles["div-5"]}>
            <p className={styles["p-2"]}>{slots[0] ?? "Log in"}</p>
          </div>
          <div className={styles["div-5"]}>
            <p className={styles["p-2"]}>{slots[1] ?? "Log in"}</p>
          </div>
        </div>
      </a>
  )
}
