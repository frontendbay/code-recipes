import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { defineConfig } from 'astro/config';
import starlightImageZoom from "starlight-image-zoom";
import buildToolsSidebar from "./src/config/build-tools-sidebar";
import overridenComponents from './src/config/component-overrides';
import designEnggSidebar from "./src/config/design-engineering-sidebar";
import jsSidebar from './src/config/js-sidebar';
import microFrontendSidebar from "./src/config/micro-frontend-sidebar.ts";
import reactSidebar from './src/config/react-sidebar';
import socialLinks from './src/config/social-links';
import unitTestingSidebar from "./src/config/unit-testing-sidebar";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "",
      expressiveCode: {
        plugins: [pluginLineNumbers()],
        defaultProps: {
          showLineNumbers: true,
        },
      },
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
      },
      plugins: [starlightImageZoom({ showCaptions: false })],
      social: socialLinks,
      sidebar: [
        ...jsSidebar,
        ...reactSidebar,
        ...designEnggSidebar,
        ...buildToolsSidebar,
        ...unitTestingSidebar,
        ...microFrontendSidebar,
      ],
      customCss: ["./src/tailwind.css"],
      components: overridenComponents,
    }),
    tailwind({ applyBaseStyles: false }),
  ],
})
