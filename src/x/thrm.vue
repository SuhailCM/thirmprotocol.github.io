<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <lottie-player
                src="https://thirm.com/animations/3.json"
                background="transparent"
                speed="1"
                style="width: 100%; height: 100%"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="column">
              <div class="columns is-vcentered is-multiline">
                <div class="column is-6" v-for="item in list" :key="item.title">
                  <div class="box style1">
                    <strong>{{ item.title }}</strong>
                    <hr />
                    {{ item.guide }}
                  </div>
                </div>
              </div>

              <div class="columns is-vcentered">
                <div class="column">
                  <a
                    href="https://uniswap.info/token/0xa93f2a6b50d92bd64848f5ea15164f558b75ce9c"
                    target="_blank"
                  >
                    <b-button size="is-small" expanded>UNISWAP</b-button>
                  </a>
                </div>
                <div class="column">
                  <a
                    href="https://etherscan.io/token/0xa93f2a6b50d92bd64848f5ea15164f558b75ce9c"
                    target="_blank"
                  >
                    <b-button size="is-small" expanded>ETHERSCAN</b-button>
                  </a>
                </div>

                <div class="column is-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="title has-text-centered">MAX/TOTAL SUPPLY</div>
          <br />
          <br />
          <div class="columns">
            <div class="column">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_Az1u8i.json"
                background="transparent"
                speed="0.3"
                style="width: 100%; height: 100%"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="column">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_UXIeIi.json"
                background="transparent"
                speed="0.3"
                style="width: 100%; height: 100%"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="column">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_UXIeIi.json"
                background="transparent"
                speed="0.3"
                style="width: 100%; height: 100%"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="column">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_UXIeIi.json"
                background="transparent"
                speed="0.3"
                style="width: 100%; height: 100%"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="column">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_UXIeIi.json"
                background="transparent"
                speed="0.3"
                style="width: 100%; height: 100%"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="column">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_UXIeIi.json"
                background="transparent"
                speed="0.3"
                style="width: 100%; height: 100%"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>




<script>
export default {
  data() {
    return {
      list: [
        {
          title: "Store of Value",
          guide: "THIRM PROTOCOL uses THIRM TOKEN as a store of value.",
        },

        {
          title: "Governance Token",
          guide: "Protocol earnings are distributed among token holders.",
        },
      ],
    };
  },
};
</script>



<style scoped>
.style1 {
  height: 250px;
}
</style>