import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import gltf from "vite-plugin-gltf";
import { textureResize } from "@gltf-transform/functions";
import { USDZLoader } from "three-usdz-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    gltf({
      transforms: [textureResize({ size: [1024, 1024] })],
    }),
    {
      name: "usdz-loader-plugin",
      async transform(code, id) {
        if (id.endsWith(".usdz")) {
          return {
            code: `
              import * as THREE from 'three';
              import { USDZLoader } from 'three-usdz-loader';
              const loader = new USDZLoader();
              const group = new THREE.Group();
              const file = ${JSON.stringify(
                id
              )}; // assuming id is the path to your USDZ file
              const loadedModel = await loader.loadFile(file, group);
              loadedModel.clean();
            `,
            map: null,
          };
        }
      },
    },
  ],
  server: {
    // Configure Vite to serve static files properly
    // fs: {
    //   // Specify additional directories to serve files from
    //   strict: false,
    //   allow: ["./public"], // Add the directory containing your USDZ files here
    // },
  },
});
