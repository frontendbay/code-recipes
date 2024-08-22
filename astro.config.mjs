import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "React Recipes",
      social: {
        github: "https://github.com/thisisabhinay/react-recipes",
      },
      sidebar: [
        {
          label: "React Hooks",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Effect Logger", slug: "guides/effect-logger" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
})
