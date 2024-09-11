import { fromHono } from "chanfana";
import { Hono } from "hono";
import { Provinces } from "endpoints/province/provinces";
import { District } from "endpoints/province/districts";
import { Communes } from "endpoints/province/communes";
import { cors } from "hono/cors";
import { Countries } from "endpoints/province/country";

// Start a Hono app
const app = new Hono();
app.use(
  cors({
    origin: [
      "http://localhost:5300",
      "http://localhost:5301",
      "https://v2.konglass.com",
      "https://konglass.com",
      "https://admin.konglass.com",
    ],
    allowMethods: ["GET"],
    credentials: true,
  })
);

// Setup OpenAPI registry
const openapi = fromHono(app, {
  docs_url: process.env.NODE_ENV === "production" ? undefined : "/",
});

openapi.get("/api/countries", Countries);
openapi.get("/api/provinces", Provinces);
openapi.get("/api/districts", District);
openapi.get("/api/communes", Communes);

// Export the Hono app
export default app;
