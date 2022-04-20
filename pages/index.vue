<template>
  <div
    class="
      flex flex-col
      h-screen
      w-screen
      justify-center
      items-center
      bg-gradient-to-br
      from-neutral-800
      to-background-1
    "
  >
    <h1 id="title" class="text-4xl md:text-5xl lg:text-6xl xxl:text-8xl font-bold">TheIceJi | Docs</h1>
    <p id="subTitle" class="text-base md:text-xl lg:text-2xl xl:text-3xl tracking-wider uppercase opacity-60 xxl:pt-6">
      Coming soon
    </p>
  </div>
</template>

<script>
import gsap from "gsap";
definePageMeta({
  layout: "main",
});

export default {
  methods: {
    AnimTitle() {
      gsap.from("#title", {
        y: "60%",
        opacity: 0,
        delay: 0.6,
      });
      gsap.from("#subTitle", {
        y: "60%",
        opacity: 0,
        delay: 0.8,
      });
    },
  },
  mounted() {
    this.AnimTitle();
  },
};
</script>