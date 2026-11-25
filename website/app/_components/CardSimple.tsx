import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function CardSimple({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-3"]}>
        <div className={styles["icon-5"]}>
          <div className={styles["div-27"]}>
            <div className={styles["div-28"]}>
              <SvgGraphic className={styles["svg"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35)); color: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35)); flex-shrink: 0;\" data-f2c-idx=\"839\"><g color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35))\" weight=\"bold\" data-f2c-idx=\"840\"><path d=\"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z\" data-f2c-idx=\"841\"></path></g></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["item-4"]}>
          <div className={styles["div-29"]}>
            <h4 className={styles["h4"]}>{slots[0] ?? "Free trial"}</h4>
          </div>
          <div className={styles["div-30"]}>
            <p className={styles["p-10"]}>{slots[1] ?? "Claim one of 100 early-access spots and start posting today."}</p>
          </div>
        </div>
      </div>
  )
}
