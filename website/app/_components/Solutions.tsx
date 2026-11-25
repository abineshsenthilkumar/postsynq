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

export default function Solutions({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-244"]}>
        <div className={styles["div-245"]}>
          <div className={styles["div-89"]}>
            <section className={styles["hero-3"]}>
              <div className={styles["container-18"]}>
                <div className={styles["h3-7"]}>
                  <div className={styles["div-167"]}>
                    <div className={styles["div-14"]}>
                      <h1 className={styles["h1-5"]}>
                        <span className={styles["span-10"]}>{slots[0] ?? "Your social media workflow. Finally, all in one place."}</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className={styles["div-92"]}>
                  <p className={styles["p-42"]}>{slots[1] ?? "From creating content to publishing and engagement, PostSynq brings it all together with AI."}</p>
                </div>
                <div className={styles["cta-2"]}>
                  <div className={styles["div-14"]}>
                    <div className={styles["div-246"]}>
                      <ButtonLargeIcon slots={["Get started","Get started"]} />
                    </div>
                  </div>
                  <div className={styles["div-14"]}>
                    <div className={styles["div-247"]}>
                      <ButtonLarge4 slots={["Explore features","Explore features"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["illustration-4"]}>
                    <div className={styles["div-248"]}>
                      <img className={styles["img-20"]} src={slots[2] ?? "https://framerusercontent.com/images/w56xl0KHpJg36n1AF7U52WTUyZ4.svg?scale-down-to=512&width=520&height=520"} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["dots-pattern-8"]}>
                <div className={styles["div-249"]} />
              </div>
            </section>
            <section className={styles["testimonials"]}>
              <div className={styles["container-19"]}>
                <div className={styles["div-250"]}>
                  <h4 className={styles["h4-6"]}>{slots[3] ?? "A better way to manage social media"}</h4>
                </div>
                <div className={styles["content-26"]}>
                  <div className={styles["top-2"]}>
                    <div className={styles["div-14"]}>
                      <div className={styles["div-251"]}>
                        <Quote slots={["\"Your business deserves more than scattered social media tools. PostSynq brings content, scheduling, publishing and engagement into one connected workspace.\"","https://framerusercontent.com/images/BL8OFhInLp2pLMpEMKdGYlPjgk.jpg?scale-down-to=1024&width=1856&height=2304","One connected workspace","Less manual work, every week"]} />
                      </div>
                    </div>
                    <div className={styles["feature-4"]}>
                      <div className={styles["text-27"]}>
                        <div className={styles["div-252"]}>
                          <h2 className={styles["h2-3"]}>{slots[4] ?? "1"}</h2>
                        </div>
                        <div className={styles["div-253"]}>
                          <p className={styles["p-75"]}>{slots[5] ?? "workspace for all your social media"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["top-2"]}>
                    <div className={styles["feature-4"]}>
                      <div className={styles["content-27"]}>
                        <div className={styles["number-2"]}>
                          <div className={styles["div-254"]}>
                            <h2 className={styles["h2-4"]}>{slots[6] ?? "5"}</h2>
                          </div>
                        </div>
                        <div className={styles["div-253"]}>
                          <p className={styles["p-75"]}>{slots[7] ?? "steps: create, schedule, publish, engage, analyze"}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-14"]}>
                      <div className={styles["div-251"]}>
                        <Quote slots={["\"Give Synq AI your company information, brand voice and content guidelines, and every post it creates fits your business.\"","https://framerusercontent.com/images/7MaFUP5Twbun1TlfQHktaLu9fv4.jpg?scale-down-to=1024","AI that understands your brand","Brand AI Brain"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["dots-pattern-9"]}>
                <div className={styles["div-255"]} />
              </div>
            </section>
            <section className={styles["flows"]}>
              <div className={styles["container-20"]}>
                <div className={styles["div-14"]}>
                  <div className={styles["div-256"]}>
                    <h3 className={styles["h3-8"]}>{slots[8] ?? "Your social media workflow, powered by intelligence"}</h3>
                  </div>
                </div>
                <div className={styles["content-28"]}>
                  <div className={styles["feature-5"]}>
                    <div className={styles["graphic-2"]}>
                      <div className={styles["div-14"]}>
                        <div className={styles["dots-pattern-10"]}>
                          <div className={styles["div-257"]} />
                        </div>
                      </div>
                      <div className={styles["card"]}>
                        <div className={styles["header-2"]}>
                          <div className={styles["header-content"]}>
                            <div className={styles["div-14"]}>
                              <div className={styles["avatar-7"]}>
                                <div className={styles["div-177"]}>
                                  <img className={styles["img-13"]} src={slots[9] ?? "https://framerusercontent.com/images/sFYQlbFV1JKGPfIPwtN2szdJM8c.jpg?scale-down-to=1024&width=1856&height=2304"} alt="" />
                                </div>
                                <div className={styles["icon-13"]}>
                                  <div className={styles["div-13"]}>
                                    <Phosphor slots={[]} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["text-28"]}>
                              <div className={styles["div-116"]}>
                                <h6 className={styles["h6-53"]}>{slots[10] ?? "Brew Lane Café"}</h6>
                              </div>
                              <div className={styles["div-258"]}>
                                <h6 className={styles["h6-62"]}>{slots[11] ?? "Brand profile"}</h6>
                              </div>
                            </div>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["info-2"]}>
                          <div className={styles["info-content"]}>
                            <div className={styles["list-item"]}>
                              <div className={styles["div-124"]}>
                                <Phosphor slots={[]} />
                              </div>
                              <div className={styles["text-29"]}>
                                <div className={styles["div-259"]}>
                                  <h6 className={styles["h6-63"]}>{slots[12] ?? "Brand"}</h6>
                                </div>
                                <div className={styles["div-260"]}>
                                  <h6 className={styles["h6-64"]}>{slots[13] ?? "Brew Lane Café"}</h6>
                                </div>
                              </div>
                            </div>
                            <div className={styles["list-item-2"]}>
                              <div className={styles["div-124"]}>
                                <Phosphor slots={[]} />
                              </div>
                              <div className={styles["text-30"]}>
                                <div className={styles["div-259"]}>
                                  <h6 className={styles["h6-63"]}>{slots[14] ?? "Voice"}</h6>
                                </div>
                                <div className={styles["company-2"]}>
                                  <div className={styles["icon-15"]}>
                                    <div className={styles["div-261"]}>
                                      <Phosphor slots={[]} />
                                    </div>
                                  </div>
                                  <div className={styles["div-262"]}>
                                    <h6 className={styles["h6-65"]}>{slots[15] ?? "Warm & friendly"}</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["list-item"]}>
                              <div className={styles["div-124"]}>
                                <Phosphor slots={[]} />
                              </div>
                              <div className={styles["text-29"]}>
                                <div className={styles["div-259"]}>
                                  <h6 className={styles["h6-63"]}>{slots[16] ?? "Audience"}</h6>
                                </div>
                                <div className={styles["div-260"]}>
                                  <h6 className={styles["h6-64"]}>{slots[17] ?? "Young professionals"}</h6>
                                </div>
                              </div>
                            </div>
                            <div className={styles["list-item"]}>
                              <div className={styles["div-124"]}>
                                <Phosphor slots={[]} />
                              </div>
                              <div className={styles["text-29"]}>
                                <div className={styles["div-259"]}>
                                  <h6 className={styles["h6-66"]}>{slots[18] ?? "Location"}</h6>
                                </div>
                                <div className={styles["div-260"]}>
                                  <h6 className={styles["h6-64"]}>{slots[19] ?? "Hyderabad"}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["ai-message"]}>
                        <div className={styles["text-31"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-263"]}>
                            <h6 className={styles["h6-67"]}>{slots[20] ?? "Short captions with a local flavour"}</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles["ai-message"]}>
                        <div className={styles["text-31"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-263"]}>
                            <h6 className={styles["h6-67"]}>{slots[21] ?? "Highlights the menu and daily offers"}</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles["ai-message-2"]}>
                        <div className={styles["text-31"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-263"]}>
                            <h6 className={styles["h6-67"]}>{slots[22] ?? "Avoids hard-sell language"}</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles["ai-message-3"]}>
                        <div className={styles["text-31"]}>
                          <div className={styles["div-13"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["div-263"]}>
                            <h6 className={styles["h6-67"]}>{slots[23] ?? "Brand colours on every visual"}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["text-32"]}>
                      <div className={styles["div-264"]}>
                        <h5 className={styles["h5-4"]}>{slots[24] ?? "AI that knows your brand"}</h5>
                      </div>
                      <div className={styles["div-265"]}>
                        <p className={styles["p-76"]}>{slots[25] ?? "Add your brand voice, company knowledge and content rules so Synq AI creates with the right context."}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["feature-6"]}>
                    <div className={styles["graphic-3"]}>
                      <div className={styles["div-14"]}>
                        <div className={styles["dots-pattern-11"]}>
                          <div className={styles["div-266"]} />
                        </div>
                      </div>
                      <div className={styles["graphic-content"]}>
                        <div className={styles["trigger-3"]}>
                          <div className={styles["tag-6"]}>
                            <div className={styles["div-13"]}>
                              <Phosphor slots={[]} />
                            </div>
                            <div className={styles["div-267"]}>
                              <p className={styles["p-77"]}>{slots[26] ?? "Request"}</p>
                            </div>
                          </div>
                          <div className={styles["action-4"]}>
                            <div className={styles["contenttop-2"]}>
                              <div className={styles["text-33"]}>
                                <div className={styles["div-125"]}>
                                  <h6 className={styles["h6-28"]}>{slots[27] ?? "Create 5 posts"}</h6>
                                </div>
                                <div className={styles["div-268"]}>
                                  <h6 className={styles["h6-68"]}>{slots[28] ?? "For this week"}</h6>
                                </div>
                              </div>
                              <div className={styles["tag-7"]}>
                                <div className={styles["div-269"]}>
                                  <h6 className={styles["h6-69"]}>{slots[29] ?? "Synq AI"}</h6>
                                </div>
                              </div>
                            </div>
                            <div className={styles["divider-3"]} />
                            <div className={styles["div-270"]}>
                              <h6 className={styles["h6-70"]}>{slots[30] ?? "Understands your brand context"}</h6>
                            </div>
                          </div>
                        </div>
                        <div className={styles["connector-3"]}>
                          <div className={styles["div-271"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["connector-4"]} />
                          <div className={styles["div-272"]}>
                            <Phosphor slots={[]} />
                          </div>
                        </div>
                        <div className={styles["response-output"]}>
                          <div className={styles["response"]}>
                            <div className={styles["action-5"]}>
                              <div className={styles["contenttop-3"]}>
                                <div className={styles["div-273"]}>
                                  <h6 className={styles["h6-71"]}>{slots[31] ?? "Drafts"}</h6>
                                </div>
                                <div className={styles["tag-8"]}>
                                  <div className={styles["tag-9"]}>
                                    <div className={styles["div-274"]}>
                                      <h6 className={styles["h6-72"]}>{slots[32] ?? "Formats"}</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["divider-3"]} />
                              <div className={styles["list-7"]}>
                                <div className={styles["div-275"]}>
                                  <h6 className={styles["h6-73"]}>{slots[33] ?? "Creates editable drafts"}</h6>
                                </div>
                                <div className={styles["list-8"]}>
                                  <div className={styles["entry-2"]}>
                                    <div className={styles["div-13"]}>
                                      <Phosphor slots={[]} />
                                    </div>
                                    <div className={styles["content-29"]}>
                                      <div className={styles["icon-16"]}>
                                        <div className={styles["div-124"]}>
                                          <Phosphor slots={[]} />
                                        </div>
                                      </div>
                                      <div className={styles["text-34"]}>
                                        <div className={styles["div-276"]}>
                                          <h6 className={styles["h6-74"]}>{slots[34] ?? "Reel"}</h6>
                                        </div>
                                        <div className={styles["div-277"]}>
                                          <h6 className={styles["h6-75"]}>{slots[35] ?? "draft"}</h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles["entry-2"]}>
                                    <div className={styles["div-13"]}>
                                      <Phosphor slots={[]} />
                                    </div>
                                    <div className={styles["content-30"]}>
                                      <div className={styles["icon-10"]}>
                                        <div className={styles["div-124"]}>
                                          <Phosphor slots={[]} />
                                        </div>
                                      </div>
                                      <div className={styles["text-35"]}>
                                        <div className={styles["text-36"]}>
                                          <div className={styles["div-278"]}>
                                            <h6 className={styles["h6-76"]}>{slots[36] ?? "Carousel"}</h6>
                                          </div>
                                          <div className={styles["div-277"]}>
                                            <h6 className={styles["h6-75"]}>{slots[37] ?? "draft"}</h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles["entry-2"]}>
                                    <div className={styles["div-13"]}>
                                      <Phosphor slots={[]} />
                                    </div>
                                    <div className={styles["content-30"]}>
                                      <div className={styles["icon-9"]}>
                                        <div className={styles["div-124"]}>
                                          <Phosphor slots={[]} />
                                        </div>
                                      </div>
                                      <div className={styles["text-35"]}>
                                        <div className={styles["text-37"]}>
                                          <div className={styles["div-279"]}>
                                            <h6 className={styles["h6-77"]}>{slots[38] ?? "Post"}</h6>
                                          </div>
                                          <div className={styles["div-277"]}>
                                            <h6 className={styles["h6-75"]}>{slots[39] ?? "draft"}</h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["output"]}>
                            <div className={styles["tag-10"]}>
                              <div className={styles["div-13"]}>
                                <Phosphor slots={[]} />
                              </div>
                              <div className={styles["div-280"]}>
                                <p className={styles["p-78"]}>{slots[40] ?? "Output"}</p>
                              </div>
                            </div>
                            <div className={styles["action-6"]}>
                              <div className={styles["contenttop-4"]}>
                                <div className={styles["text-38"]}>
                                  <div className={styles["div-281"]}>
                                    <h6 className={styles["h6-78"]}>{slots[41] ?? "Ready for review"}</h6>
                                  </div>
                                  <div className={styles["div-282"]}>
                                    <h6 className={styles["h6-79"]}>{slots[42] ?? "{Your approval}"}</h6>
                                  </div>
                                </div>
                                <div className={styles["tag-11"]}>
                                  <div className={styles["div-283"]}>
                                    <h6 className={styles["h6-80"]}>{slots[43] ?? "Review"}</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["connector-5"]}>
                          <div className={styles["div-271"]}>
                            <Phosphor slots={[]} />
                          </div>
                          <div className={styles["connector-4"]} />
                          <div className={styles["div-272"]}>
                            <Phosphor slots={[]} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["text-39"]}>
                      <div className={styles["div-284"]}>
                        <h5 className={styles["h5-5"]}>{slots[44] ?? "Meet Synq AI"}</h5>
                      </div>
                      <div className={styles["div-193"]}>
                        <p className={styles["p-59"]}>{slots[45] ?? "Tell Synq AI what you need and get drafts ready to review. You decide when to publish."}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["feature-7"]}>
                    <div className={styles["graphic-4"]}>
                      <div className={styles["div-14"]}>
                        <div className={styles["dots-pattern-11"]}>
                          <div className={styles["div-266"]} />
                        </div>
                      </div>
                      <div className={styles["triggers"]}>
                        <div className={styles["trigger-4"]}>
                          <div className={styles["action-7"]}>
                            <div className={styles["contenttop-5"]}>
                              <div className={styles["text-40"]}>
                                <div className={styles["div-13"]}>
                                  <Phosphor slots={[]} />
                                </div>
                                <div className={styles["div-285"]}>
                                  <h6 className={styles["h6-81"]}>{slots[46] ?? "New idea added"}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["connector-6"]} />
                        <div className={styles["connector-7"]} />
                        <div className={styles["trigger-5"]}>
                          <div className={styles["action-8"]}>
                            <div className={styles["contenttop-6"]}>
                              <div className={styles["text-41"]}>
                                <div className={styles["icon-12"]}>
                                  <div className={styles["div-13"]}>
                                    <Phosphor slots={[]} />
                                  </div>
                                </div>
                                <div className={styles["div-286"]}>
                                  <h6 className={styles["h6-82"]}>{slots[47] ?? "Post creation"}</h6>
                                </div>
                              </div>
                              <div className={styles["tag-5"]}>
                                <div className={styles["div-16"]}>
                                  <h6 className={styles["h6-47"]}>{slots[48] ?? "AI"}</h6>
                                </div>
                              </div>
                            </div>
                            <div className={styles["divider-4"]} />
                            <div className={styles["div-287"]}>
                              <h6 className={styles["h6-83"]}>{slots[49] ?? "Write for {Platform}"}</h6>
                            </div>
                          </div>
                          <div className={styles["action-9"]}>
                            <div className={styles["text-42"]}>
                              <div className={styles["div-13"]}>
                                <Phosphor slots={[]} />
                              </div>
                              <div className={styles["div-288"]}>
                                <h6 className={styles["h6-84"]}>{slots[50] ?? "Done! A caption, hashtags and an Instagram carousel"}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["trigger-6"]}>
                          <div className={styles["action-8"]}>
                            <div className={styles["contenttop-6"]}>
                              <div className={styles["text-43"]}>
                                <div className={styles["icon-12"]}>
                                  <div className={styles["div-13"]}>
                                    <Phosphor slots={[]} />
                                  </div>
                                </div>
                                <div className={styles["div-289"]}>
                                  <h6 className={styles["h6-85"]}>{slots[51] ?? "Visuals"}</h6>
                                </div>
                              </div>
                              <div className={styles["tag-5"]}>
                                <div className={styles["div-16"]}>
                                  <h6 className={styles["h6-47"]}>{slots[52] ?? "AI"}</h6>
                                </div>
                              </div>
                            </div>
                            <div className={styles["divider-4"]} />
                            <div className={styles["div-290"]}>
                              <h6 className={styles["h6-86"]}>{slots[53] ?? "Generate image for {Offer}"}</h6>
                            </div>
                          </div>
                          <div className={styles["action-9"]}>
                            <div className={styles["text-42"]}>
                              <div className={styles["div-13"]}>
                                <Phosphor slots={[]} />
                              </div>
                              <div className={styles["div-288"]}>
                                <h6 className={styles["h6-84"]}>{slots[54] ?? "AI image created and vectorized for editing"}</h6>
                              </div>
                            </div>
                          </div>
                          <div className={styles["action-10"]}>
                            <div className={styles["text-44"]}>
                              <div className={styles["div-13"]}>
                                <Phosphor slots={[]} />
                              </div>
                              <div className={styles["div-291"]}>
                                <h6 className={styles["h6-87"]}>
                                  <span className={styles["span-11"]}>{slots[55] ?? "Carousel with 5 slides"}</span>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className={styles["action-11"]}>
                            <div className={styles["text-44"]}>
                              <div className={styles["div-13"]}>
                                <Phosphor slots={[]} />
                              </div>
                              <div className={styles["div-291"]}>
                                <h6 className={styles["h6-88"]}>{slots[56] ?? "Ready-to-edit content draft"}</h6>
                              </div>
                            </div>
                            <div className={styles["action-12"]}>
                              <div className={styles["text-45"]}>
                                <div className={styles["div-13"]}>
                                  <Phosphor slots={[]} />
                                </div>
                                <div className={styles["div-292"]}>
                                  <h6 className={styles["h6-89"]}>
                                    <span className={styles["span-11"]}>{slots[57] ?? "Brand colours applied"}</span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["text-39"]}>
                      <div className={styles["div-284"]}>
                        <h5 className={styles["h5-5"]}>{slots[58] ?? "Turn ideas into content"}</h5>
                      </div>
                      <div className={styles["div-193"]}>
                        <p className={styles["p-59"]}>{slots[59] ?? "Get captions, posts, carousels and visuals from a single idea, ready to edit."}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["features-4"]}>
              <div className={styles["title-13"]}>
                <div className={styles["h3-9"]}>
                  <div className={styles["div-167"]}>
                    <div className={styles["div-14"]}>
                      <h1 className={styles["h1-7"]}>
                        <span className={styles["span-17"]}>{slots[60] ?? "Everything your social media needs, working together"}</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["container1200"]}>
                <div className={styles["div-293"]}>
                  <div className={styles["div-294"]}>
                    <div className={styles["image-8"]}>
                      <div className={styles["item-14"]}>
                        <div className={styles["content-31"]}>
                          <div className={styles["div-295"]}>
                            <h6 className={styles["h6-90"]}>{slots[61] ?? "Plan and schedule"}</h6>
                          </div>
                          <div className={styles["div-296"]}>
                            <p className={styles["p-79"]}>{slots[62] ?? "Organize your posts in a visual content calendar."}</p>
                          </div>
                        </div>
                        <div className={styles["div-297"]}>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[63] ?? "https://framerusercontent.com/images/SCmhNN0VN3B9Edc9k75MNzipNL4.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[64] ?? "https://framerusercontent.com/images/auJvl5Gq5ir3p38RU9VWIEnYoYo.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[65] ?? "https://framerusercontent.com/images/PE5LzuXyBVwciyvGArluBwTX8PI.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["image-9"]}>
                      <div className={styles["item-15"]}>
                        <div className={styles["content-32"]}>
                          <div className={styles["div-299"]}>
                            <h6 className={styles["h6-91"]}>{slots[66] ?? "Publish across platforms"}</h6>
                          </div>
                          <div className={styles["div-300"]}>
                            <p className={styles["p-80"]}>{slots[67] ?? "Publish to your connected channels from one workspace."}</p>
                          </div>
                        </div>
                        <div className={styles["div-301"]}>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[68] ?? "https://framerusercontent.com/images/Ou9aCyy9MxN1iZCvwiw18hmrA.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[69] ?? "https://framerusercontent.com/images/K4kpX0bZr3WAEDYWuh3lPNOXNIM.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[70] ?? "https://framerusercontent.com/images/JFh7xWMkvn5lhluxEPj7uwq7lU.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-294"]}>
                    <div className={styles["image-8"]}>
                      <div className={styles["item-14"]}>
                        <div className={styles["content-33"]}>
                          <div className={styles["div-295"]}>
                            <h6 className={styles["h6-90"]}>{slots[71] ?? "Manage conversations"}</h6>
                          </div>
                          <div className={styles["div-302"]}>
                            <p className={styles["p-81"]}>{slots[72] ?? "Bring supported social conversations into one place and stay close to your audience."}</p>
                          </div>
                        </div>
                        <div className={styles["div-297"]}>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[73] ?? "https://framerusercontent.com/images/SCmhNN0VN3B9Edc9k75MNzipNL4.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[74] ?? "https://framerusercontent.com/images/auJvl5Gq5ir3p38RU9VWIEnYoYo.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[75] ?? "https://framerusercontent.com/images/Ry4nZ547PkKAVpbSDvz3AKKw90.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["image-9"]}>
                      <div className={styles["item-16"] + " " + styles["rv-5"]} data-reveal>
                        <div className={styles["content-32"]}>
                          <div className={styles["div-299"]}>
                            <h6 className={styles["h6-91"]}>{slots[76] ?? "Understand performance"}</h6>
                          </div>
                          <div className={styles["div-300"]}>
                            <p className={styles["p-80"]}>{slots[77] ?? "Review your analytics and see how your content performs."}</p>
                          </div>
                        </div>
                        <div className={styles["div-301"]}>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[78] ?? "https://framerusercontent.com/images/FHIkx3auZs2MJJRvjQXf45KvCc.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[79] ?? "https://framerusercontent.com/images/PE5LzuXyBVwciyvGArluBwTX8PI.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["logos-4"]}>
                            <div className={styles["logo-5"]}>
                              <div className={styles["instagram-logo-2"]}>
                                <div className={styles["div-298"]}>
                                  <img className={styles["img-21"]} src={slots[80] ?? "https://framerusercontent.com/images/zfYd9gg1MpL7kIJlTlrTBWQfFaU.svg?width=48&height=48"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["image-10"]}>
                    <div className={styles["div-303"]}>
                      <img className={styles["img-22"]} src={slots[81] ?? "https://framerusercontent.com/images/nXGNFkq4ZODi7gLIAeBBhTUkfbE.png?scale-down-to=1024&width=940&height=1210"} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["dots-pattern-12"]}>
                <div className={styles["div-304"]} />
              </div>
            </section>
            <section className={styles["features-5"]}>
              <div className={styles["container-21"]}>
                <div className={styles["title-14"]}>
                  <div className={styles["div-305"]}>
                    <h2 className={styles["h2-5"]}>{slots[82] ?? "Whatever you do, work smarter"}</h2>
                  </div>
                  <div className={styles["div-306"]}>
                    <p className={styles["p-82"]}>{slots[83] ?? "PostSynq supports the people and teams who want a simpler way to manage social media."}</p>
                  </div>
                </div>
                <div className={styles["features-6"]}>
                  <div className={styles["feature-8"]}>
                    <div className={styles["text-46"]}>
                      <div className={styles["div-307"]}>
                        <h6 className={styles["h6-92"]}>{slots[84] ?? "For small businesses & creators"}</h6>
                      </div>
                      <div className={styles["div-308"]}>
                        <p className={styles["p-83"]}>{slots[85] ?? "Manage your social media without spending hours creating posts, writing captions and planning content. Spend more time creating, less time managing."}</p>
                      </div>
                    </div>
                    <a className={styles["link"]} href="https://www.postsynq.in/signup">
                      <div className={styles["div-309"]}>
                        <p className={styles["p-84"]}>{slots[86] ?? "Start free trial"}</p>
                      </div>
                      <div className={styles["div-310"]}>
                        <Phosphor slots={[]} />
                      </div>
                    </a>
                  </div>
                  <div className={styles["div-311"]} />
                  <div className={styles["feature-8"]}>
                    <div className={styles["text-46"]}>
                      <div className={styles["div-307"]}>
                        <h6 className={styles["h6-92"]}>{slots[87] ?? "For marketing teams & agencies"}</h6>
                      </div>
                      <div className={styles["div-308"]}>
                        <p className={styles["p-83"]}>{slots[88] ?? "Organize content creation, publishing and performance tracking in one shared workflow, for your brand or the brands you support."}</p>
                      </div>
                    </div>
                    <a className={styles["link"]} href="./feature">
                      <div className={styles["div-312"]}>
                        <p className={styles["p-85"]}>{slots[89] ?? "Explore features"}</p>
                      </div>
                      <div className={styles["div-310"]}>
                        <Phosphor slots={[]} />
                      </div>
                    </a>
                  </div>
                </div>
                <div className={styles["div-14"]}>
                  <div className={styles["dots-pattern-13"]}>
                    <div className={styles["div-313"]} />
                  </div>
                </div>
              </div>
              <div className={styles["dots-pattern-14"]}>
                <div className={styles["div-314"]} />
              </div>
            </section>
            <section className={styles["features-7"]}>
              <div className={styles["title-15"]}>
                <div className={styles["titlecontainer"]}>
                  <div className={styles["div-315"]}>
                    <h4 className={styles["h4-7"]}>{slots[90] ?? "One platform. A better social media workflow, from your first idea to your results."}</h4>
                  </div>
                </div>
              </div>
              <div className={styles["list-9"]}>
                <div className={styles["item-17"]}>
                  <div className={styles["content-34"]}>
                    <div className={styles["div-316"]}>
                      <h5 className={styles["h5-6"]}>{slots[91] ?? "01"}</h5>
                    </div>
                    <div className={styles["div-317"]}>
                      <p className={styles["p-86"]}>{slots[92] ?? "Create"}</p>
                    </div>
                  </div>
                  <div className={styles["content-34"]}>
                    <div className={styles["div-316"]}>
                      <h5 className={styles["h5-6"]}>{slots[93] ?? "02"}</h5>
                    </div>
                    <div className={styles["div-317"]}>
                      <p className={styles["p-86"]}>{slots[94] ?? "Schedule & publish"}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["item-17"]}>
                  <div className={styles["content-34"]}>
                    <div className={styles["div-316"]}>
                      <h5 className={styles["h5-6"]}>{slots[95] ?? "03"}</h5>
                    </div>
                    <div className={styles["div-317"]}>
                      <p className={styles["p-86"]}>{slots[96] ?? "Engage"}</p>
                    </div>
                  </div>
                  <div className={styles["content-34"]}>
                    <div className={styles["div-316"]}>
                      <h5 className={styles["h5-6"]}>{slots[97] ?? "04"}</h5>
                    </div>
                    <div className={styles["div-317"]}>
                      <p className={styles["p-86"]}>{slots[98] ?? "Analyze"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["dots-pattern-15"]}>
                <div className={styles["div-318"]} />
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
      <div className={styles["div-209"]} />
      <div className={styles["div-210"]}>
        <span className={styles["span-12"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button"]}>
          <SvgGraphic className={styles["svg-10"]} html={"<svg role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"918\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"919\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
