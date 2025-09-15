import { serveFile } from "@std/http/file-server";

Deno.serve((req: Request) => {
  return serveFile(req, "./index.html");
});
