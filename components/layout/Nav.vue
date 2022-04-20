<template>
  <nav class="absolute w-screen h-24 flex justify-center pt-4 px-4">
    <div
      class="
        container
        rounded-md
        bg-black/40
        shadow-xl
        backdrop-blur-md
        xxl:w-[1440px]
        h-full
        px-7
        py-4
        flex
        justify-between
        items-center
        overflow-hidden
      "
    >
      <div>
        <img
          id="nav_logo"
          src="/logo_white.svg"
          alt="TheIceJi logo"
          class="h-12 w-12"
        />
      </div>
      <div class="flex space-x-4 uppercase">
        <NuxtLink
          id="nav_link1"
          to="https://theiceji.com"
          class="Anim-1 AnimOpacity-60 cursor-pointer"
          >Home</NuxtLink
        >
        <NuxtLink
          id="nav_link2"
          to="https://docs.theiceji.com"
          class="Anim-1 AnimOpacity-60 cursor-pointer"
          >Docs</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
import gsap from "gsap";
definePageMeta({
  layout: "main",
});

export default {
  methods: {
    AnimTitle() {
      gsap.from("nav", {
        y: "-60px",
        opacity: 0,
      });
      gsap.from("#nav_logo", {
        y: "-60px",
        opacity: 0,
        delay: 0.6,
        duration: 0.2,
      });
      gsap.from("#nav_link1", {
        y: "-60px",
        delay: 0.8,
        duration: 0.2,
      });
      gsap.from("#nav_link2", {
        y: "-60px",
        delay: 1,
        duration: 0.2,
      });
    },
  },
  mounted() {
    this.AnimTitle();
  },
};
</script>