import marker from "./release.generated.json";
export default { fetch(request: Request) {
  const path = new URL(request.url).pathname;
  if (path === "/version.json") return Response.json(marker, { headers: { "cache-control": "no-store" } });
  if (path === "/" || path === "/healthz") return new Response(path === "/" ? "<!doctype html><title>Checkout demo</title><h1>Checkout demo</h1>" : "ok");
  return new Response("Not found", { status: 404 });
} } satisfies ExportedHandler;
