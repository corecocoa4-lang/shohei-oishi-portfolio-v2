import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const run = (entry, args = []) => new Promise((resolve, reject) => {
  const child = spawn(process.execPath, [entry, ...args], { cwd: root, stdio: "inherit" });
  child.on("error", reject);
  child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(`Build command exited with ${code}`)));
});

await run(path.join(root, "node_modules/next/dist/bin/next"), ["build"]);

// The portfolio is fully static. Sites serves the exported files through a tiny asset worker.
const dist = path.join(root, "dist");
await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, "server"), { recursive: true });
await cp(path.join(root, "out"), path.join(dist, "client"), { recursive: true, dereference: true });
await writeFile(
  path.join(dist, "server/index.js"),
  "export default { fetch(request, env) { return env.ASSETS.fetch(request); } };\n",
  "utf8",
);
