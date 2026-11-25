import styles from "./styles.module.css"
import RevealWatcher from "./RevealWatcher"
import { SvgGraphic } from "./RichText"
import HeroTag from "./HeroTag"
import Phosphor from "./Phosphor"
import ButtonLarge from "./ButtonLarge"
import ButtonLarge2 from "./ButtonLarge2"
import ButtonLargeIcon from "./ButtonLargeIcon"
import ButtonSmall from "./ButtonSmall"
import UIDetailRoles from "./UIDetailRoles"
import ButtonLarge3 from "./ButtonLarge3"
import CardSimple from "./CardSimple"
import Footer from "./Footer"
import FooterLink from "./FooterLink"
import FooterLink2 from "./FooterLink2"
import Logo from "./Logo"
import ButtonForm from "./ButtonForm"
import IconButtonLinkedin from "./IconButtonLinkedin"
import Material from "./Material"
import IconButtonNormal from "./IconButtonNormal"
import NavigationBar from "./NavigationBar"
import MenuNavigationLink from "./MenuNavigationLink"
import MenuNavigationLink2 from "./MenuNavigationLink2"
import Framer from "./Framer"
import Text from "./Text"
import Video from "./Video"
import CardTeamMember from "./CardTeamMember"
import ButtonLarge4 from "./ButtonLarge4"
import Quote from "./Quote"

