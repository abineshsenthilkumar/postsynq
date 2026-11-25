import styles from "./styles.module.css"
import States from "./States"
import { SvgGraphic } from "./RichText"

export default function Footer({ slots = [] }: { slots?: string[] }) {
  return (
      <footer className={styles["desktop"]}>
        <div className={styles["container"]}>
          <div className={styles["links"]}>
            <div className={styles["list-2"]}>
              <div className={styles["div-31"]}>
                <p className={styles["p-11"]}>{slots[0] ?? "Product"}</p>
              </div>
              <div className={styles["links-2"]}>
                <div className={styles["div-32"]}>
                  <a className={styles["normal"]} href="./">
                    <div className={styles["div-33"]}>
                      <p className={styles["p-12"]}>{slots[1] ?? "Home"}</p>
                    </div>
                  </a>
                </div>
                <div className={styles["div-32"]}>
                  <a className={styles["normal"]} href="https://www.postsynq.in/signup">
                    <div className={styles["div-34"]}>
                      <p className={styles["p-13"]}>{slots[2] ?? "Free trial"}</p>
                    </div>
                    <div className={styles["tag-new"]}>
                      <div className={styles["div-35"]}>
                        <h6 className={styles["h6-11"]}>{slots[3] ?? "100 spots"}</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles["div-32"]}>
                  <a className={styles["normal"]} href="./solutions">
                    <div className={styles["div-36"]}>
                      <p className={styles["p-14"]}>{slots[4] ?? "Solutions"}</p>
                    </div>
                  </a>
                </div>
                <div className={styles["div-32"]}>
                  <a className={styles["normal"]} href="./feature">
                    <div className={styles["div-37"]}>
                      <p className={styles["p-15"]}>{slots[5] ?? "Features"}</p>
                    </div>
                  </a>
                </div>
                <div className={styles["div-32"]}>
                  <a className={styles["normal"]} href="./pricing">
                    <div className={styles["div-38"]}>
                      <p className={styles["p-16"]}>{slots[6] ?? "Pricing"}</p>
                    </div>
                  </a>
                </div>
                <div className={styles["div-32"]}>
                  <a className={styles["normal"]} href="https://www.postsynq.in/dashboard">
                    <div className={styles["div-39"]}>
                      <p className={styles["p-17"]}>{slots[7] ?? "Dashboard"}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles["list-3"]}>
              <div className={styles["div-40"]}>
                <p className={styles["p-18"]}>{slots[8] ?? "company"}</p>
              </div>
              <div className={styles["links-3"]}>
                <div className={styles["div-41"]}>
                  <a className={styles["normal-2"]} href="./about">
                    <div className={styles["div-42"]}>
                      <p className={styles["p-19"]}>{slots[9] ?? "About"}</p>
                    </div>
                  </a>
                </div>
                <div className={styles["div-41"]}>
                  <a className={styles["normal-2"]} href="./">
                    <div className={styles["div-43"]}>
                      <p className={styles["p-20"]}>{slots[10] ?? "Careers"}</p>
                    </div>
                    <div className={styles["tag-new-2"]}>
                      <div className={styles["div-44"]}>
                        <h6 className={styles["h6-12"]}>{slots[11] ?? "We're hiring!"}</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles["div-41"]}>
                  <a className={styles["normal-2"]} href="./contact">
                    <div className={styles["div-45"]}>
                      <p className={styles["p-21"]}>{slots[12] ?? "Contact us"}</p>
                    </div>
                  </a>
                </div>
                <div className={styles["div-41"]}>
                  <a className={styles["normal-2"]} href="./privacy">
                    <div className={styles["div-46"]}>
                      <p className={styles["p-22"]}>{slots[13] ?? "Privacy"}</p>
                    </div>
                  </a>
                </div>
                <div className={styles["div-41"]}>
                  <a className={styles["normal-2"]} href="https://www.postsynq.in/login">
                    <div className={styles["div-42"]}>
                      <p className={styles["p-19"]}>{slots[14] ?? "Log in"}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles["list-4"]}>
              <div className={styles["div-47"]}>
                <p className={styles["p-23"]}>{slots[15] ?? "resources"}</p>
              </div>
              <div className={styles["links-4"]}>
                <div className={styles["div-48"]}>
                  <a className={styles["normal-3"]} href="./feature">
                    <div className={styles["div-49"]}>
                      <p className={styles["p-24"]}>{slots[16] ?? "Getting started"}</p>
                    </div>
                  </a>
                </div>
                <div className={styles["div-48"]}>
                  <a className={styles["normal-3"]} href="https://www.postsynq.in/legal/privacy">
                    <div className={styles["div-50"]}>
                      <p className={styles["p-25"]}>{slots[17] ?? "Privacy policy"}</p>
                    </div>
                  </a>
                </div>
                <div className={styles["div-48"]}>
                  <a className={styles["normal-3"]} href="https://www.postsynq.in/legal/terms">
                    <div className={styles["div-51"]}>
                      <p className={styles["p-26"]}>{slots[18] ?? "Terms of service"}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["container-2"]}>
          <div className={styles["join-us"]}>
            <div className={styles["logo-2"]}>
              <div className={styles["div-52"]}>
                <a className={styles["light-mode"]} href="./">
                  <div className={styles["div-53"]}>
                    <div className={styles["div-54"]}>
                      <img className={styles["img-2"]} src={slots[19] ?? "https://framerusercontent.com/images/Ii5jzXd6b9BEjgESaoWqBULhX4.png?width=357&height=81"} alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles["content-10"]}>
              <div className={styles["div-55"]}>
                <h6 className={styles["h6-13"]}>{slots[20] ?? "Join the first 100 businesses on PostSynq, today"}</h6>
              </div>
              <form className={styles["form"]}>
                <div className={styles["div-56"]}>
                  <div className={styles["input"]} />
                </div>
                <div className={styles["div-57"]}>
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
                </div>
                <div className={styles["input-2"]} />
                <div className={styles["input-2"]} />
                <div className={styles["input-2"]} />
                <div className={styles["input-2"]} />
                <div className={styles["input-2"]} />
                <div className={styles["input-2"]} />
                <div className={styles["input-2"]} />
                <div className={styles["input-2"]} />
                <div className={styles["input-2"]} />
                <div className={styles["input-2"]} />
                <div className={styles["input-2"]} />
              </form>
            </div>
          </div>
          <div className={styles["container-3"]}>
            <div className={styles["content-11"]}>
              <div className={styles["div-60"]}>
                <p className={styles["p-29"]}>{slots[21] ?? "© 2026 PostSynq by AtSpeed Innovations, Hyderabad"}</p>
              </div>
              <div className={styles["social"]}>
                <div className={styles["div-61"]}>
                  <a className={styles["linkedin"]} href="https://instagram.com">
                    <div className={styles["div-3"]}>
                      <div className={styles["div-4"]}>
                        <SvgGraphic className={styles["svg-5"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" viewBox=\"0 0 24 24\" color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); flex-shrink: 0;\" data-f2c-idx=\"1075\"><path d=\"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z\" data-f2c-idx=\"1076\"></path></svg>"} />
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles["div-61"]}>
                  <a className={styles["linkedin"]} href="https://linkedin.com">
                    <div className={styles["div-3"]}>
                      <div className={styles["div-4"]}>
                        <SvgGraphic className={styles["svg-5"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" viewBox=\"0 0 24 24\" color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); flex-shrink: 0;\" data-f2c-idx=\"1081\"><path d=\"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z\" data-f2c-idx=\"1082\"></path></svg>"} />
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles["div-61"]}>
                  <a className={styles["linkedin"]} href="https://www.postsynq.in">
                    <div className={styles["div-62"]}>
                      <div className={styles["div-4"]}>
                        <SvgGraphic className={styles["svg-5"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); color: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); flex-shrink: 0;\" data-f2c-idx=\"1087\"><g color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" weight=\"regular\" data-f2c-idx=\"1088\"><path d=\"M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z\" data-f2c-idx=\"1089\"></path></g></svg>"} />
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles["div-61"]}>
                  <a className={styles["linkedin"]} href="mailto:support@postsynq.in">
                    <div className={styles["div-62"]}>
                      <div className={styles["div-4"]}>
                        <SvgGraphic className={styles["svg-5"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); color: var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119)); flex-shrink: 0;\" data-f2c-idx=\"1094\"><g color=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" weight=\"regular\" data-f2c-idx=\"1095\"><path d=\"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z\" data-f2c-idx=\"1096\"></path></g></svg>"} />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
