import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function UIDetailRoles({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-2"]}>
        <div className={styles["item"]}>
          <div className={styles["content-5"]}>
            <div className={styles["logo"]}>
              <div className={styles["div-10"]}>
                <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/RtcOYHwWHwohGIWnbcem3bpcYs.png?width=512&height=512"} alt="" />
              </div>
            </div>
            <div className={styles["content-6"]}>
              <div className={styles["div-11"]}>
                <p className={styles["p-6"]}>{slots[1] ?? "7-day plan"}</p>
              </div>
              <div className={styles["number"]}>
                <div className={styles["div-12"]}>
                  <h6 className={styles["h6-2"]}>{slots[2] ?? "7"}</h6>
                </div>
              </div>
            </div>
            <div className={styles["div-13"]}>
              <div className={styles["div-14"]}>
                <SvgGraphic className={styles["svg-3"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32)); color: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32)); flex-shrink: 0;\" data-f2c-idx=\"544\"><g color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32))\" weight=\"bold\" data-f2c-idx=\"545\"><path d=\"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z\" data-f2c-idx=\"546\"></path></g></svg>"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["item"]}>
          <div className={styles["content-5"]}>
            <div className={styles["logo"]}>
              <div className={styles["div-10"]}>
                <img className={styles["img"]} src={slots[3] ?? "https://framerusercontent.com/images/RtcOYHwWHwohGIWnbcem3bpcYs.png?width=512&height=512"} alt="" />
              </div>
            </div>
            <div className={styles["content-6"]}>
              <div className={styles["div-15"]}>
                <p className={styles["p-7"]}>{slots[4] ?? "15-day plan"}</p>
              </div>
              <div className={styles["number"]}>
                <div className={styles["div-16"]}>
                  <h6 className={styles["h6-3"]}>{slots[5] ?? "15"}</h6>
                </div>
              </div>
            </div>
            <div className={styles["div-13"]}>
              <div className={styles["div-14"]}>
                <SvgGraphic className={styles["svg-3"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32)); color: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32)); flex-shrink: 0;\" data-f2c-idx=\"560\"><g color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32))\" weight=\"bold\" data-f2c-idx=\"561\"><path d=\"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z\" data-f2c-idx=\"562\"></path></g></svg>"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["item-2"]}>
          <div className={styles["content-7"]}>
            <div className={styles["logo"]}>
              <div className={styles["div-10"]}>
                <img className={styles["img"]} src={slots[6] ?? "https://framerusercontent.com/images/RtcOYHwWHwohGIWnbcem3bpcYs.png?width=512&height=512"} alt="" />
              </div>
            </div>
            <div className={styles["content-8"]}>
              <div className={styles["div-17"]}>
                <p className={styles["p-8"]}>{slots[7] ?? "30-day plan"}</p>
              </div>
              <div className={styles["number"]}>
                <div className={styles["div-18"]}>
                  <h6 className={styles["h6-4"]}>{slots[8] ?? "30"}</h6>
                </div>
              </div>
            </div>
            <div className={styles["div-13"]}>
              <div className={styles["div-14"]}>
                <SvgGraphic className={styles["svg-3"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32)); color: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32)); flex-shrink: 0;\" data-f2c-idx=\"576\"><g color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32))\" weight=\"bold\" data-f2c-idx=\"577\"><path d=\"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z\" data-f2c-idx=\"578\"></path></g></svg>"} />
              </div>
            </div>
          </div>
          <div className={styles["list"]}>
            <div className={styles["item-3"]}>
              <div className={styles["div-19"]}>
                <h6 className={styles["h6-5"]}>{slots[9] ?? "Day 1 · Brand intro reel"}</h6>
              </div>
              <div className={styles["icon-2"]}>
                <div className={styles["div-20"]}>
                  <div className={styles["div-14"]}>
                    <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255)); color: var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255)); flex-shrink: 0;\" data-f2c-idx=\"586\"><g color=\"var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255))\" weight=\"bold\" data-f2c-idx=\"587\"><path d=\"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z\" data-f2c-idx=\"588\"></path></g></svg>"} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["item-3"]}>
              <div className={styles["div-19"]}>
                <h6 className={styles["h6-5"]}>{slots[10] ?? "Day 2 · Meet the team"}</h6>
              </div>
              <div className={styles["icon-2"]}>
                <div className={styles["div-20"]}>
                  <div className={styles["div-14"]}>
                    <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255)); color: var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255)); flex-shrink: 0;\" data-f2c-idx=\"595\"><g color=\"var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255))\" weight=\"bold\" data-f2c-idx=\"596\"><path d=\"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z\" data-f2c-idx=\"597\"></path></g></svg>"} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["item-3"]}>
              <div className={styles["div-21"]}>
                <h6 className={styles["h6-6"]}>{slots[11] ?? "Day 3 · Product showcase"}</h6>
              </div>
              <div className={styles["icon-2"]}>
                <div className={styles["div-20"]}>
                  <div className={styles["div-14"]}>
                    <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255)); color: var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255)); flex-shrink: 0;\" data-f2c-idx=\"604\"><g color=\"var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255))\" weight=\"bold\" data-f2c-idx=\"605\"><path d=\"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z\" data-f2c-idx=\"606\"></path></g></svg>"} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["item-3"]}>
              <div className={styles["text-2"]}>
                <div className={styles["div-22"]}>
                  <h6 className={styles["h6-7"]}>{slots[12] ?? "Day 4 · Customer story"}</h6>
                </div>
                <div className={styles["optional"]}>
                  <div className={styles["div-23"]}>
                    <h6 className={styles["h6-8"]}>{slots[13] ?? "AI-filled"}</h6>
                  </div>
                </div>
              </div>
              <div className={styles["icon-3"]} />
            </div>
            <div className={styles["item-3"]}>
              <div className={styles["text-3"]}>
                <div className={styles["div-24"]}>
                  <h6 className={styles["h6-9"]}>{slots[14] ?? "Day 5 · Offer carousel"}</h6>
                </div>
                <div className={styles["optional"]}>
                  <div className={styles["div-23"]}>
                    <h6 className={styles["h6-8"]}>{slots[15] ?? "AI-filled"}</h6>
                  </div>
                </div>
              </div>
              <div className={styles["icon-4"]}>
                <div className={styles["div-20"]}>
                  <div className={styles["div-14"]}>
                    <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255)); color: var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255)); flex-shrink: 0;\" data-f2c-idx=\"625\"><g color=\"var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255))\" weight=\"bold\" data-f2c-idx=\"626\"><path d=\"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z\" data-f2c-idx=\"627\"></path></g></svg>"} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["item-3"]}>
              <div className={styles["text-4"]}>
                <div className={styles["div-25"]}>
                  <h6 className={styles["h6-10"]}>{slots[16] ?? "Day 6 · Behind the scenes"}</h6>
                </div>
                <div className={styles["optional"]}>
                  <div className={styles["div-23"]}>
                    <h6 className={styles["h6-8"]}>{slots[17] ?? "AI-filled"}</h6>
                  </div>
                </div>
              </div>
              <div className={styles["icon-4"]}>
                <div className={styles["div-20"]}>
                  <div className={styles["div-14"]}>
                    <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255)); color: var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255)); flex-shrink: 0;\" data-f2c-idx=\"638\"><g color=\"var(--token-89c3e745-3800-4e50-9b21-a2997a5c7cae, rgb(255, 255, 255))\" weight=\"bold\" data-f2c-idx=\"639\"><path d=\"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z\" data-f2c-idx=\"640\"></path></g></svg>"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
