import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function HeroTag({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["variant-1"]} href="./">
        <div className={styles["tag"]}>
          <div className={styles["div"]}>
            <h6 className={styles["h6"]}>{slots[0] ?? "New"}</h6>
          </div>
        </div>
        <div className={styles["bghover"]} />
        <div className={styles["text"]}>
          <div className={styles["div-2"]}>
            <p className={styles["p"]}>{slots[1] ?? "Free trial open for our first 100 users"}</p>
          </div>
          <div className={styles["icon"]}>
            <div className={styles["div-3"]}>
              <div className={styles["div-4"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35)); color: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35)); flex-shrink: 0;\" data-f2c-idx=\"21\"><g color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35))\" weight=\"regular\" data-f2c-idx=\"22\"><path d=\"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z\" data-f2c-idx=\"23\"></path></g></svg>"} />
              </div>
            </div>
            <div className={styles["div-3"]}>
              <div className={styles["div-4"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35)); color: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35)); flex-shrink: 0;\" data-f2c-idx=\"26\"><g color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35))\" weight=\"regular\" data-f2c-idx=\"27\"><path d=\"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z\" data-f2c-idx=\"28\"></path></g></svg>"} />
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}
