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

export default function About({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-211"]}>
        <div className={styles["div-212"]}>
          <div className={styles["div-89"]}>
            <section className={styles["hero-2"]}>
              <div className={styles["container-14"]}>
                <div className={styles["illustration-3"]}>
                  <div className={styles["div-213"]}>
                    <img className={styles["img-17"]} src={slots[0] ?? "https://framerusercontent.com/images/EN1aKL3jwJB9idSeIxjRLfzJAo.svg?scale-down-to=512&width=520&height=520"} alt="" />
                  </div>
                </div>
                <div className={styles["h2"]}>
                  <div className={styles["div-214"]}>
                    <div className={styles["div-14"]}>
                      <h1 className={styles["h1-6"]}>
                        <span className={styles["span-13"]}>{slots[1] ?? "Built from a problem we lived. Designed for businesses like yours."}</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["dots-pattern-5"]}>
                <div className={styles["div-215"]} />
              </div>
            </section>
            <section className={styles["about"]}>
              <div className={styles["text-23"]}>
                <div className={styles["div-216"]}>
                  <h3 className={styles["h3-5"]}>{slots[2] ?? "Our story"}</h3>
                </div>
                <div className={styles["text-24"]}>
                  <div className={styles["div-217"]}>
                    <h6 className={styles["h6-59"]}>{slots[3] ?? "We know what it's like to build a business while trying to keep up with social media. Between creating content, designing posts and staying consistent, it can become a job of its own. That's why we built PostSynq."}</h6>
                  </div>
                  <div className={styles["columns"]}>
                    <div className={styles["div-218"]}>
                      <div className={styles["p-64"]}>
                        <span className={styles["span-14"]}>{slots[4] ?? "When our founder, Preetham, started building the company, we were a small team wearing many hats, including our own social media."}</span>
                      </div>
                    </div>
                    <div className={styles["div-218"]}>
                      <div className={styles["p-64"]}>
                        <span className={styles["span-14"]}>{slots[5] ?? "Creating posts, writing captions and publishing on every platform took hours each week. That challenge became PostSynq."}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["div-14"]}>
                <div className={styles["photo-2"]}>
                  <div className={styles["div-219"]}>
                    <img className={styles["img-18"]} src={slots[6] ?? "https://framerusercontent.com/images/txXiU0aY2RpZtSel6L1Yu42wo.png?width=1122&height=698"} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles["logos-2"]}>
                <div className={styles["div-220"]}>
                  <section className={styles["section"]}>
                    <ul className={styles["ul"] + " " + styles["rv-4"] + " " + styles["loop-1"]} data-reveal>
                      <li className={styles["li"]}>
                        <div className={styles["logos-3"]}>
                          <div className={styles["div-221"]}>
                            <p className={styles["p-65"]}>{slots[7] ?? "bluebird"}</p>
                          </div>
                          <div className={styles["div-222"]}>
                            <p className={styles["p-66"]}>{slots[8] ?? "Galaxy"}</p>
                          </div>
                          <div className={styles["div-223"]}>
                            <div className={styles["straw"]}>
                              <div className={styles["div-224"]}>
                                <SvgGraphic className={styles["svg-11"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"49\"><use href=\"#svg9825697818\" data-f2c-idx=\"50\"></use></svg>"} />
                              </div>
                            </div>
                            <div className={styles["div-225"]}>
                              <p className={styles["p-67"]}>{slots[9] ?? "berry"}</p>
                            </div>
                          </div>
                          <div className={styles["div-226"]}>
                            <div className={styles["div-227"]}>
                              <div className={styles["div-13"]}>
                                <div className={styles["div-228"]}>
                                  <SvgGraphic className={styles["svg-12"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"57\"><use href=\"#svg12119417773\" data-f2c-idx=\"58\"></use></svg>"} />
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-229"]}>
                              <p className={styles["p-68"]}>{slots[10] ?? "Chameleon"}</p>
                            </div>
                          </div>
                          <div className={styles["div-230"]}>
                            <p className={styles["p-69"]}>{slots[11] ?? "SHIP4450"}</p>
                          </div>
                          <div className={styles["div-221"]}>
                            <p className={styles["p-65"]}>{slots[12] ?? "bluebird"}</p>
                          </div>
                          <div className={styles["div-222"]}>
                            <p className={styles["p-66"]}>{slots[13] ?? "Galaxy"}</p>
                          </div>
                          <div className={styles["div-223"]}>
                            <div className={styles["straw"]}>
                              <div className={styles["div-224"]}>
                                <SvgGraphic className={styles["svg-11"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"70\"><use href=\"#svg9825697818\" data-f2c-idx=\"71\"></use></svg>"} />
                              </div>
                            </div>
                            <div className={styles["div-225"]}>
                              <p className={styles["p-67"]}>{slots[14] ?? "berry"}</p>
                            </div>
                          </div>
                          <div className={styles["div-226"]}>
                            <div className={styles["div-227"]}>
                              <div className={styles["div-13"]}>
                                <div className={styles["div-228"]}>
                                  <SvgGraphic className={styles["svg-12"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"78\"><use href=\"#svg12119417773\" data-f2c-idx=\"79\"></use></svg>"} />
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-229"]}>
                              <p className={styles["p-68"]}>{slots[15] ?? "Chameleon"}</p>
                            </div>
                          </div>
                          <div className={styles["div-230"]}>
                            <p className={styles["p-69"]}>{slots[16] ?? "SHIP4450"}</p>
                          </div>
                        </div>
                      </li>
                      <li className={styles["li"]}>
                        <div className={styles["logos-3"]}>
                          <div className={styles["div-221"]}>
                            <p className={styles["p-65"]}>{slots[17] ?? "bluebird"}</p>
                          </div>
                          <div className={styles["div-222"]}>
                            <p className={styles["p-66"]}>{slots[18] ?? "Galaxy"}</p>
                          </div>
                          <div className={styles["div-223"]}>
                            <div className={styles["straw"]}>
                              <div className={styles["div-224"]}>
                                <SvgGraphic className={styles["svg-11"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"93\"><use href=\"#svg9825697818\" data-f2c-idx=\"94\"></use></svg>"} />
                              </div>
                            </div>
                            <div className={styles["div-225"]}>
                              <p className={styles["p-67"]}>{slots[19] ?? "berry"}</p>
                            </div>
                          </div>
                          <div className={styles["div-226"]}>
                            <div className={styles["div-227"]}>
                              <div className={styles["div-13"]}>
                                <div className={styles["div-228"]}>
                                  <SvgGraphic className={styles["svg-12"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"101\"><use href=\"#svg12119417773\" data-f2c-idx=\"102\"></use></svg>"} />
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-229"]}>
                              <p className={styles["p-68"]}>{slots[20] ?? "Chameleon"}</p>
                            </div>
                          </div>
                          <div className={styles["div-230"]}>
                            <p className={styles["p-69"]}>{slots[21] ?? "SHIP4450"}</p>
                          </div>
                          <div className={styles["div-221"]}>
                            <p className={styles["p-65"]}>{slots[22] ?? "bluebird"}</p>
                          </div>
                          <div className={styles["div-222"]}>
                            <p className={styles["p-66"]}>{slots[23] ?? "Galaxy"}</p>
                          </div>
                          <div className={styles["div-223"]}>
                            <div className={styles["straw"]}>
                              <div className={styles["div-224"]}>
                                <SvgGraphic className={styles["svg-11"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"114\"><use href=\"#svg9825697818\" data-f2c-idx=\"115\"></use></svg>"} />
                              </div>
                            </div>
                            <div className={styles["div-225"]}>
                              <p className={styles["p-67"]}>{slots[24] ?? "berry"}</p>
                            </div>
                          </div>
                          <div className={styles["div-226"]}>
                            <div className={styles["div-227"]}>
                              <div className={styles["div-13"]}>
                                <div className={styles["div-228"]}>
                                  <SvgGraphic className={styles["svg-12"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"122\"><use href=\"#svg12119417773\" data-f2c-idx=\"123\"></use></svg>"} />
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-229"]}>
                              <p className={styles["p-68"]}>{slots[25] ?? "Chameleon"}</p>
                            </div>
                          </div>
                          <div className={styles["div-230"]}>
                            <p className={styles["p-69"]}>{slots[26] ?? "SHIP4450"}</p>
                          </div>
                        </div>
                      </li>
                      <li className={styles["li"]}>
                        <div className={styles["logos-3"]}>
                          <div className={styles["div-221"]}>
                            <p className={styles["p-65"]}>{slots[27] ?? "bluebird"}</p>
                          </div>
                          <div className={styles["div-222"]}>
                            <p className={styles["p-66"]}>{slots[28] ?? "Galaxy"}</p>
                          </div>
                          <div className={styles["div-223"]}>
                            <div className={styles["straw"]}>
                              <div className={styles["div-224"]}>
                                <SvgGraphic className={styles["svg-11"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"137\"><use href=\"#svg9825697818\" data-f2c-idx=\"138\"></use></svg>"} />
                              </div>
                            </div>
                            <div className={styles["div-225"]}>
                              <p className={styles["p-67"]}>{slots[29] ?? "berry"}</p>
                            </div>
                          </div>
                          <div className={styles["div-226"]}>
                            <div className={styles["div-227"]}>
                              <div className={styles["div-13"]}>
                                <div className={styles["div-228"]}>
                                  <SvgGraphic className={styles["svg-12"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"145\"><use href=\"#svg12119417773\" data-f2c-idx=\"146\"></use></svg>"} />
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-229"]}>
                              <p className={styles["p-68"]}>{slots[30] ?? "Chameleon"}</p>
                            </div>
                          </div>
                          <div className={styles["div-230"]}>
                            <p className={styles["p-69"]}>{slots[31] ?? "SHIP4450"}</p>
                          </div>
                          <div className={styles["div-221"]}>
                            <p className={styles["p-65"]}>{slots[32] ?? "bluebird"}</p>
                          </div>
                          <div className={styles["div-222"]}>
                            <p className={styles["p-66"]}>{slots[33] ?? "Galaxy"}</p>
                          </div>
                          <div className={styles["div-223"]}>
                            <div className={styles["straw"]}>
                              <div className={styles["div-224"]}>
                                <SvgGraphic className={styles["svg-11"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"158\"><use href=\"#svg9825697818\" data-f2c-idx=\"159\"></use></svg>"} />
                              </div>
                            </div>
                            <div className={styles["div-225"]}>
                              <p className={styles["p-67"]}>{slots[34] ?? "berry"}</p>
                            </div>
                          </div>
                          <div className={styles["div-226"]}>
                            <div className={styles["div-227"]}>
                              <div className={styles["div-13"]}>
                                <div className={styles["div-228"]}>
                                  <SvgGraphic className={styles["svg-12"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"166\"><use href=\"#svg12119417773\" data-f2c-idx=\"167\"></use></svg>"} />
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-229"]}>
                              <p className={styles["p-68"]}>{slots[35] ?? "Chameleon"}</p>
                            </div>
                          </div>
                          <div className={styles["div-230"]}>
                            <p className={styles["p-69"]}>{slots[36] ?? "SHIP4450"}</p>
                          </div>
                        </div>
                      </li>
                      <li className={styles["li"]}>
                        <div className={styles["logos-3"]}>
                          <div className={styles["div-221"]}>
                            <p className={styles["p-65"]}>{slots[37] ?? "bluebird"}</p>
                          </div>
                          <div className={styles["div-222"]}>
                            <p className={styles["p-66"]}>{slots[38] ?? "Galaxy"}</p>
                          </div>
                          <div className={styles["div-223"]}>
                            <div className={styles["straw"]}>
                              <div className={styles["div-224"]}>
                                <SvgGraphic className={styles["svg-11"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"181\"><use href=\"#svg9825697818\" data-f2c-idx=\"182\"></use></svg>"} />
                              </div>
                            </div>
                            <div className={styles["div-225"]}>
                              <p className={styles["p-67"]}>{slots[39] ?? "berry"}</p>
                            </div>
                          </div>
                          <div className={styles["div-226"]}>
                            <div className={styles["div-227"]}>
                              <div className={styles["div-13"]}>
                                <div className={styles["div-228"]}>
                                  <SvgGraphic className={styles["svg-12"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"189\"><use href=\"#svg12119417773\" data-f2c-idx=\"190\"></use></svg>"} />
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-229"]}>
                              <p className={styles["p-68"]}>{slots[40] ?? "Chameleon"}</p>
                            </div>
                          </div>
                          <div className={styles["div-230"]}>
                            <p className={styles["p-69"]}>{slots[41] ?? "SHIP4450"}</p>
                          </div>
                          <div className={styles["div-221"]}>
                            <p className={styles["p-65"]}>{slots[42] ?? "bluebird"}</p>
                          </div>
                          <div className={styles["div-222"]}>
                            <p className={styles["p-66"]}>{slots[43] ?? "Galaxy"}</p>
                          </div>
                          <div className={styles["div-223"]}>
                            <div className={styles["straw"]}>
                              <div className={styles["div-224"]}>
                                <SvgGraphic className={styles["svg-11"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"202\"><use href=\"#svg9825697818\" data-f2c-idx=\"203\"></use></svg>"} />
                              </div>
                            </div>
                            <div className={styles["div-225"]}>
                              <p className={styles["p-67"]}>{slots[44] ?? "berry"}</p>
                            </div>
                          </div>
                          <div className={styles["div-226"]}>
                            <div className={styles["div-227"]}>
                              <div className={styles["div-13"]}>
                                <div className={styles["div-228"]}>
                                  <SvgGraphic className={styles["svg-12"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"210\"><use href=\"#svg12119417773\" data-f2c-idx=\"211\"></use></svg>"} />
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-229"]}>
                              <p className={styles["p-68"]}>{slots[45] ?? "Chameleon"}</p>
                            </div>
                          </div>
                          <div className={styles["div-230"]}>
                            <p className={styles["p-69"]}>{slots[46] ?? "SHIP4450"}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </section>
            <section className={styles["quote-video"]}>
              <div className={styles["container-15"]}>
                <div className={styles["quote"]}>
                  <div className={styles["div-231"]}>
                    <h3 className={styles["h3-6"]}>{slots[47] ?? "\"We built PostSynq because we needed it ourselves.\""}</h3>
                  </div>
                  <div className={styles["author-2"]}>
                    <div className={styles["div-14"]}>
                      <div className={styles["avatar-7"]}>
                        <div className={styles["div-177"]}>
                          <img className={styles["img-12"]} src={slots[48] ?? "https://framerusercontent.com/images/6QiHrUex2XEVypAiZReONkj1oJY.jpg?scale-down-to=1024&width=1792&height=2368"} alt="" />
                        </div>
                        <div className={styles["company"]}>
                          <div className={styles["div-232"]}>
                            <img className={styles["img-19"]} src={slots[49] ?? "https://framerusercontent.com/images/RtcOYHwWHwohGIWnbcem3bpcYs.png?width=512&height=512"} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["text-25"]}>
                      <div className={styles["div-233"]}>
                        <h6 className={styles["h6-60"]}>{slots[50] ?? "Preetham"}</h6>
                      </div>
                      <div className={styles["div-234"]}>
                        <h6 className={styles["h6-61"]}>{slots[51] ?? "Founder, AtSpeed Innovations"}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["video"]}>
                    <Video slots={["https://framerusercontent.com/images/ofVk6pjF8UfeZPteRzo4zBaah8U.png?scale-down-to=1024&width=1254&height=1254"]} />
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["letter"]}>
              <div className={styles["text-26"]}>
                <div className={styles["div-235"]}>
                  <h5 className={styles["h5-3"]}>{slots[52] ?? "Building a business is already a full-time job. Social media shouldn't feel like another one."}</h5>
                </div>
                <div className={styles["div-236"]}>
                  <p className={styles["p-70"]}>{slots[53] ?? "We experienced how much effort goes into keeping a social media presence alive. One day you’re thinking about content ideas. The next, you’re designing creatives, writing captions, scheduling posts and switching between platforms."}</p>
                  <p className={styles["p-71"]}>{slots[54] ?? "For startups and small teams, every task adds up and takes time away from building the actual business. So we asked ourselves: what if it could all be managed from one place, with AI doing more of the heavy lifting? Here’s what PostSynq brings together:"}</p>
                  <div className={styles["p-72"]}>
                    {"Content creation? "}
                    <span className={styles["span-15"]}>{slots[55] ?? "✓ Check"}</span>
                  </div>
                  <div className={styles["p-72"]}>
                    {"AI-generated visuals? "}
                    <span className={styles["span-15"]}>{slots[56] ?? "✓ Check"}</span>
                  </div>
                  <div className={styles["p-72"]}>
                    {"A planned content calendar? "}
                    <span className={styles["span-15"]}>{slots[57] ?? "✓ Check"}</span>
                  </div>
                  <div className={styles["p-72"]}>
                    {"Scheduling and publishing? "}
                    <span className={styles["span-15"]}>{slots[58] ?? "✓ Check"}</span>
                  </div>
                  <div className={styles["p-72"]}>
                    {"Conversations with your audience? "}
                    <span className={styles["span-15"]}>{slots[59] ?? "✓ Check"}</span>
                  </div>
                  <div className={styles["p-72"]}>
                    {"Performance insights? "}
                    <span className={styles["span-15"]}>{slots[60] ?? "✓ Check"}</span>
                  </div>
                  <p className={styles["p-72"]}>{slots[61] ?? "All in one platform, instead of a different tool for every task."}</p>
                  <p className={styles["p-71"]}>{slots[62] ?? "Then we went a step further and built Synq AI, our AI-powered social media assistant. Tell it what you need, give it your brand context, and let it get the work moving. Because managing social media should start with an idea, not a hundred manual steps."}</p>
                  <p className={styles["p-71"]}>{slots[63] ?? "Our vision is to make intelligent social media management accessible to every business, so people can focus on creativity, relationships and growth. PostSynq is built by AtSpeed Innovations, a growing team in Hyderabad. And this is just the beginning."}</p>
                </div>
              </div>
            </section>
            <section className={styles["team"]}>
              <div className={styles["container-16"]}>
                <div className={styles["title-11"]}>
                  <div className={styles["div-237"]}>
                    <p className={styles["p-73"]}>{slots[64] ?? "the team"}</p>
                  </div>
                  <div className={styles["div-238"]}>
                    <h4 className={styles["h4-5"]}>{slots[65] ?? "A product of AtSpeed Innovations"}</h4>
                  </div>
                </div>
                <div className={styles["list-6"]}>
                  <div className={styles["div-14"]}>
                    <div className={styles["div-239"]}>
                      <CardTeamMember slots={["https://framerusercontent.com/images/ofVk6pjF8UfeZPteRzo4zBaah8U.png?scale-down-to=1024&width=1254&height=1254","Preetham","Founder"]} />
                    </div>
                  </div>
                  <div className={styles["div-14"]}>
                    <div className={styles["div-239"]}>
                      <CardTeamMember slots={["https://framerusercontent.com/images/OqTeT2NflHaDRc5y6OrMBTPXAWc.png?scale-down-to=512&width=1254&height=1254","Jessica Hayes","Co-founder & CFO"]} />
                    </div>
                  </div>
                  <div className={styles["div-14"]}>
                    <div className={styles["div-239"]}>
                      <CardTeamMember slots={["https://framerusercontent.com/images/uOIYUQSWM1yhsQClrXWZvjw6h0.png?scale-down-to=512&width=1254&height=1254","Constanza Perez","Head of Product"]} />
                    </div>
                  </div>
                  <div className={styles["div-14"]}>
                    <div className={styles["div-239"]}>
                      <CardTeamMember slots={["https://framerusercontent.com/images/hWy4hCpi4uFuCAYJ7gfSPPmvSE.png?scale-down-to=1024&width=1122&height=1402","Meera Desai","Head of Engineering"]} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["dots-pattern-6"]}>
                <div className={styles["div-240"]} />
              </div>
            </section>
            <section className={styles["banner-2"]}>
              <div className={styles["container-17"]}>
                <div className={styles["title-12"]}>
                  <div className={styles["div-241"]}>
                    <p className={styles["p-74"]}>{slots[66] ?? "Get started"}</p>
                  </div>
                  <div className={styles["div-242"]}>
                    <h2 className={styles["h2-2"]}>
                      {"We built PostSynq because we needed it. "}
                      <span className={styles["span-16"]}>{slots[67] ?? "Now it’s your turn."}</span>
                    </h2>
                  </div>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["div-200"]}>
                    <ButtonLargeIcon slots={["Start free trial","Start free trial"]} />
                  </div>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["dots-pattern-7"]}>
                    <div className={styles["div-243"]} />
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
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 21 21\" id=\"svg9825697818\" data-f2c-idx=\"648\"><path d=\"M 16.74 5.25 L 20.3 5.25 L 20.303 5.248 C 20.688 5.248 21.003 5.562 21.003 5.948 C 21.003 6.333 20.688 6.648 20.303 6.648 L 16.435 6.648 C 17.642 8.18 18.356 9.861 18.51 11.579 C 18.717 13.862 17.94 15.951 16.271 17.621 C 14.604 19.287 11.84 20.508 8.872 20.883 C 8.248 20.963 7.642 21.002 7.065 21.002 C 4.795 21.002 2.856 20.366 1.745 19.256 C 0.339 17.852 -0.27 15.188 0.115 12.133 C 0.49 9.164 1.711 6.4 3.377 4.733 C 4.869 3.243 6.709 2.451 8.701 2.451 C 8.873 2.451 9.044 2.458 9.212 2.469 C 10.974 2.585 12.758 3.321 14.35 4.573 L 14.35 0.702 C 14.35 0.317 14.665 0.002 15.05 0.002 C 15.436 0.002 15.75 0.317 15.75 0.702 L 15.75 4.263 L 18.757 1.256 C 19.004 1.008 19.498 1.008 19.747 1.256 C 19.878 1.387 19.953 1.565 19.953 1.75 C 19.953 1.935 19.878 2.113 19.747 2.243 Z M 15.277 16.634 C 16.645 15.267 17.282 13.562 17.114 11.707 L 17.11 11.709 C 16.951 9.9 16.033 8.11 14.458 6.539 C 12.852 4.933 10.954 3.984 9.116 3.865 C 8.977 3.855 8.836 3.851 8.696 3.851 C 7.088 3.851 5.593 4.492 4.364 5.724 C 2.932 7.16 1.833 9.682 1.501 12.311 C 1.113 15.405 1.882 17.418 2.733 18.268 C 3.569 19.105 5.19 19.605 7.063 19.605 C 7.581 19.605 8.131 19.567 8.694 19.497 C 11.321 19.165 13.846 18.066 15.277 16.634 Z M 8.05 9.1 C 8.05 10.034 6.65 10.034 6.65 9.1 C 6.65 8.166 8.05 8.166 8.05 9.1 Z M 11.2 12.95 C 11.2 12.564 11.514 12.25 11.9 12.25 C 12.286 12.25 12.6 12.564 12.6 12.95 C 12.6 13.336 12.286 13.65 11.9 13.65 C 11.514 13.65 11.2 13.336 11.2 12.95 Z M 7.35 14.35 C 7.35 15.284 5.95 15.284 5.95 14.35 C 5.95 13.416 7.35 13.416 7.35 14.35 Z\" fill=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" data-f2c-idx=\"649\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 16 16\" id=\"svg12119417773\" data-f2c-idx=\"650\"><path d=\"M 13.557 2.502 C 12.145 0.949 10.216 0.102 8.098 0.008 C 6.028 -0.086 4.004 0.667 2.498 2.126 C 0.945 3.537 0.098 5.467 0.004 7.584 C -0.137 11.914 3.251 15.537 7.581 15.679 L 7.863 15.679 C 9.84 15.679 11.722 14.926 13.181 13.561 C 14.687 12.149 15.581 10.22 15.675 8.102 C 15.722 6.032 14.969 4.055 13.557 2.502 Z M 6.404 11.632 C 4.945 11.584 3.816 10.361 3.863 8.949 C 3.91 7.49 5.134 6.361 6.545 6.408 C 8.004 6.455 9.134 7.679 9.087 9.09 C 9.04 10.549 7.863 11.679 6.404 11.632 Z\" fill=\"var(--token-ea690d84-0c2d-4322-885a-8bb8fee7e329, rgb(90, 109, 119))\" data-f2c-idx=\"651\"></path></svg>"} />
      </div>
      <div className={styles["div-210"]}>
        <span className={styles["span-12"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button"]}>
          <SvgGraphic className={styles["svg-10"]} html={"<svg role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"655\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"656\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
