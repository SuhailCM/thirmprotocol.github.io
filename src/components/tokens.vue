<template>
  <div>
    <section class="hero is-medium is-white">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-7">
              <img src="../assets/b.png" />
            </div>
            <div class="column is-offset-1">
              <h1 class="title">T-TOKENS</h1>
              <h2 class="subtitle">are Interest Bearing ERC20 Tokens.</h2>

              <h2
                class="content"
              >(a) T-Tokens generates interest by allocating assets to most paying protocol.</h2>
              <h2
                class="content"
              >(b) T-Tokens allows you to use BTC, LTC, NANO & more non ERC-20 cryptocurrencies on the Ethereum Network.</h2>
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
                <a target="_blank" v-bind:href=" 'https://etherscan.io/address/' + item.address">
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

    <section class="hero is-medium is-white is-hidden-mobile">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered has-text-centered">
            <div class="column">
              <img style="height:100px;" src="../assets/extra/0.png" />
            </div>
            <div class="column">
              <img style="height:100px;" src="../assets/extra/1.png" />
            </div>
            <div class="column">
              <img style="height:100px;" src="../assets/extra/5.png" />
            </div>
            <div class="column">
              <img style="height:100px;" src="../assets/extra/3.png" />
            </div>
            <div class="column">
              <img style="height:100px;" src="../assets/extra/4.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  data() {
    return {
      lot: [],
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "https://thirm.com/tokens.json",
    }).then((responsex) => {
      var temparr = [];
      _.forEach(responsex.data.tokens, function (value) {
        console.log(value.chainId);

        if (value.chainId == 1) {
          temparr.push(value);
        }
      });

      this.lot = temparr;
    });
  },
};
</script>



<style scoped>
.zoom:hover {
  transform: scale(1.05);
}
</style>