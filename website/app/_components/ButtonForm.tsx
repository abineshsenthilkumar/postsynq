import styles from "./styles.module.css"
import States from "./States"

export default function ButtonForm({ slots = [] }: { slots?: string[] }) {
  return (
      <States
        a={<>
          <button className={styles["main"]}>
            <div className={styles["div-58"]}>
              <p className={styles["p-27"]}>{"Join"}</p>
            </div>
          </button>
        </>}
        b={<>
          <button className={styles["error"]}>
            <div className={styles["div-59"]}>
              <p className={styles["p-28"]}>{"Error"}</p>
            </div>
          </button>
        </>}
      />
  )
}
