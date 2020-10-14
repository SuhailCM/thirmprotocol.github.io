<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-7">
              <img src="../assets/b.png" />
            </div>
            <div class="column is-offset-1">
              <h1 class="title">T-TOKENS</h1>
              <h2 class="subtitle">are Interest Bearing ERC20 Tokens.</h2>

              <h2 class="content">
                (a) T-Tokens generate interest by allocating assets to the most
                paying protocol.
              </h2>
              <h2 class="content">
                (b) T-Tokens allows you to use BTC, LTC, NANO & more non ERC-20
                cryptocurrencies on the Ethereum Network.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-light is-hidden-mobile">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-2" v-for="item in lot" :key="item.symbol">
              <b-tooltip :label="item.name" position="is-top">
                <a
                  target="_blank"
                  v-bind:href="'https://etherscan.io/address/' + item.address"
                >
                  <figure class="image is-128x128 box zoom">
                    <img v-bind:src="item.logoURI.trim()" />
                  </figure>
                </a>
              </b-tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-hidden-mobile">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered has-text-centered">
            <div class="column">
              <img style="height: 100px" src="../assets/extra/0.png" />
            </div>
            <div class="column">
              <img style="height: 100px" src="../assets/extra/1.png" />
            </div>
            <div class="column">
              <img style="height: 100px" src="../assets/extra/5.png" />
            </div>
            <div class="column">
              <img style="height: 100px" src="../assets/extra/3.png" />
            </div>
            <div class="column">
              <img style="height: 100px" src="../assets/extra/4.png" />
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
      lot: [
        {
          name: "Thirm Ethereum",
          symbol: "tETH",
          address: "0x138083bd8a49357b4630733954e9538ed74df105",
          logoURI: "https://thirm.com/icons/tETH.png",
        },
        {
          name: "Thirm Nano",
          symbol: "tNANO",
          address: "0x8bd868574a92994e9c51e501523c255f561b34ad",
          logoURI: "https://thirm.com/icons/tNANO.png",
        },
        {
          name: "Thirm Tether",
          symbol: "tUSDT",
          address: "0xB962776Fa4FaD32F46609A813488C4b62227325f",
          logoURI: "https://thirm.com/icons/tUSDT.png",
        },
        {
          name: "Thirm Dai",
          symbol: "tDAI",
          address: "0xB29c13A70792B5B5D1Ab8e40b92233A16568Fe32",
          logoURI: "https://thirm.com/icons/tDAI.png",
        },
        {
          name: "Thirm Bitcoin",
          symbol: "tBTC",
          address: "0x36910c9695C1286c9377CEbc61D37bDEFcFdeAC6",
          logoURI: "https://thirm.com/icons/tBTC.png",
        },
        {
          name: "Thirm Chainlink",
          symbol: "tLINK",
          address: "0x36910c9695C1286c9377CEbc61D37bDEFcFdeAC6",
          logoURI: "https://thirm.com/icons/tLINK.png",
        },
      ],
    };
  },
};
</script>



<style scoped>
.zoom:hover {
  transform: scale(1.05);
}
</style>