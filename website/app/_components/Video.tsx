import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Video({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-4"]}>
        <div className={styles["div-77"]}>
          <img className={styles["img-3"]} src={slots[0] ?? "https://framerusercontent.com/images/ofVk6pjF8UfeZPteRzo4zBaah8U.png?scale-down-to=1024&width=1254&height=1254"} alt="" />
        </div>
        <div className={styles["play-button"]}>
          <div className={styles["icon-6"]}>
            <div className={styles["div-78"]}>
              <div className={styles["div-28"]}>
                <SvgGraphic className={styles["svg-6"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32)); color: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32)); flex-shrink: 0;\" data-f2c-idx=\"243\"><g color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32))\" weight=\"fill\" data-f2c-idx=\"244\"><path d=\"M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z\" data-f2c-idx=\"245\"></path></g></svg>"} />
              </div>
            </div>
            <div className={styles["div-78"]}>
              <div className={styles["div-28"]}>
                <SvgGraphic className={styles["svg-6"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32)); color: var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32)); flex-shrink: 0;\" data-f2c-idx=\"248\"><g color=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(29, 32, 32))\" weight=\"fill\" data-f2c-idx=\"249\"><path d=\"M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z\" data-f2c-idx=\"250\"></path></g></svg>"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["overlay"]} />
      </div>
  )
}
