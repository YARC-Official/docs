// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.yarg.in",
  integrations: [
    starlight({
      title: "YARG Documentation",
      editLink: {
        baseUrl: "https://github.com/YARC-Official/docs/edit/main/",
      },
      logo: {
        replacesTitle: true,
        light: "./src/assets/light-logo.svg",
        dark: "./src/assets/dark-logo.svg",
      },
      favicon: "/favicon.png",
      lastUpdated: true,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/YARC-Official",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/sqpu4R552r",
        },
        {
          icon: "twitter",
          label: "Twitter",
          href: "https://twitter.com/YARGGame",
        },
        {
          icon: "twitch",
          label: "Twitch",
          href: "https://www.twitch.tv/yarggame",
        },
        {
          icon: "youtube",
          label: "Youtube",
          href: "https://www.youtube.com/@YARGGame",
        },
      ],
      sidebar: [
        {
          label: "Home",
          slug: "",
        },
        {
          label: "Troubleshooting",
          items: [
            { slug: "launcher" },
            { slug: "profiles" },
            { slug: "instruments" },
            { slug: "play-modes" },
            { slug: "songs" },
            { slug: "songs/setlist" },
            { slug: "backgrounds" },
            { slug: "modifiers" },
            { slug: "engine" },
            { slug: "advanced" },
            { slug: "faq" },
            { slug: "glossary" },
          ],
        },
        {
          label: "Links",
          items: [
            { label: "Website", link: "https://yarg.in" },
            { label: "Roadmap", link: "https://yarg.in/roadmap" },
            {
              label: "Stable Builds",
              link: "https://github.com/YARC-Official/YARG/releases",
            },
            {
              label: "Nightly Builds",
              link: "https://github.com/YARC-Official/YARG-BleedingEdge/releases",
            },
          ],
        },
      ],
    }),
  ],
});
