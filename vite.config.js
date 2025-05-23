import { join, dirname } from "path";
import { fileURLToPath } from "url";

import viteReact from "@vitejs/plugin-react";
import viteFastifyReact from "@fastify/react/plugin";

const path = fileURLToPath(import.meta.url);

export default {
  root: join(dirname(path), "client"),
  base: "/aura/minimalPoC/", // ✨ Important for asset paths
  plugins: [viteReact(), viteFastifyReact()],
  ssr: {
    external: ["use-sync-external-store"],
  },
};
