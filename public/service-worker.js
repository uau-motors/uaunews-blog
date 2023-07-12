// import { precacheAndRoute } from "workbox-precaching";
// import { registerRoute } from "workbox-routing";

// precacheAndRoute(self.__WB_MANIFEST);

// registerRoute(({ url }) => url.pathname.startsWith("/api/"), new NetworkFirst());

const installEvent = () => {
  self.addEventListener("install", () => {
    console.log("service worker installed");
  });
};
installEvent();

const activateEvent = () => {
  self.addEventListener("activate", () => {
    console.log("service worker activated");
  });
};
activateEvent();
