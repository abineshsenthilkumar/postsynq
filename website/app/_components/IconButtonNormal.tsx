import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function IconButtonNormal({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["linkedin"]} href="https://www.postsynq.in">
        <div className={styles["div-62"]}>
          <div className={styles["div-4"]}>
            <SvgGraphic className={styles["svg-5"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); color: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); flex-shrink: 0;\" data-f2c-idx=\"1087\"><g color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" weight=\"regular\" data-f2c-idx=\"1088\"><path d=\"M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z\" data-f2c-idx=\"1089\"></path></g></svg>"} />
          </div>
        </div>
      </a>
  )
}
