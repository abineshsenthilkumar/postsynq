import styles from "./styles.module.css"

export default function Logo({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["light-mode"]} href="./">
        <div className={styles["div-53"]}>
          <div className={styles["div-54"]}>
            <img className={styles["img-2"]} src={slots[0] ?? "https://framerusercontent.com/images/Ii5jzXd6b9BEjgESaoWqBULhX4.png?width=357&height=81"} alt="" />
          </div>
        </div>
      </a>
  )
}
