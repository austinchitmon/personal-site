import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const allowedOrigins = [
  "http://localhost:4200",
  "https://chitmon.com",
];

serve(async (req) => {
  const origin = req.headers.get("origin") ?? "";
  const responseHeaders = new Headers();
  responseHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  responseHeaders.set(
    "Access-Control-Allow-Headers",
    "authorization, x-client-info, apikey, content-type",
  );
  // Optional: You can also set Access-Control-Max-Age to cache preflight responses
  // responseHeaders.set("Access-Control-Max-Age", "86400"); // 24 hours

  // Set Access-Control-Allow-Origin if the origin is in the allowed list
  if (allowedOrigins.includes(origin)) {
    console.log(`origin allowed ${origin} with method ${req.method}`);
    responseHeaders.set("Access-Control-Allow-Origin", origin);
  }
  // Handle preflight (OPTIONS) request
  if (req.method === "OPTIONS") {
    // If 'origin' was not in 'allowedOrigins', 'Access-Control-Allow-Origin' header will not be set,
    // and the browser will (correctly) block the subsequent request.
    return new Response("ok", { headers: responseHeaders });
  }

  // Handle actual request
  // At this point, responseHeaders contains Access-Control-Allow-Origin if the origin was valid.
  // If not, the browser will block the client from reading the response.

  // If the origin is not allowed for a non-OPTIONS request, you could return a 403 Forbidden response here.
  // However, the browser will block it anyway due to missing CORS headers if not set above.
  // if (!allowedOrigins.includes(origin)) {
  //   responseHeaders.set("Content-Type", "application/json");
  //   return new Response(JSON.stringify({ error: "Origin not allowed" }), {
  //     status: 403,
  //     headers: responseHeaders
  //   });
  // }

  const apiKey = Deno.env.get("THE_CAT_API_KEY");
  if (!apiKey) {
    responseHeaders.set("Content-Type", "application/json"); // Ensure JSON content type for error
    return new Response(JSON.stringify({ error: "Missing API Key" }), {
      status: 500,
      headers: responseHeaders, // Pass all accumulated headers
    });
  }

  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search", {
      headers: { "x-api-key": apiKey },
    });

    console.log("TheCatAPI response status:", res.status);

    if (!res.ok) {
      const errorText = await res.text(); // Get more details from the error response
      console.error(
        `TheCatAPI request failed with status ${res.status}: ${errorText}`,
      );
      responseHeaders.set("Content-Type", "application/json");
      return new Response(
        JSON.stringify({
          error: "Failed to fetch from TheCatAPI",
          details: errorText,
        }),
        {
          status: res.status, // Use the status from the failed API call
          headers: responseHeaders,
        },
      );
    }

    const data = await res.json();
    const imageUrl = data?.[0]?.url;
    console.log("Image URL:", imageUrl);

    responseHeaders.set("Content-Type", "application/json"); // Set content type for successful response
    console.log(
      "Final headers for actual request:",
      Object.fromEntries(responseHeaders.entries()),
    );

    return new Response(JSON.stringify({ imageUrl }), {
      status: 200,
      headers: responseHeaders,
    });
  } catch (error: any) {
    console.error("An unexpected error occurred:", error);
    responseHeaders.set("Content-Type", "application/json");
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error?.message || "",
      }),
      {
        status: 500,
        headers: responseHeaders,
      },
    );
  }
});
