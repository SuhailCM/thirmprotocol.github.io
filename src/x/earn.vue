<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <lottie-player
                src="https://thirm.com/animations/earn.json"
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
          title: "HOLD",
          guide:
            "THIRM PROTOCOL is continously burning THIRM TOKEN, which means growth overtime.",
        },
        {
          title: "Provide Liquidity",
          guide:
            "THIRM PROTOCOL is continuously burning THIRM TOKEN. Receive (0.3% + 0.5%) commission for providing Liquidity via the DEX.",
        },
        {
          title: "Thirm Vault (T-Tokens)",
          guide:
            "T-Tokens are the interest earning cryptocurrency. You automatically receive interest from the best lending pool.",
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