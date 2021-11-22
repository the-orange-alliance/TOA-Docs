import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    plugins: [
        {
            name: "watch-external",
            buildStart() {
                this.addWatchFile(path.resolve(__dirname, "openapi.yml"));
            },
        },
    ],
});
