import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "React Recipes",
      plugins: [starlightImageZoom({ showCaptions: false })],
      social: {
        github: "https://github.com/thisisabhinay/react-recipes",
      },
      sidebar: [
        {
          label: "Getting Strated",
          autogenerate: { directory: "react/getting-started" },
        },
        {
          label: "React Hooks",
          autogenerate: { directory: "react/react-hooks" },
        },
        {
          label: "Effects Recipes",
          autogenerate: { directory: "react/effects-recipes" },
        },
        {
          label: "Custom Hooks",
          autogenerate: { directory: "react/custom-hooks" },
        },
        {
          label: "React Recipes",
          autogenerate: { directory: "react/react-recipes" },
        },
        {
          label: "Redux Recipes",
          autogenerate: { directory: "react/redux-recipes" },
        },
        {
          label: "React Router Recipes",
          autogenerate: { directory: "react/react-router-recipes" },
        },
        {
          label: "React Web Workers Recipes",
          autogenerate: { directory: "react/react-worker-recipes" },
        },
        {
          label: "Request Animation Recipes",
          autogenerate: { directory: "react/request-animation-recipes" },
        },
        {
          label: "Testing Recipes",
          autogenerate: { directory: "react/testing-recipes" },
        },
        {
          label: "Performance Optimization",
          autogenerate: { directory: "react/performance-optimization" },
        },
        {
          label: "Design Patterns",
          autogenerate: { directory: "react/design-patterns" },
        },
        {
          label: "Render Patterns",
          autogenerate: { directory: "react/render-patterns" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "react/reference" },
        },
      ],
      customCss: ["./src/tailwind.css"],
      components: {
        PageSidebar: "./src/components/starlight/PageSidebar.astro",
        MarkdownContent: "./src/components/starlight/MarkdownContent.astro",
      },
    }),
    tailwind({ applyBaseStyles: false }),
  ],
})
