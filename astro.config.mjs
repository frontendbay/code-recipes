import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { defineConfig } from 'astro/config';
import starlightImageZoom from "starlight-image-zoom";
import overridenComponents from './src/config/component-overrides';
import jsSidebar from './src/config/js-sidebar';
import reactSidebar from './src/config/react-sidebar';
import socialLinks from './src/config/social-links';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Frontend Recipes",
      expressiveCode: {
        plugins: [pluginLineNumbers()],
        defaultProps: {
          showLineNumbers: true
        }
      },
      plugins: [starlightImageZoom({ showCaptions: false })],
      social: socialLinks,
      sidebar: [...jsSidebar, ...reactSidebar],
      customCss: ["./src/tailwind.css"],
      components: overridenComponents,
    }),
    tailwind({ applyBaseStyles: false }),
  ],
})
