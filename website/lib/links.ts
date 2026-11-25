/**
 * Every official URL, profile and contact detail used on the website.
 * Change a destination here and every page, the navbar and the footer follow.
 *
 * The generated Framer pages (app/_framer/**) reference these values instead of
 * hard-coded URLs: tools/framer-import/convert.mjs maps Framer's links onto this
 * file (see LINK_RULES there). Keep this file plain TypeScript with only
 * erasable syntax (`as const`), because the converter imports it directly.
 *
 * Verified 24 Nov 2026:
 * - The PostSynq app lives on www.postsynq.in (login, signup, dashboard and
 *   legal/terms all respond). "postsync.in" (without q) does not resolve in DNS,
 *   so it is not used.
 * - /dashboard redirects to /login for signed-out visitors (expected).
 */
export const OFFICIAL_LINKS = {
  postsynq: {
    website: "https://www.postsynq.in/",
    instagram: "https://www.instagram.com/postsynqxatspeed?hvrq=MWVzeG53anhkbjlzbw==",
    facebook: "https://www.facebook.com/share/193hNoG3RX/",
    linkedin: "https://www.linkedin.com/company/postsynq/",
    email: "postsynq586@gmail.com",
    mailto: "mailto:postsynq586@gmail.com",
    phone: "+91 95821 22999",
    tel: "tel:+919582122999",
  },

  /** The PostSynq web application (opened in a new tab, as on the Framer site). */
  app: {
    login: "https://www.postsynq.in/login",
    signup: "https://www.postsynq.in/signup",
    dashboard: "https://www.postsynq.in/dashboard",
    terms: "https://www.postsynq.in/legal/terms",
  },

  atspeed: {
    website: "https://atspeedinnovations.com/",
    instagram: "https://www.instagram.com/atspeed.innovations?fqnt=bzIxb3drc3BlemN4",
    facebook: "https://www.facebook.com/share/1EyHp3Jpq3/",
    linkedin: "https://www.linkedin.com/company/atspeed-innovations/",
    email: "info@atspeedinnovations.com",
    mailto: "mailto:info@atspeedinnovations.com",
  },

  /** Marketing site routes. Features is /feature (singular). */
  routes: {
    home: "/",
    about: "/about",
    features: "/feature",
    solutions: "/solutions",
    pricing: "/pricing",
    contact: "/contact",
    privacy: "/privacy",
  },
} as const
