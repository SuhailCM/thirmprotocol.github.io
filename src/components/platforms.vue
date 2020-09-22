<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_U8MhmH.json"
                background="transparent"
                speed="1"
                style="width: 100%; height: 100%;"
                loop
                autoplay
              ></lottie-player>

              <br />
              <div class="subtitle has-text-centered">SUPPORTED PLATFORMS</div>
            </div>
            <div class="column">
              <div class="columns is-vcentered is-multiline">
                <div class="column is-6" v-for="item in list" :key="item.Platform">
                  <div class="box style1">
                    <strong>{{ item.Platform}}</strong>
                    <hr />
                    {{item.Defination}}
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
          Platform: "Bitfinex",
          Defination:
            "Bitfinex is a cryptocurrency exchange owned and operated by iFinex Inc.",
        },
        {
          Platform: "Binance",
          Defination:
            "Binance is one of the largest cryptocurrency exchange in the world in terms of trading volume. ",
        },
        {
          Platform: "AAVE",
          Defination:
            "Aave is a decentralized platform which is an open source and non-custodial protocol enabling the creation of money markets. ",
        },
        {
          Platform: "Staking",
          Defination:
            "It is a processe in which user earns money while holding crypto-assets.",
        },
        {
          Platform: "Compound",
          Defination:
            "Compound is an algorithmic, autonomous interest rate protocol built for developers, to unlock a universe of open financial applications.",
        },
        {
          Platform: "B2B",
          Defination:
            "Business-to-business is a situation where one business makes a commercial transaction with another.",
        },
      ],
    };
  },
};
</script>



<style scoped>
.style1 {
  height: 220px;
}
</style>