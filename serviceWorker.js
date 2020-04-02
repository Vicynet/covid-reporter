const staticCovidReporter = "covid-19-reporter-v1"
const assets = [
  "/",
  "/index.html",
  "/index.html",
  "/prevention.html",
  "/symptoms.html",
  "/diagnosis.html",
  "/covid-bot.html",
  "/css/main.css",
  "/css/covidbot.css",
  "/covidjs/covidjs.js",
  "/covidjs/app.js",
  "/covidjs/botstatus.js",
  "/covidjs/status.js",
  "/covidjs/jquery-1.12.3.min.js",
  "/dist/autosize.min.js",
  "/dist/jquery.convform.js",
  "/dist/jquery.convform.css",
  "/dist/jquery.convform.min.js",
  "/dist/jquery.convform.min.css",
  "/images/breath.svg",
  "/images/chatbot.svg",
  "/images/chat.svg",
  "/images/contact.svg",
  "/images/cough.svg",
  "/images/dash.svg",
  "/images/death.svg",
  "/images/diag-hover.svg",
  "/images/diag.svg",
  "/images/diagnosis.svg",
  "/images/face.svg",
  "/images/fever.svg",
  "/images/home-hover.svg",
  "/images/home.svg",
  "/images/mask.svg",
  "/images/prev-hover.svg",
  "/images/prev.svg",
  "/images/prevention.svg",
  "/images/recover.svg",
  "/images/response.svg",
  "/images/SC-footer-icon.svg",
  "/images/sc-icon.ico",
  "/images/sc-icon.png",
  "/images/sc-icon.svg",
  "/images/sc-icon72.png",
  "/images/sc-icon96.png",
  "/images/sc-icon144.png",
  "/images/self.svg",
  "/images/shake.svg",
  "/images/symptoms.svg",
  "/images/symp.svg",
  "/images/wash.svg",
  "/images/Whatsapp.svg",
  "/images/Twitter.svg",
  "/images/Facebook.svg",
  "/images/Call.svg",
  "/images/calls.svg",
  "/images/Sms.svg",
  "/images/Sms.svg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCovidReporter).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })