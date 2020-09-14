<template>
  <div id="app">
    <div class="bg"></div>
    <navbar />
    <router-view />
    <foot />
  </div>
</template>

<script>
import navbar from "./components/navbar";
import foot from "./components/foot";

export default {
  name: "App",
  components: {
    navbar,

    foot,
  },
};
</script>


<style scoped>
.bg {
  animation: slide 10s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #1abc9c 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>