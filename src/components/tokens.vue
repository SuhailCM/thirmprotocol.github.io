<template>
  <div>
    <section class="hero is-medium is-white">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-7">
              <img src="/data/b.png" />
            </div>
            <div class="column is-offset-1">
              <h1 class="title">T-TOKENS</h1>
              <h2 class="subtitle">are Interest Bearing ERC20 Tokens.</h2>

              <h2
                class="content"
              >(a) T-Tokens generates interest by allocating assests to most paying protocol.</h2>
              <h2
                class="content"
              >(b) T-Tokens allows you to use BTC, LTC, NANO & more non ERC-20 Cryptocurrencies on Ethereum Network.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-white">
      <div class="hero-body">
        <div class="container">
          <b-tabs position="is-centered" class="block" type="is-toggle">
            <b-tab-item label="Testnet">
              <br />
              <br />
              <div class="columns is-vcentered is-multiline">
                <div
                  class="column is-2"
                  style="height:100px;"
                  v-for="item in lot"
                  :key="item.symbol"
                >
                  <b-taglist attached v-if="item.chainId == 3">
                    <b-tag size="is-small">
                      <a
                        target="_blank"
                        v-bind:href=" 'https://ropsten.etherscan.io/address/' + item.address"
                      >
                        <figure class="image is-64x64">
                          <img
                            class="animate__animated animate__infinite animate__pulse"
                            v-bind:src=" item.logoURI.trim()"
                          />
                        </figure>
                      </a>
                    </b-tag>
                    <b-tag size="is-small">{{ item.symbol }}</b-tag>
                  </b-taglist>
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Mainnet">
              <br />
              <br />
              <div class="columns is-vcentered is-multiline">
                <div
                  class="column is-2"
                  style="height:100px;"
                  v-for="item in lot"
                  :key="item.symbol"
                >
                  <b-taglist attached v-if="item.chainId == 1">
                    <b-tag size="is-small">
                      <a
                        target="_blank"
                        v-bind:href=" 'https://etherscan.io/address/' + item.address"
                      >
                        <figure class="image is-64x64">
                          <img
                            class="animate__animated animate__infinite animate__pulse"
                            v-bind:src=" item.logoURI.trim()"
                          />
                        </figure>
                      </a>
                    </b-tag>
                    <b-tag size="is-small">{{ item.symbol }}</b-tag>
                  </b-taglist>
                </div>
              </div>
            </b-tab-item>
          </b-tabs>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-white">
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

export default {
  data() {
    return {
      lot: null,
    };
  },
  mounted() {
    axios({
      method: "GET",
      url:
        "https://raw.githubusercontent.com/thirmprotocol/Assets/master/tokens.json",
    }).then((responsex) => {
      this.lot = responsex.data.tokens;
    });
  },
};
</script>

