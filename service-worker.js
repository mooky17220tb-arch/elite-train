const CACHE_NAME = "elite-train-iphone-cache-v108";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./index.html?v=108",
  "./styles.css?v=108",
  "./app.js?v=108",
  "./manifest.webmanifest?v=108",
  "./icon.svg?v=108",
  "./assets/push-card.svg",
  "./assets/pull-card.svg",
  "./assets/legs-card.svg",
  "./assets/upper-card.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const accept = event.request.headers.get("accept") || "";
  const isDocumentRequest =
    event.request.mode === "navigate" || accept.includes("text/html");

  if (isDocumentRequest) {
    event.respondWith(
      fetch(event.request)
        .then((response) => response)
        .catch(async () => {
          const cachedRequest = await caches.match(event.request);
          if (cachedRequest) return cachedRequest;
          return (
            (await caches.match("./index.html?v=108")) ||
            (await caches.match("./index.html")) ||
            (await caches.match("./"))
          );
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => Response.error());
    })
  );
});
