import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function CardTeamMember({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-5"]}>
        <div className={styles["avatar"]}>
          <div className={styles["div-79"]}>
            <img className={styles["img-4"]} src={slots[0] ?? "https://framerusercontent.com/images/ofVk6pjF8UfeZPteRzo4zBaah8U.png?scale-down-to=1024&width=1254&height=1254"} alt="" />
          </div>
        </div>
        <div className={styles["info"]}>
          <div className={styles["title"]}>
            <div className={styles["div-80"]}>
              <p className={styles["p-38"]}>{slots[1] ?? "Preetham"}</p>
            </div>
            <div className={styles["div-81"]}>
              <p className={styles["p-39"]}>{slots[2] ?? "Founder"}</p>
            </div>
          </div>
          <div className={styles["links-5"]}>
            <div className={styles["div-61"]}>
              <a className={styles["linkedin"]} href="https://www.linkedin.com">
                <div className={styles["div-3"]}>
                  <div className={styles["div-4"]}>
                    <SvgGraphic className={styles["svg-5"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" viewBox=\"0 0 24 24\" color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); flex-shrink: 0;\" data-f2c-idx=\"299\"><path d=\"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z\" data-f2c-idx=\"300\"></path></svg>"} />
                  </div>
                </div>
              </a>
            </div>
            <div className={styles["div-61"]}>
              <a className={styles["linkedin"]} href="https://www.postsynq.in">
                <div className={styles["div-62"]}>
                  <div className={styles["div-4"]}>
                    <SvgGraphic className={styles["svg-5"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); color: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); flex-shrink: 0;\" data-f2c-idx=\"305\"><g color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" weight=\"regular\" data-f2c-idx=\"306\"><path d=\"M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z\" data-f2c-idx=\"307\"></path></g></svg>"} />
                  </div>
                </div>
              </a>
            </div>
            <div className={styles["div-61"]}>
              <a className={styles["linkedin"]} href="mailto:support@postsynq.in">
                <div className={styles["div-62"]}>
                  <div className={styles["div-4"]}>
                    <SvgGraphic className={styles["svg-5"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); color: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); flex-shrink: 0;\" data-f2c-idx=\"312\"><g color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" weight=\"regular\" data-f2c-idx=\"313\"><path d=\"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z\" data-f2c-idx=\"314\"></path></g></svg>"} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
