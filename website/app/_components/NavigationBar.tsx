import styles from "./styles.module.css"

export default function NavigationBar({ slots = [] }: { slots?: string[] }) {
  return (
      <nav className={styles["desktop-2"]}>
        <div className={styles["content-12"]}>
          <div className={styles["logo-3"]}>
            <div className={styles["div-52"]}>
              <a className={styles["light-mode"]} href="./">
                <div className={styles["div-53"]}>
                  <div className={styles["div-54"]}>
                    <img className={styles["img-2"]} src={slots[0] ?? "https://framerusercontent.com/images/Ii5jzXd6b9BEjgESaoWqBULhX4.png?width=357&height=81"} alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={styles["menulinks"]}>
            <div className={styles["div-65"]}>
              <a className={styles["light-mode-2"]} href="./about">
                <div className={styles["div-66"]}>
                  <p className={styles["p-32"]}>{slots[1] ?? "About"}</p>
                </div>
              </a>
            </div>
            <div className={styles["div-67"]}>
              <a className={styles["light-mode-3"]} href="./feature">
                <div className={styles["div-68"]}>
                  <p className={styles["p-33"]}>{slots[2] ?? "Features"}</p>
                </div>
              </a>
            </div>
            <div className={styles["div-69"]}>
              <a className={styles["light-mode-4"]} href="./pricing">
                <div className={styles["div-70"]}>
                  <p className={styles["p-34"]}>{slots[3] ?? "Pricing"}</p>
                </div>
              </a>
            </div>
            <div className={styles["div-71"]}>
              <a className={styles["light-mode-5"]} href="./contact">
                <div className={styles["div-72"]}>
                  <p className={styles["p-35"]}>{slots[4] ?? "Contact"}</p>
                </div>
              </a>
            </div>
          </div>
          <div className={styles["cta"]}>
            <div className={styles["buttons"]}>
              <div className={styles["div-73"]}>
                <a className={styles["outline-black"]} href="https://www.postsynq.in/login">
                  <div className={styles["content"]}>
                    <div className={styles["div-5"]}>
                      <p className={styles["p-2"]}>{slots[5] ?? "Log in"}</p>
                    </div>
                    <div className={styles["div-5"]}>
                      <p className={styles["p-2"]}>{slots[6] ?? "Log in"}</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className={styles["div-74"]}>
                <a className={styles["primary"]} href="https://www.postsynq.in/signup">
                  <div className={styles["content-2"]}>
                    <div className={styles["div-6"]}>
                      <p className={styles["p-3"]}>{slots[7] ?? "Start free trial"}</p>
                    </div>
                    <div className={styles["div-6"]}>
                      <p className={styles["p-3"]}>{slots[8] ?? "Start free trial"}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}
