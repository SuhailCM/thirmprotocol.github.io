<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div
          ref="medium-widget"
          id="medium-widget"
          class="lcontainer__medium-widget box"
          :class="{'lcontainer__medium-widget--loaded': isMediumLoaded}"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isMediumLoaded: false,
    };
  },
  mounted() {
    this.$loadScript("https://medium-widget.pixelpoint.io/widget.js")
      .then(() => {
        this.initMedium();
      })
      .catch(() => {
        console.error("Can't load Medium publication");
      });
  },
  beforeDestroy() {
    let element = this.$refs["medium-widget"];
    element.innerHTML = "";
    this.$unloadScript("https://medium-widget.pixelpoint.io/widget.js");
  },
  methods: {
    initMedium() {
      window.MediumWidget.Init({
        renderTo: "#medium-widget",
        params: {
          resource: "https://medium.com/thirmprotocol",
          postsPerLine: 4,
          limit: 4,
          picture: "big",
          fields: ["description", "publishAt"],
          ratio: "landscape",
        },
      });

      setTimeout(() => {
        this.isMediumLoaded = true;
      }, 500);
    },
  },
};
</script>
