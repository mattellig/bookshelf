import type { Config } from "tailwindcss";
import { createPlugin } from "windy-radix-palette";

const colors = createPlugin();

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [colors.plugin],
} satisfies Config;