export default function Home({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-87"]}>
        <div className={styles["div-88"]}>
          <div className={styles["div-89"]}>
            <section className={styles["hero"]}>
              <div className={styles["container-4"]}>
                <div className={styles["div-14"]}>
                  <div className={styles["div-90"]}>
                    <HeroTag slots={["New","Free trial open for our first 100 users"]} />
                  </div>
                </div>
                <div className={styles["h1"]}>
                  <div className={styles["div-91"]}>
                    <div className={styles["div-14"]}>
                      <h1 className={styles["h1-2"]}>
                        <span className={styles["span"]}>{slots[0] ?? "You Run Your Business. \nWe Run Your"}</span>
                        <div className={styles["span-2"]}>
                          <span className={styles["span-3"]}>{slots[1] ?? "Socials"}</span>
                          <div className={styles["span-4"]} />
                        </div>
                        <span className={styles["span"]}>{slots[2] ?? "."}</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className={styles["div-92"]}>
                  <p className={styles["p-42"]}>{slots[3] ?? "Create once and post to every social platform in one go. Synq AI writes, designs and plans the rest."}</p>
                </div>
                <div className={styles["buttons"]}>
                  <div className={styles["div-14"]}>
                    <div className={styles["div-93"]}>
                      <ButtonLarge slots={["Log in","Log in"]} />
                    </div>
                  </div>
                  <div className={styles["div-14"]}>
                    <div className={styles["div-94"]}>
                      <ButtonLarge2 slots={["Start free trial","Start free trial"]} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["dots-pattern"]}>
                <div className={styles["div-95"]} />
              </div>
              <div className={styles["hero-ui"]}>
                <div className={styles["div-14"]}>
                  <div className={styles["postsynq-calendar"]}>
                    <div className={styles["div-96"]}>
                      <img className={styles["img-6"]} src={slots[4] ?? "https://framerusercontent.com/images/qX1MEpkblIe5McDfx0K3gMjSnyI.png?scale-down-to=2048&width=3100&height=1756"} alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["illustration"]}>
                    <div className={styles["div-97"]}>
                      <img className={styles["img-7"]} src={slots[5] ?? "https://framerusercontent.com/images/kriKp2ohUOo6lqW7gFpIqNiLZeQ.svg?scale-down-to=512&width=520&height=520"} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["container-5"]}>
                <div className={styles["div-14"]}>
                  <div className={styles["div-98"]}>
                    <p className={styles["p-43"]}>{slots[6] ?? "Publish everywhere your customers already are"}</p>
                  </div>
                </div>
                <div className={styles["logos"]}>
                  <div className={styles["row"]}>
                    <div className={styles["instagram-logo"]}>
                      <div className={styles["div-99"]}>
                        <img className={styles["img-8"]} src={slots[7] ?? "https://framerusercontent.com/images/SCmhNN0VN3B9Edc9k75MNzipNL4.svg?width=48&height=48"} alt="" />
                      </div>
                    </div>
                    <div className={styles["instagram-logo"]}>
                      <div className={styles["div-99"]}>
                        <img className={styles["img-8"]} src={slots[8] ?? "https://framerusercontent.com/images/auJvl5Gq5ir3p38RU9VWIEnYoYo.svg?width=48&height=48"} alt="" />
                      </div>
                    </div>
                    <div className={styles["instagram-logo"]}>
                      <div className={styles["div-99"]}>
                        <img className={styles["img-8"]} src={slots[9] ?? "https://framerusercontent.com/images/Ou9aCyy9MxN1iZCvwiw18hmrA.svg?width=48&height=48"} alt="" />
                      </div>
                    </div>
                    <div className={styles["instagram-logo"]}>
                      <div className={styles["div-99"]}>
                        <img className={styles["img-8"]} src={slots[10] ?? "https://framerusercontent.com/images/K4kpX0bZr3WAEDYWuh3lPNOXNIM.svg?width=48&height=48"} alt="" />
                      </div>
                    </div>
                    <div className={styles["instagram-logo"]}>
                      <div className={styles["div-99"]}>
                        <img className={styles["img-8"]} src={slots[11] ?? "https://framerusercontent.com/images/PE5LzuXyBVwciyvGArluBwTX8PI.svg?width=48&height=48"} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles["row-2"]}>
                    <div className={styles["instagram-logo"]}>
                      <div className={styles["div-99"]}>
                        <img className={styles["img-8"]} src={slots[12] ?? "https://framerusercontent.com/images/JFh7xWMkvn5lhluxEPj7uwq7lU.svg?width=48&height=48"} alt="" />
                      </div>
                    </div>
                    <div className={styles["instagram-logo"]}>
                      <div className={styles["div-99"]}>
                        <img className={styles["img-8"]} src={slots[13] ?? "https://framerusercontent.com/images/FHIkx3auZs2MJJRvjQXf45KvCc.svg?width=48&height=48"} alt="" />
                      </div>
                    </div>
                    <div className={styles["instagram-logo"]}>
                      <div className={styles["div-99"]}>
                        <img className={styles["img-8"]} src={slots[14] ?? "https://framerusercontent.com/images/Ry4nZ547PkKAVpbSDvz3AKKw90.svg?width=48&height=48"} alt="" />
                      </div>
                    </div>
                    <div className={styles["instagram-logo"]}>
                      <div className={styles["div-99"]}>
                        <img className={styles["img-8"]} src={slots[15] ?? "https://framerusercontent.com/images/zfYd9gg1MpL7kIJlTlrTBWQfFaU.svg?width=48&height=48"} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["features-small"]}>
              <div className={styles["container-6"]}>
                <div className={styles["title-2"]}>
                  <div className={styles["icon-8"]}>
                    <div className={styles["triangle"] + " " + styles["rv-1"]} data-reveal>
                      <div className={styles["triangle-2"]} />
                    </div>
                    <div className={styles["square"] + " " + styles["rv-2"]} data-reveal>
                      <div className={styles["square-2"]} />
                    </div>
                    <div className={styles["square"] + " " + styles["rv-3"]} data-reveal>
                      <div className={styles["circle"]} />
                    </div>
                  </div>
                  <div className={styles["h4-2"]}>
                    <div className={styles["div-100"]}>
                      <div className={styles["div-14"]}>
                        <h1 className={styles["h1-3"]}>
                          <span className={styles["span-5"]}>{slots[16] ?? "Everything you \nneed, all in"}</span>
                          <div className={styles["span-6"]}>
                            <span className={styles["span-7"]}>{slots[17] ?? "one place"}</span>
                            <div className={styles["span-8"]} />
                          </div>
                          <div className={styles["span-5"]} />
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-14"]}>
                    <div className={styles["div-101"]}>
                      <ButtonLargeIcon slots={["Start free trial","Start free trial"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["content-15"]}>
                  <div className={styles["feature"]}>
                    <div className={styles["image"]}>
                      <div className={styles["item-5"]}>
                        <div className={styles["div-102"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-103"]}>
                            <h6 className={styles["h6-16"]}>{slots[18] ?? "Instagram"}</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles["item-5"]}>
                        <div className={styles["div-104"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-105"]}>
                            <h6 className={styles["h6-17"]}>{slots[19] ?? "Facebook"}</h6>
                          </div>
                        </div>
                        <div className={styles["div-106"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-107"]}>
                            <h6 className={styles["h6-18"]}>{slots[20] ?? "9:00 AM"}</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles["item-5"]}>
                        <div className={styles["div-108"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-109"]}>
                            <h6 className={styles["h6-19"]}>{slots[21] ?? "LinkedIn"}</h6>
                          </div>
                        </div>
                        <div className={styles["div-110"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-111"]}>
                            <h6 className={styles["h6-20"]}>{slots[22] ?? "10:30 AM"}</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles["item-5"]}>
                        <div className={styles["div-108"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-112"]}>
                            <h6 className={styles["h6-21"]}>{slots[23] ?? "X (Twitter)"}</h6>
                          </div>
                        </div>
                        <div className={styles["div-110"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-111"]}>
                            <h6 className={styles["h6-20"]}>{slots[24] ?? "12:00 PM"}</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles["item-5"]}>
                        <div className={styles["div-113"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-114"]}>
                            <h6 className={styles["h6-22"]}>{slots[25] ?? "Pinterest"}</h6>
                          </div>
                        </div>
                        <div className={styles["div-115"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-116"]}>
                            <h6 className={styles["h6-23"]}>{slots[26] ?? "launch_reel.mp4"}</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles["item-5"]}>
                        <div className={styles["div-104"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-117"]}>
                            <h6 className={styles["h6-24"]}>{slots[27] ?? "Instagram Story"}</h6>
                          </div>
                        </div>
                        <div className={styles["div-106"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-107"]}>
                            <h6 className={styles["h6-18"]}>{slots[28] ?? "6:00 PM"}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["description"]}>
                      <div className={styles["content-16"]}>
                        <div className={styles["title-3"]}>
                          <div className={styles["div-118"]}>
                            <h6 className={styles["h6-25"]}>{slots[29] ?? "Post everywhere in one go"}</h6>
                          </div>
                        </div>
                        <div className={styles["div-119"]}>
                          <p className={styles["p-44"]}>{slots[30] ?? "Create once, customise it for each platform, and publish to all of them together."}</p>
                        </div>
                      </div>
                      <div className={styles["div-14"]}>
                        <div className={styles["div-120"]}>
                          <ButtonSmall slots={["Learn more","Learn more"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["feature-2"]}>
                    <div className={styles["image-2"]}>
                      <div className={styles["ui"]}>
                        <div className={styles["header"]}>
                          <div className={styles["avatar-4"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                          </div>
                          <div className={styles["text-7"]}>
                            <div className={styles["top"]}>
                              <div className={styles["div-121"]}>
                                <h6 className={styles["h6-26"]}>{slots[31] ?? "Content calendar"}</h6>
                              </div>
                              <div className={styles["chevron"]}>
                                <div className={styles["div-122"]}>
                                  <Phosphor slots={[]} />
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-123"]}>
                              <h6 className={styles["h6-27"]}>{slots[32] ?? "30-day launch plan"}</h6>
                            </div>
                          </div>
                        </div>
                        <div className={styles["divider"]} />
                        <div className={styles["list-5"]}>
                          <div className={styles["entry"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                            <div className={styles["content-17"]}>
                              <div className={styles["icon-9"]}>
                                <div className={styles["div-124"]}>
                                  <Phosphor slots={[]} />
                                </div>
                              </div>
                              <div className={styles["text-8"]}>
                                <div className={styles["div-125"]}>
                                  <h6 className={styles["h6-28"]}>{slots[33] ?? "Brand intro reel"}</h6>
                                </div>
                                <div className={styles["div-126"]}>
                                  <h6 className={styles["h6-29"]}>{slots[34] ?? "Day 1"}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["entry"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                            <div className={styles["content-18"]}>
                              <div className={styles["icon-10"]}>
                                <div className={styles["div-124"]}>
                                  <Phosphor slots={[]} />
                                </div>
                              </div>
                              <div className={styles["text-9"]}>
                                <div className={styles["text-10"]}>
                                  <div className={styles["div-127"]}>
                                    <h6 className={styles["h6-30"]}>{slots[35] ?? "Offer carousel"}</h6>
                                  </div>
                                  <div className={styles["div-128"]}>
                                    <h6 className={styles["h6-31"]}>{slots[36] ?? "Day 3"}</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["entry"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                            <div className={styles["content-18"]}>
                              <div className={styles["icon-9"]}>
                                <div className={styles["div-124"]}>
                                  <Phosphor slots={[]} />
                                </div>
                              </div>
                              <div className={styles["text-9"]}>
                                <div className={styles["text-11"]}>
                                  <div className={styles["div-129"]}>
                                    <h6 className={styles["h6-32"]}>{slots[37] ?? "Customer story"}</h6>
                                  </div>
                                  <div className={styles["div-130"]}>
                                    <h6 className={styles["h6-33"]}>{slots[38] ?? "Day 5"}</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["description-2"]}>
                      <div className={styles["content-19"]}>
                        <div className={styles["title-4"]}>
                          <div className={styles["div-131"]}>
                            <h6 className={styles["h6-34"]}>{slots[39] ?? "Calendar, done for you"}</h6>
                          </div>
                          <div className={styles["tagnew"]}>
                            <div className={styles["div-132"]}>
                              <h6 className={styles["h6-35"]}>{slots[40] ?? "New!"}</h6>
                            </div>
                          </div>
                        </div>
                        <div className={styles["div-133"]}>
                          <p className={styles["p-45"]}>{slots[41] ?? "We plan a full calendar of posts for you. Approve them and they go live."}</p>
                        </div>
                      </div>
                      <div className={styles["div-14"]}>
                        <div className={styles["div-120"]}>
                          <ButtonSmall slots={["Learn more","Learn more"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["feature-3"]}>
                    <div className={styles["image-3"]}>
                      <div className={styles["ui-2"]}>
                        <div className={styles["div-134"]}>
                          <p className={styles["p-46"]}>{slots[42] ?? "Synq AI is creating"}</p>
                        </div>
                        <div className={styles["div-135"]}>
                          <div className={styles["progress"]} />
                        </div>
                      </div>
                      <div className={styles["ui-3"]}>
                        <div className={styles["item-6"]}>
                          <div className={styles["div-136"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                            <div className={styles["avatar-5"]}>
                              <div className={styles["div-137"]}>
                                <h6 className={styles["h6-36"]}>{slots[43] ?? "D"}</h6>
                              </div>
                            </div>
                            <div className={styles["div-117"]}>
                              <h6 className={styles["h6-24"]}>{slots[44] ?? "Diwali offer post"}</h6>
                            </div>
                          </div>
                          <div className={styles["tag-2"]}>
                            <div className={styles["div-138"]}>
                              <h6 className={styles["h6-37"]}>{slots[45] ?? "Ready"}</h6>
                            </div>
                          </div>
                        </div>
                        <div className={styles["item-6"]}>
                          <div className={styles["div-139"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                            <div className={styles["avatar-5"]}>
                              <div className={styles["div-140"]}>
                                <h6 className={styles["h6-38"]}>{slots[46] ?? "W"}</h6>
                              </div>
                            </div>
                            <div className={styles["div-141"]}>
                              <h6 className={styles["h6-39"]}>{slots[47] ?? "Weekend reel"}</h6>
                            </div>
                          </div>
                          <div className={styles["tag-3"]}>
                            <div className={styles["div-142"]}>
                              <h6 className={styles["h6-40"]}>{slots[48] ?? "Drafting"}</h6>
                            </div>
                          </div>
                        </div>
                        <div className={styles["item-6"]}>
                          <div className={styles["div-143"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                            <div className={styles["avatar-5"]}>
                              <div className={styles["div-144"]}>
                                <h6 className={styles["h6-41"]}>{slots[49] ?? "M"}</h6>
                              </div>
                            </div>
                            <div className={styles["div-145"]}>
                              <h6 className={styles["h6-42"]}>{slots[50] ?? "Menu carousel"}</h6>
                            </div>
                          </div>
                          <div className={styles["tag-4"]}>
                            <div className={styles["div-138"]}>
                              <h6 className={styles["h6-43"]}>{slots[51] ?? "Ready"}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["description-3"]}>
                      <div className={styles["content-20"]}>
                        <div className={styles["title-5"]}>
                          <div className={styles["div-146"]}>
                            <h6 className={styles["h6-44"]}>{slots[52] ?? "Synq AI creates your posts"}</h6>
                          </div>
                        </div>
                        <div className={styles["div-133"]}>
                          <div className={styles["p-45"]}>
                            <span className={styles["span-9"]}>{slots[53] ?? "Tell Synq AI what you need, and it"}</span>
                            <br className={styles["span-9"]} />
                            <span className={styles["span-9"]}>{slots[54] ?? "writes and designs the post for you."}</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-14"]}>
                        <div className={styles["div-120"]}>
                          <ButtonSmall slots={["Learn more","Learn more"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["features-big"]}>
              <div className={styles["container-7"]}>
                <div className={styles["image-4"]}>
                  <div className={styles["div-14"]}>
                    <div className={styles["ui-4"]}>
                      <div className={styles["div-147"]}>
                        <img className={styles["img-9"]} src={slots[55] ?? "https://framerusercontent.com/images/jR5jOOvMWvxNrvWcmI53UwZQGI.png?scale-down-to=1024&width=1120&height=1152"} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["text-12"]}>
                  <div className={styles["title-6"]}>
                    <div className={styles["div-148"]}>
                      <p className={styles["p-47"]}>{slots[56] ?? "automations"}</p>
                    </div>
                    <div className={styles["div-149"]}>
                      <h4 className={styles["h4-3"]}>{slots[57] ?? "Your social media, on autopilot"}</h4>
                    </div>
                    <div className={styles["ilustration"]}>
                      <div className={styles["scribble-final-version-105"]}>
                        <div className={styles["div-150"]}>
                          <SvgGraphic className={styles["svg-7"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"431\"><use href=\"#svg12158451067\" data-f2c-idx=\"432\"></use></svg>"} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["features"]}>
                    <div className={styles["row-3"]}>
                      <div className={styles["item-7"]}>
                        <div className={styles["icon-11"]}>
                          <div className={styles["sketch-caption-icon"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-10"]} src={slots[58] ?? "https://framerusercontent.com/images/qN0kejuGWGWmJp7FGvhUlltLAs.svg?width=160&height=160"} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={styles["content-21"]}>
                          <div className={styles["div-152"]}>
                            <p className={styles["p-48"]}>{slots[59] ?? "Vectorize & customise"}</p>
                          </div>
                          <div className={styles["div-153"]}>
                            <p className={styles["p-49"]}>{slots[60] ?? "Turn any post into an editable vector, then change colours, text and layout."}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["item-7"]}>
                        <div className={styles["icon-11"]}>
                          <div className={styles["sketch-caption-icon"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-10"]} src={slots[61] ?? "https://framerusercontent.com/images/5zOexcA3KxzKv78ccLflSZEVQQk.svg?width=160&height=160"} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={styles["content-21"]}>
                          <div className={styles["div-152"]}>
                            <p className={styles["p-48"]}>{slots[62] ?? "Made from your references"}</p>
                          </div>
                          <div className={styles["div-153"]}>
                            <p className={styles["p-49"]}>{slots[63] ?? "Share your own photos and videos and get posts built around them."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["row-4"]}>
                      <div className={styles["item-7"]}>
                        <div className={styles["icon-11"]}>
                          <div className={styles["sketch-caption-icon"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-10"]} src={slots[64] ?? "https://framerusercontent.com/images/NzWL3wFT8wDUlS21ZSmPIiD2x8.svg?width=160&height=160"} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={styles["content-21"]}>
                          <div className={styles["div-152"]}>
                            <p className={styles["p-48"]}>{slots[65] ?? "Ready-made templates"}</p>
                          </div>
                          <div className={styles["div-153"]}>
                            <p className={styles["p-49"]}>{slots[66] ?? "Carousels and posts already designed. Just add your details."}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["item-7"]}>
                        <div className={styles["icon-11"]}>
                          <div className={styles["sketch-caption-icon"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-10"]} src={slots[67] ?? "https://framerusercontent.com/images/vZZmoyPQEUAZM76lZSA0LwH8.svg?width=160&height=160"} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={styles["content-21"]}>
                          <div className={styles["div-152"]}>
                            <p className={styles["p-48"]}>{slots[68] ?? "You approve, we post"}</p>
                          </div>
                          <div className={styles["div-153"]}>
                            <p className={styles["p-49"]}>{slots[69] ?? "Nothing goes live until you say yes. Then it posts everywhere."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["container-8"]}>
                <div className={styles["text-13"]}>
                  <div className={styles["title-7"]}>
                    <div className={styles["div-154"]}>
                      <p className={styles["p-50"]}>{slots[70] ?? "built for small businesses"}</p>
                    </div>
                    <div className={styles["div-155"]}>
                      <h4 className={styles["h4-4"]}>
                        {"Made for your"}
                        <br className={styles["br"]} />
                        {"first year"}
                      </h4>
                    </div>
                  </div>
                  <div className={styles["features-2"]}>
                    <div className={styles["row-5"]}>
                      <div className={styles["item-8"]}>
                        <div className={styles["icon-11"]}>
                          <div className={styles["sketch-caption-icon"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-10"]} src={slots[71] ?? "https://framerusercontent.com/images/KIknlBjxPbPt9jLVufTJd4b7Bw.svg?width=160&height=160"} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={styles["content-22"]}>
                          <div className={styles["div-156"]}>
                            <p className={styles["p-51"]}>{slots[72] ?? "Business-stage plans"}</p>
                          </div>
                          <div className={styles["div-157"]}>
                            <p className={styles["p-52"]}>{slots[73] ?? "Pick a plan made for aspirants, early-stage or growing brands."}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["item-9"]}>
                        <div className={styles["icon-11"]}>
                          <div className={styles["sketch-caption-icon"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-10"]} src={slots[74] ?? "https://framerusercontent.com/images/qN0kejuGWGWmJp7FGvhUlltLAs.svg?width=160&height=160"} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={styles["content-23"]}>
                          <div className={styles["div-158"]}>
                            <p className={styles["p-53"]}>{slots[75] ?? "Your tone, your brand"}</p>
                          </div>
                          <div className={styles["div-159"]}>
                            <p className={styles["p-54"]}>{slots[76] ?? "Choose a tone once and every caption sounds like you."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["row-6"]}>
                      <div className={styles["item-8"]}>
                        <div className={styles["icon-11"]}>
                          <div className={styles["sketch-caption-icon"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-10"]} src={slots[77] ?? "https://framerusercontent.com/images/X0jj1Wtt4dvBjZYHJUEhffgHU.svg?width=160&height=160"} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={styles["content-22"]}>
                          <div className={styles["div-156"]}>
                            <p className={styles["p-51"]}>{slots[78] ?? "Synq AI agent"}</p>
                          </div>
                          <div className={styles["div-157"]}>
                            <p className={styles["p-52"]}>{slots[79] ?? "Tell it what you need. It writes, designs and schedules."}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["item-9"]}>
                        <div className={styles["icon-11"]}>
                          <div className={styles["sketch-caption-icon"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-10"]} src={slots[80] ?? "https://framerusercontent.com/images/mvIIKzN1gPrhMQJHJXztJ5WLc.svg?width=160&height=160"} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={styles["content-23"]}>
                          <div className={styles["div-158"]}>
                            <p className={styles["p-53"]}>{slots[81] ?? "Clear insights"}</p>
                          </div>
                          <div className={styles["div-159"]}>
                            <p className={styles["p-54"]}>{slots[82] ?? "Know what works and post more of it."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["image-5"]}>
                  <div className={styles["div-14"]}>
                    <div className={styles["div-160"]}>
                      <UIDetailRoles slots={["https://framerusercontent.com/images/RtcOYHwWHwohGIWnbcem3bpcYs.png?width=512&height=512","7-day plan","7","https://framerusercontent.com/images/RtcOYHwWHwohGIWnbcem3bpcYs.png?width=512&height=512","15-day plan","15","https://framerusercontent.com/images/RtcOYHwWHwohGIWnbcem3bpcYs.png?width=512&height=512","30-day plan","30","Day 1 · Brand intro reel","Day 2 · Meet the team","Day 3 · Product showcase","Day 4 · Customer story","AI-filled","Day 5 · Offer carousel","AI-filled","Day 6 · Behind the scenes","AI-filled"]} />
                    </div>
                  </div>
                  <div className={styles["div-14"]}>
                    <div className={styles["bgpattern"]}>
                      <div className={styles["div-161"]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["integrations"]}>
              <div className={styles["h3"]}>
                <div className={styles["div-162"]}>
                  <div className={styles["div-14"]}>
                    <h1 className={styles["h1-4"]}>
                      <span className={styles["span-10"]}>{slots[83] ?? "Less busywork,\nmore real work"}</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles["content-24"]}>
                <div className={styles["div-163"]}>
                  <p className={styles["p-55"]}>{slots[84] ?? "Connect your accounts once, then post to all of them in one go."}</p>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["div-164"]}>
                    <ButtonLarge3 slots={["See how it works    →","See how it works    →"]} />
                  </div>
                </div>
              </div>
              <div className={styles["dots-pattern-2"]}>
                <div className={styles["div-165"]} />
              </div>
            </section>
            <section className={styles["features-detail"]}>
              <div className={styles["title-8"]}>
                <div className={styles["illustration-2"]}>
                  <div className={styles["div-166"]}>
                    <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"667\"><use href=\"#svg10079772872\" data-f2c-idx=\"668\"></use></svg>"} />
                  </div>
                </div>
                <div className={styles["h3-2"]}>
                  <div className={styles["div-167"]}>
                    <div className={styles["div-14"]}>
                      <h1 className={styles["h1-5"]}>
                        <span className={styles["span-10"]}>{slots[85] ?? "Make social\nmedia simpler"}</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className={styles["div-168"]}>
                  <p className={styles["p-56"]}>{slots[86] ?? "Share a photo, a video or an idea. Synq AI turns it into ready-to-post content."}</p>
                </div>
              </div>
              <div className={styles["graphic"]}>
                <div className={styles["container-9"]}>
                  <div className={styles["photo"]}>
                    <div className={styles["div-169"]}>
                      <img className={styles["img-11"]} src={slots[87] ?? "https://framerusercontent.com/images/4XOkpuIV18r6RKvg0HGQ26k7AKo.png?scale-down-to=1024&width=680&height=1100"} alt="" />
                    </div>
                    <div className={styles["ui-5"]}>
                      <div className={styles["trigger"]}>
                        <div className={styles["text-container"]}>
                          <div className={styles["text-14"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                            <div className={styles["div-170"]}>
                              <h6 className={styles["h6-45"]}>{slots[88] ?? "Reference photo uploaded"}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["connector"]} />
                      <div className={styles["connector-2"]} />
                      <div className={styles["item-10"]}>
                        <div className={styles["action"]}>
                          <div className={styles["contenttop"]}>
                            <div className={styles["text-15"]}>
                              <div className={styles["icon-12"]}>
                                <div className={styles["div-13"]}>
                                  <Phosphor slots={[]} />
                                </div>
                              </div>
                              <div className={styles["div-171"]}>
                                <h6 className={styles["h6-46"]}>{slots[89] ?? "Caption writer"}</h6>
                              </div>
                            </div>
                            <div className={styles["tag-5"]}>
                              <div className={styles["div-16"]}>
                                <h6 className={styles["h6-47"]}>{slots[90] ?? "AI"}</h6>
                              </div>
                            </div>
                          </div>
                          <div className={styles["divider-2"]} />
                          <div className={styles["div-172"]}>
                            <h6 className={styles["h6-48"]}>{slots[91] ?? "Adapt for {Channel}"}</h6>
                          </div>
                        </div>
                        <div className={styles["action-2"]}>
                          <div className={styles["text-16"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                            <div className={styles["div-173"]}>
                              <h6 className={styles["h6-49"]}>{slots[92] ?? "Done! Instagram caption, 12 hashtags and a LinkedIn version"}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["trigger-2"]}>
                        <div className={styles["action"]}>
                          <div className={styles["contenttop"]}>
                            <div className={styles["text-17"]}>
                              <div className={styles["icon-12"]}>
                                <div className={styles["div-13"]}>
                                  <Phosphor slots={[]} />
                                </div>
                              </div>
                              <div className={styles["div-174"]}>
                                <h6 className={styles["h6-50"]}>{slots[93] ?? "Best time to post"}</h6>
                              </div>
                            </div>
                            <div className={styles["tag-5"]}>
                              <div className={styles["div-16"]}>
                                <h6 className={styles["h6-47"]}>{slots[94] ?? "AI"}</h6>
                              </div>
                            </div>
                          </div>
                          <div className={styles["divider-2"]} />
                          <div className={styles["div-175"]}>
                            <h6 className={styles["h6-51"]}>{slots[95] ?? "Check audience activity"}</h6>
                          </div>
                        </div>
                        <div className={styles["action-2"]}>
                          <div className={styles["text-16"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                            <div className={styles["div-173"]}>
                              <h6 className={styles["h6-49"]}>{slots[96] ?? "Your audience is most active at 7 PM"}</h6>
                            </div>
                          </div>
                        </div>
                        <div className={styles["action-3"]}>
                          <div className={styles["text-18"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                            <div className={styles["div-176"]}>
                              <h6 className={styles["h6-52"]}>
                                <span className={styles["span-11"]}>{slots[97] ?? "Scheduled for Friday, 7 PM"}</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["ui-6"]}>
                      <div className={styles["item-11"]}>
                        <div className={styles["div-14"]}>
                          <div className={styles["avatar-6"]}>
                            <div className={styles["div-177"]}>
                              <img className={styles["img-12"]} src={slots[98] ?? "https://framerusercontent.com/images/6a5ccVVpbg08rokuwH4RMQGllXQ.jpg?scale-down-to=1024&width=1792&height=2368"} alt="" />
                            </div>
                            <div className={styles["icon-13"]}>
                              <div className={styles["div-13"]}>
                                <Phosphor slots={[]} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["text-19"]}>
                          <div className={styles["div-116"]}>
                            <h6 className={styles["h6-53"]}>{slots[99] ?? "Brew Lane Café"}</h6>
                          </div>
                          <div className={styles["div-117"]}>
                            <h6 className={styles["h6-54"]}>{slots[100] ?? "Instagram · Café"}</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles["item-11"]}>
                        <div className={styles["div-14"]}>
                          <div className={styles["avatar-6"]}>
                            <div className={styles["div-177"]}>
                              <img className={styles["img-13"]} src={slots[101] ?? "https://framerusercontent.com/images/7MaFUP5Twbun1TlfQHktaLu9fv4.jpg?scale-down-to=1024&width=1856&height=2304"} alt="" />
                            </div>
                            <div className={styles["icon-13"]}>
                              <div className={styles["div-13"]}>
                                <Phosphor slots={[]} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["text-19"]}>
                          <div className={styles["div-178"]}>
                            <h6 className={styles["h6-55"]}>{slots[102] ?? "Studio Nine Salon"}</h6>
                          </div>
                          <div className={styles["div-179"]}>
                            <h6 className={styles["h6-56"]}>{slots[103] ?? "Facebook · Salon"}</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles["item-11"]}>
                        <div className={styles["div-14"]}>
                          <div className={styles["avatar-7"]}>
                            <div className={styles["div-177"]}>
                              <img className={styles["img-13"]} src={slots[104] ?? "https://framerusercontent.com/images/ChBu5Cg8nGhA60M1YIQbHEXvBg.jpg?scale-down-to=1024&width=1856&height=2304"} alt="" />
                            </div>
                            <div className={styles["icon-13"]}>
                              <div className={styles["div-13"]}>
                                <Phosphor slots={[]} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["div-180"]}>
                          <div className={styles["div-181"]}>
                            <div className={styles["div-182"]}>
                              <h6 className={styles["h6-57"]}>{slots[105] ?? "Kavya Boutique"}</h6>
                            </div>
                            <div className={styles["div-174"]}>
                              <h6 className={styles["h6-58"]}>{slots[106] ?? "Instagram · Retail"}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["div-14"]}>
                <div className={styles["div-101"]}>
                  <ButtonLargeIcon slots={["Start free trial","Start free trial"]} />
                </div>
              </div>
              <div className={styles["dots-pattern-3"]}>
                <div className={styles["div-183"]} />
              </div>
            </section>
            <section className={styles["links-6"]}>
              <div className={styles["title-9"]}>
                <div className={styles["h3-2"]}>
                  <div className={styles["div-167"]}>
                    <div className={styles["div-14"]}>
                      <h1 className={styles["h1-5"]}>
                        <span className={styles["span-10"]}>{slots[107] ?? "Free for our\nfirst 100 users."}</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className={styles["div-163"]}>
                  <p className={styles["p-55"]}>{slots[108] ?? "Early access to every PostSynq feature. Choose where to start."}</p>
                </div>
              </div>
              <div className={styles["container-10"]}>
                <div className={styles["div-14"]}>
                  <div className={styles["div-184"]}>
                    <CardSimple slots={["Free trial","Claim one of 100 early-access spots and start posting today."]} />
                  </div>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["div-185"]}>
                    <CardSimple slots={["Log in","Already signed up? Open your PostSynq dashboard."]} />
                  </div>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["div-185"]}>
                    <CardSimple slots={["Pricing","Starter plan at ₹5,499/month once your free trial ends."]} />
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["features-3"]}>
              <div className={styles["title-10"]}>
                <div className={styles["div-186"]}>
                  <h3 className={styles["h3-3"]}>{slots[109] ?? "Get started in three simple steps"}</h3>
                </div>
              </div>
              <div className={styles["container-11"]}>
                <div className={styles["item-12"]}>
                  <div className={styles["div-14"]}>
                    <div className={styles["image-6"]}>
                      <div className={styles["div-187"]}>
                        <img className={styles["img-14"]} src={slots[110] ?? "https://framerusercontent.com/images/kblC8smGGuzOqxkz8phN7xuJAc.png?scale-down-to=512&width=760&height=760"} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles["text-20"]}>
                    <div className={styles["div-188"]}>
                      <h5 className={styles["h5"]}>{slots[111] ?? "1. Sign up & log in"}</h5>
                    </div>
                    <div className={styles["div-189"]}>
                      <p className={styles["p-57"]}>{slots[112] ?? "Create your account at postsynq.in, then log in to your PostSynq dashboard."}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["item-13"]}>
                  <div className={styles["div-14"]}>
                    <div className={styles["image-7"]}>
                      <div className={styles["div-190"]}>
                        <img className={styles["img-15"]} src={slots[113] ?? "https://framerusercontent.com/images/ZP3Rkg0wi8jVOK7SfEStCmNKICs.png?scale-down-to=512&width=760&height=760"} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles["text-21"]}>
                    <div className={styles["div-191"]}>
                      <h5 className={styles["h5-2"]}>{slots[114] ?? "2. Connect your channels"}</h5>
                    </div>
                    <div className={styles["div-192"]}>
                      <p className={styles["p-58"]}>{slots[115] ?? "Link Instagram, Facebook, LinkedIn, X and Pinterest in a few clicks."}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["item-13"]}>
                  <div className={styles["div-14"]}>
                    <div className={styles["image-7"]}>
                      <div className={styles["div-190"]}>
                        <img className={styles["img-15"]} src={slots[116] ?? "https://framerusercontent.com/images/jZ1QJIePIXmse0Tw0yIVRIHA10.png?scale-down-to=512&width=760&height=760"} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles["text-21"]}>
                    <div className={styles["div-191"]}>
                      <h5 className={styles["h5-2"]}>{slots[117] ?? "3. Approve and publish"}</h5>
                    </div>
                    <div className={styles["div-193"]}>
                      <p className={styles["p-59"]}>{slots[118] ?? "Synq AI prepares your posts and calendar. Approve them and they go out everywhere."}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["banner"]}>
              <div className={styles["container-12"]}>
                <div className={styles["text-22"]}>
                  <div className={styles["subtitle"]}>
                    <div className={styles["icon-14"]}>
                      <div className={styles["div-194"]}>
                        <img className={styles["img-16"]} src={slots[119] ?? "https://framerusercontent.com/images/RtcOYHwWHwohGIWnbcem3bpcYs.png?width=512&height=512"} alt="" />
                      </div>
                    </div>
                    <div className={styles["div-195"]}>
                      <p className={styles["p-60"]}>{slots[120] ?? "Automate with PostSynq"}</p>
                    </div>
                  </div>
                  <div className={styles["div-196"]}>
                    <h3 className={styles["h3-4"]}>{slots[121] ?? "Be one of our first 100."}</h3>
                  </div>
                  <div className={styles["benefits"]}>
                    <div className={styles["benefit"]}>
                      <div className={styles["div-197"]}>
                        <Phosphor slots={[]} />
                      </div>
                      <div className={styles["div-198"]}>
                        <p className={styles["p-61"]}>{slots[122] ?? "Free trial"}</p>
                      </div>
                    </div>
                    <div className={styles["benefit-2"]}>
                      <div className={styles["div-197"]}>
                        <Phosphor slots={[]} />
                      </div>
                      <div className={styles["div-199"]}>
                        <p className={styles["p-62"]}>{slots[123] ?? "Only 100 spots"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["div-200"]}>
                    <ButtonLargeIcon slots={["Start free trial","Start free trial"]} />
                  </div>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["dots-pattern-4"]}>
                    <div className={styles["div-201"]} />
                  </div>
                </div>
              </div>
            </section>
            <div className={styles["footer"]}>
              <div className={styles["container-13"]}>
                <div className={styles["div-14"]}>
                  <div className={styles["div-202"]}>
                    <Footer slots={["Product","Home","Free trial","100 spots","Solutions","Features","Pricing","Dashboard","company","About","Careers","We're hiring!","Contact us","Privacy","Log in","resources","Getting started","Privacy policy","Terms of service","https://framerusercontent.com/images/Ii5jzXd6b9BEjgESaoWqBULhX4.png?width=357&height=81","Join the first 100 businesses on PostSynq, today","Join","© 2026 PostSynq by AtSpeed Innovations, Hyderabad"]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-203"]} />
          <div className={styles["div-204"]} />
          <div className={styles["div-205"]}>
            <div className={styles["div-14"]}>
              <NavigationBar slots={["https://framerusercontent.com/images/Ii5jzXd6b9BEjgESaoWqBULhX4.png?width=357&height=81","About","Features","Pricing","Contact","Log in","Log in","Start free trial","Start free trial"]} />
            </div>
          </div>
        </div>
        <div className={styles["div-206"]} />
      </div>
      <div className={styles["div-207"]}>
        <a className={styles["light"]} href="https://www.framer.com">
          <div className={styles["backdrop"]} />
          <div className={styles["content-25"]}>
            <div className={styles["div-208"]}>
              <Framer slots={[]} />
            </div>
            <p className={styles["p-63"]}>{slots[0] ?? "Create a free website with Framer, the website builder loved by startups, designers and agencies."}</p>
            <Text slots={[]} />
          </div>
          <div className={styles["bottom"]} />
          <div className={styles["border"]} />
        </a>
      </div>
      <div className={styles["div-209"]}>
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 64 64\" id=\"svg12158451067\" data-f2c-idx=\"1176\"><g transform=\"translate(9.186 3.793)\" data-f2c-idx=\"1177\"><path d=\"M 34.804 2.805 C 36.011 2.332 37.269 2.003 38.553 1.827 L 39.315 1.729 C 39.592 1.706 39.871 1.706 40.149 1.729 L 40.733 1.853 C 40.958 1.919 41.178 2.002 41.39 2.103 C 41.837 2.345 42.216 2.695 42.493 3.121 C 42.716 3.476 42.884 3.864 42.992 4.27 C 43.164 4.915 43.28 5.574 43.34 6.239 L 43.576 8.275 C 43.65 8.708 43.683 9.148 43.675 9.588 C 43.607 10.036 43.495 10.475 43.34 10.901 C 43.228 11.17 42.985 11.124 42.644 10.901 C 42.194 10.642 41.807 10.288 41.508 9.863 C 41.137 8.353 40.885 6.817 40.753 5.267 C 40.622 4.729 40.602 4.657 40.405 4.526 C 40.346 4.526 40.241 4.486 40.096 4.526 C 39.945 4.515 39.794 4.515 39.643 4.526 C 38.626 4.565 37.621 4.769 36.669 5.13 C 36.035 5.327 35.413 5.559 34.804 5.826 C 33.857 6.277 32.95 6.808 32.093 7.414 C 31.436 7.92 30.885 8.504 30.294 9.056 C 30.162 9.174 30.051 9.305 29.913 9.424 C 29.751 9.619 29.51 9.732 29.256 9.732 C 29.003 9.732 28.762 9.619 28.6 9.424 C 28.482 9.332 28.357 9.253 28.245 9.154 C 27.868 8.816 27.813 8.244 28.121 7.841 C 28.532 7.17 29.011 6.542 29.552 5.97 C 30.146 5.393 30.807 4.891 31.522 4.473 C 32.569 3.819 33.666 3.251 34.804 2.773 Z M 29.631 30.256 C 27.805 32.376 25.708 34.246 23.393 35.817 C 22.567 36.421 21.706 36.973 20.813 37.472 C 17.564 38.964 14.034 39.743 10.459 39.757 C 9.684 39.757 8.916 39.757 8.148 39.704 C 7.76 39.704 7.38 39.652 6.999 39.626 C 6.618 39.599 6.244 39.501 5.87 39.442 C 3.963 39.117 2.108 38.539 0.354 37.722 C -0.191 37.472 -0.072 37.374 0.473 37.288 C 1.331 37.156 2.198 37.085 3.066 37.078 C 4.011 37.124 4.957 37.078 5.876 37.078 L 7.229 36.973 L 8.542 36.973 C 10.321 36.961 12.096 36.794 13.847 36.474 C 14.925 36.272 15.969 35.923 16.952 35.437 C 17.458 35.213 17.924 34.898 18.41 34.642 C 18.896 34.386 19.355 34.078 19.828 33.795 C 21.926 32.518 23.83 30.946 25.481 29.127 L 26.256 28.267 L 26.978 27.367 C 27.477 26.777 27.904 26.127 28.35 25.49 C 29.694 23.535 30.846 21.455 31.791 19.279 C 32.533 17.591 32.835 15.759 33.452 14.026 C 33.57 13.645 33.655 13.258 33.8 12.877 C 33.866 12.7 33.931 12.542 33.997 12.398 C 34.062 12.253 34.168 12.142 34.246 12.03 C 34.386 11.838 34.55 11.664 34.732 11.511 C 35.043 11.265 35.426 11.129 35.822 11.124 C 36.009 11.099 36.198 11.086 36.387 11.085 C 36.958 11.117 37.267 11.879 37.358 13.113 C 37.389 13.552 37.365 13.994 37.286 14.427 C 37.234 14.86 37.175 15.3 37.102 15.74 C 37.03 16.18 36.938 16.613 36.853 17.053 C 36.751 17.486 36.62 17.912 36.459 18.327 C 35.856 20.047 35.125 21.719 34.273 23.33 C 32.979 25.79 31.439 28.113 29.677 30.263 Z\" fill=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 35, 35))\" data-f2c-idx=\"1178\"></path><path d=\"M 32.329 2.976 C 33.185 2.352 34.077 1.779 35.001 1.262 C 35.502 0.986 36.017 0.736 36.544 0.514 C 36.682 0.455 36.84 0.409 36.984 0.356 C 37.143 0.296 37.305 0.245 37.47 0.205 C 37.884 0.082 38.312 0.013 38.744 0.002 C 39.271 -0.013 39.798 0.062 40.3 0.225 C 40.612 0.365 40.905 0.544 41.173 0.757 C 41.439 0.984 41.677 1.242 41.882 1.525 C 42.03 1.735 42.164 1.954 42.283 2.182 C 42.377 2.343 42.463 2.51 42.539 2.681 C 42.696 3.015 42.828 3.337 42.946 3.665 C 43.189 4.322 43.386 4.979 43.563 5.576 C 43.898 6.85 44.22 8.097 44.41 9.364 C 44.581 10.487 44.824 11.59 45.067 12.693 C 45.233 13.397 45.315 14.117 45.309 14.84 C 45.295 15.584 45.211 16.325 45.06 17.053 C 44.955 17.519 44.732 17.453 44.351 17.112 C 43.79 16.628 43.3 16.069 42.893 15.451 L 42.637 14.965 C 42.542 14.812 42.469 14.646 42.421 14.473 L 42.138 13.468 L 41.58 11.459 C 41.403 10.802 41.193 10.146 41.068 9.443 L 40.713 7.368 C 40.576 6.552 40.326 5.759 39.972 5.011 C 39.814 4.665 39.634 4.33 39.433 4.007 C 39.328 3.83 39.328 3.836 39.276 3.757 C 39.231 3.698 39.183 3.641 39.131 3.587 C 39.102 3.553 39.066 3.526 39.026 3.508 C 38.884 3.436 38.723 3.413 38.567 3.442 L 38.448 3.442 C 38.376 3.442 38.291 3.495 38.205 3.521 C 38.031 3.576 37.86 3.642 37.693 3.718 C 36.938 4.07 36.213 4.486 35.527 4.959 C 34.562 5.613 33.635 6.321 32.749 7.08 C 31.358 8.223 30.042 9.455 28.81 10.77 C 27.864 11.794 27.149 12.989 26.308 14.052 C 26.125 14.295 25.967 14.545 25.763 14.775 C 25.015 15.622 24.601 15.74 23.794 15.392 C 23.617 15.313 23.426 15.247 23.262 15.155 C 22.71 14.834 22.605 14.131 22.953 13.317 C 23.229 12.72 23.525 12.129 23.846 11.551 C 24.179 10.98 24.552 10.433 24.962 9.916 C 25.777 8.851 26.666 7.844 27.622 6.902 C 29.066 5.462 30.601 4.116 32.218 2.871 Z M 17.852 52.993 C 17.95 53.164 17.78 53.367 17.53 53.578 C 17.409 53.653 17.265 53.684 17.123 53.663 C 17.005 53.578 16.88 53.499 16.775 53.407 C 16.67 53.315 16.04 52.402 15.757 52.094 C 15.575 51.77 15.438 51.424 15.35 51.063 C 15.147 50.347 14.956 49.612 14.799 48.883 C 14.769 48.718 14.769 48.549 14.799 48.384 C 14.888 47.832 14.888 47.269 14.799 46.716 C 14.799 46.625 14.799 46.526 14.687 46.447 C 14.487 45.863 14.407 45.245 14.451 44.629 C 14.615 44.156 14.707 43.683 14.825 43.21 C 14.825 43.145 14.825 43.079 14.917 43.013 C 15.089 42.934 15.194 42.756 15.18 42.567 C 15.215 42.355 15.275 42.148 15.357 41.95 C 15.452 41.835 15.557 41.73 15.672 41.635 C 15.817 41.563 15.982 41.546 16.138 41.589 C 16.25 41.667 16.407 41.589 16.539 41.589 L 16.69 41.589 C 17.087 41.956 17.438 42.37 17.734 42.823 C 17.734 42.823 17.819 43.27 17.898 43.723 C 17.977 44.176 18.069 44.648 18.101 44.747 C 18.134 44.845 18.101 44.95 18.042 45.049 C 17.983 45.147 18.311 46.434 18.311 46.48 C 18.311 46.762 18.417 47.025 18.193 47.307 C 18.165 47.359 18.165 47.42 18.193 47.472 C 18.212 47.942 18.181 48.413 18.101 48.877 C 18.096 49.113 18.107 49.35 18.134 49.586 C 18.134 49.625 18.101 49.671 18.095 49.717 C 18.069 49.768 18.056 49.824 18.055 49.881 C 18.061 50.445 18.116 51.008 18.22 51.562 C 18.22 51.687 17.996 52.376 18.036 52.527 C 18.075 52.678 17.799 52.928 17.852 52.993 Z M 30.386 46.822 C 30.491 46.992 30.32 47.196 30.064 47.406 C 29.943 47.483 29.798 47.513 29.657 47.491 C 29.545 47.406 29.421 47.327 29.316 47.235 C 29.21 47.143 28.58 46.231 28.298 45.922 C 28.111 45.6 27.972 45.253 27.884 44.891 C 27.687 44.176 27.49 43.44 27.339 42.711 C 27.31 42.546 27.31 42.377 27.339 42.212 C 27.425 41.658 27.425 41.093 27.339 40.538 C 27.339 40.453 27.339 40.354 27.228 40.276 C 27.043 39.695 26.978 39.083 27.037 38.477 C 27.201 38.004 27.293 37.531 27.411 37.058 C 27.411 36.993 27.411 36.927 27.503 36.855 C 27.672 36.775 27.776 36.601 27.766 36.415 C 27.801 36.203 27.861 35.996 27.943 35.798 C 28.036 35.682 28.142 35.576 28.258 35.483 C 28.401 35.405 28.569 35.388 28.725 35.437 C 28.836 35.515 28.994 35.437 29.125 35.437 L 29.27 35.437 C 29.666 35.809 30.017 36.228 30.313 36.684 C 30.313 36.684 30.392 37.131 30.478 37.584 C 30.563 38.037 30.648 38.509 30.681 38.608 C 30.714 38.706 30.681 38.811 30.622 38.91 C 30.563 39.008 30.891 40.295 30.891 40.341 C 30.891 40.624 30.99 40.886 30.767 41.169 C 30.741 41.22 30.741 41.281 30.767 41.333 C 30.785 41.803 30.754 42.274 30.675 42.738 C 30.661 42.972 30.661 43.206 30.675 43.44 C 30.675 43.486 30.675 43.532 30.635 43.578 C 30.615 43.631 30.604 43.686 30.602 43.742 C 30.609 44.306 30.661 44.868 30.76 45.423 C 30.76 45.548 30.543 46.237 30.576 46.388 C 30.609 46.539 30.34 46.762 30.386 46.822 Z M 39.912 34.478 C 40.018 34.649 39.84 34.852 39.591 35.062 C 39.47 35.139 39.325 35.169 39.184 35.148 C 39.072 35.062 38.947 34.984 38.836 34.892 C 38.724 34.8 38.1 33.894 37.818 33.579 C 37.641 33.248 37.511 32.894 37.431 32.528 C 37.234 31.812 37.037 31.084 36.886 30.348 C 36.856 30.183 36.856 30.014 36.886 29.849 C 36.971 29.297 36.971 28.734 36.886 28.182 C 36.886 28.09 36.886 27.991 36.781 27.912 C 36.596 27.332 36.529 26.72 36.584 26.113 C 36.754 25.641 36.84 25.175 36.964 24.702 C 36.964 24.63 36.964 24.564 37.05 24.498 C 37.223 24.42 37.331 24.242 37.319 24.052 C 37.352 23.84 37.409 23.633 37.49 23.435 C 37.569 23.323 37.659 23.22 37.759 23.126 C 37.9 23.052 38.065 23.035 38.219 23.08 C 38.337 23.159 38.488 23.08 38.626 23.08 L 38.77 23.08 C 39.167 23.453 39.517 23.872 39.814 24.328 L 39.978 25.227 C 40.063 25.687 40.149 26.153 40.182 26.251 C 40.195 26.357 40.172 26.463 40.116 26.553 C 40.116 26.606 40.392 27.939 40.392 27.985 C 40.392 28.267 40.49 28.53 40.267 28.812 C 40.221 28.871 40.267 28.924 40.267 28.983 C 40.282 29.44 40.247 29.898 40.162 30.348 C 40.149 30.584 40.149 30.821 40.162 31.057 C 40.154 31.103 40.141 31.147 40.123 31.189 C 40.113 31.243 40.113 31.299 40.123 31.353 C 40.126 31.917 40.178 32.479 40.28 33.034 C 40.28 33.158 40.057 33.848 40.096 33.999 C 40.136 34.15 39.867 34.412 39.912 34.478 Z\" fill=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 35, 35))\" data-f2c-idx=\"1179\"></path></g></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 67 37\" id=\"svg10079772872\" data-f2c-idx=\"1180\"><path d=\"M 9.094 31.458 C 11.905 30.612 14.586 29.387 17.066 27.817 L 25.236 22.829 C 27.2 21.618 29.195 20.256 31.071 19.1 C 31.862 18.586 32.797 17.96 33.715 17.39 C 34.666 16.804 35.653 16.275 36.668 15.807 C 37.196 15.559 37.742 15.329 38.307 15.118 C 39.035 14.843 39.792 14.649 40.563 14.54 C 41.355 14.417 42.165 14.463 42.938 14.675 L 43.5 14.833 C 43.687 14.891 43.861 14.982 44.015 15.102 C 44.315 15.327 44.582 15.593 44.806 15.894 C 45.042 16.168 45.223 16.485 45.337 16.828 C 45.412 17.172 45.452 17.522 45.455 17.873 C 45.398 18.633 45.21 19.378 44.901 20.074 C 44.743 20.438 44.592 20.818 44.418 21.159 L 44.173 21.642 L 43.991 21.99 L 43.255 23.336 L 42.764 24.215 C 42.65 24.413 42.552 24.619 42.471 24.832 C 42.362 25.045 42.334 25.289 42.392 25.521 C 42.52 25.715 42.747 25.819 42.977 25.79 C 43.191 25.783 43.403 25.757 43.611 25.711 L 43.927 25.632 L 44.379 25.489 L 44.838 25.347 L 45.44 25.133 C 45.851 24.982 46.231 24.832 46.667 24.658 C 48.305 23.985 49.92 23.185 51.527 22.378 C 53.602 21.258 55.735 20.248 57.916 19.354 C 60.164 18.414 62.56 17.878 64.994 17.77 C 66.577 17.77 66.284 18.325 65.152 19.029 L 64.162 19.623 C 63.782 19.837 63.371 20.058 62.92 20.327 C 62.025 20.81 61.012 21.412 59.864 21.911 L 58.336 22.702 C 57.829 22.972 57.33 23.233 56.808 23.494 C 55.779 24.017 54.757 24.563 53.705 25.125 C 51.564 26.301 49.36 27.358 47.102 28.292 L 46.215 28.64 C 46.097 28.687 45.812 28.775 45.614 28.838 L 45.004 29.083 L 44.347 29.289 L 44.022 29.392 L 43.611 29.471 C 43.094 29.609 42.562 29.686 42.027 29.701 C 41.554 29.735 41.077 29.69 40.618 29.566 C 40.216 29.433 39.837 29.238 39.494 28.988 C 39.318 28.846 39.152 28.693 38.995 28.529 C 38.859 28.348 38.74 28.154 38.639 27.951 C 38.445 27.568 38.337 27.146 38.322 26.716 C 38.307 25.724 38.532 24.744 38.98 23.858 C 39.185 23.375 39.486 22.829 39.7 22.425 L 40.222 21.531 L 41.125 20.011 C 41.224 19.881 41.317 19.746 41.402 19.607 C 41.537 19.42 41.583 19.182 41.529 18.958 C 41.232 18.693 40.807 18.628 40.444 18.792 L 40.27 18.847 C 40.149 18.89 40.03 18.941 39.914 18.997 C 39.668 19.1 39.423 19.219 39.17 19.346 C 38.679 19.607 38.172 19.9 37.673 20.217 C 36.684 20.858 35.67 21.531 34.641 22.275 L 33.85 22.837 L 33.002 23.391 L 31.419 24.42 L 23.17 29.535 L 19.053 32.084 C 17.636 32.923 16.18 33.746 14.644 34.459 C 12.718 35.403 10.672 36.082 8.564 36.477 C 7.444 36.681 6.304 36.75 5.167 36.683 C 4.466 36.631 3.777 36.471 3.125 36.208 C 2.45 35.923 1.85 35.484 1.375 34.926 C 1.028 34.5 0.76 34.014 0.584 33.493 C 0.41 32.981 0.304 32.449 0.267 31.91 C 0.224 31.017 0.301 30.122 0.497 29.25 C 0.866 27.679 1.397 26.151 2.08 24.69 C 3.349 21.865 4.887 19.169 6.672 16.638 C 8.033 14.72 9.489 12.87 11.034 11.097 C 11.825 10.218 12.57 9.339 13.361 8.492 C 14.153 7.645 14.945 6.837 15.815 6.03 C 16.686 5.222 17.248 4.613 18.008 3.94 C 20.819 1.415 21.911 0.868 23.162 1.019 C 23.442 1.028 23.721 1.065 23.993 1.13 C 24.373 1.264 24.381 1.707 24.08 2.388 C 23.6 3.36 22.984 4.258 22.252 5.056 L 14.137 14.374 C 11.497 17.394 9.256 20.741 7.471 24.333 C 6.83 25.639 6.275 26.985 5.809 28.363 C 5.601 28.973 5.439 29.597 5.326 30.231 C 5.236 30.679 5.196 31.136 5.207 31.593 L 5.207 31.664 C 5.207 31.735 5.207 31.664 5.207 31.664 L 5.452 31.664 C 6.007 31.713 6.565 31.697 7.115 31.617 C 7.762 31.535 8.403 31.405 9.031 31.229 Z\" fill=\"var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35))\" data-f2c-idx=\"1181\"></path></svg>"} />
      </div>
      <div className={styles["div-210"]}>
        <span className={styles["span-12"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button"]}>
          <SvgGraphic className={styles["svg-10"]} html={"<svg role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"1185\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"1186\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
