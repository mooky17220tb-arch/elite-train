const CACHE_NAME = "elite-train-iphone-cache-v86";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./index.html?v=86",
  "./styles.css?v=86",
  "./app.js?v=86",
  "./manifest.webmanifest?v=86",
  "./icon.svg?v=86",
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
        .catch(
          () =>
            caches.match(event.request).then((cached) => {
              if (cached) return cached;
              return (
                caches.match("./index.html?v=81") ||
                caches.match("./index.html") ||
                caches.match("./")
              );
            })
        )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(
        () => caches.match("./index.html?v=81") || caches.match("./index.html")
      );
    })
  );
});
