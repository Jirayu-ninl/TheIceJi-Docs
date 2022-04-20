<template>
  <LayoutNav />
  <slot />
</template>

<script setup>
const titleDefault = ref("TheIceJI | Docs");
const descriptionDefault = "Docs of TheIceJi Products, and Services";
const url = "https://TheIceJI.com";
const author = "Jirayu Ninlapun";

useHead({
  titleDefault,
  meta: [
    { charset: "utf-8" },
    {
      name: "viewport",
      content:
        "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover",
    },
    { name: "language", content: "english" },
    { httpEquiv: "content-type", content: "text/html" },
    { name: "author", content: author },
    { name: "designer", content: author },
    { name: "publisher", content: author },
    { name: "keywords", content: "Docs of TheIceJi Products" },
    {
      hid: "description",
      name: "description",
      content: descriptionDefault,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: titleDefault,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: descriptionDefault,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "img/cover.jpg",
    },
  ],
  link: [
    {
      rel: "icon",
      href: "logo_white.svg",
    },
    {
      rel: "apple-touch-icon",
      href: "logo_white.svg",
    },
    {
      rel: "apple-touch-startup-image",
      href: "logo_white.svg",
    },
    {
      rel: "manifest",
      href: "manifest.json",
    },
    {
      rel: "mask-icon",
      color: "#000000",
      href: "logo_white.svg",
    },
    {
      rel: "shortcut icon",
      href: "logo_white.svg",
    },

    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Prompt:300,400,500,700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap",
    },
  ],
});
</script>