import { defineConfig } from "cf/config";
import * as entrypoint from "./src/index.ts" with { type: "cf-worker" };
export default defineConfig({ worker: { name: "ax-readonly-cloudflare-20261024", compatibilityDate: "2026-10-24", entrypoint } });
