<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <lottie-player
                src="https://thirm.com/animations/feat.json"
                background="transparent"
                speed="0.6"
                style="width: 100%; height: 100%"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="column is-offset-2">
              <b-notification
                type="is-link "
                v-model="isActive"
                aria-close-label="Close notification"
              >
                THIRM governance tokens available on Uniswap !
              </b-notification>

              <div class="content box">
                <strong>THIRM PROTOCOL</strong> links various cross-chain cryptocurrencies.
              </div>

              <div class="columns is-vcentered">
                <div class="column">
                  <a href="https://dapp.thirm.com/" target="_blank">
                    <b-button size="is-small">DAPP</b-button>
                  </a>
                </div>
                <div class="column">
                  <a
                    href="https://www.stateofthedapps.com/dapps/thirm"
                    target="_blank"
                  >
                    <b-button size="is-small">STATEOFTHEDAPPS</b-button>
                  </a>
                </div>
                <div class="column">
                  <a
                    href="https://uniswap.info/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"
                    target="_blank"
                  >
                    <b-button size="is-small" type="is-primary"
                      >UNISWAP</b-button
                    >
                  </a>
                </div>
                <div class="column">
                  <a
                    href="https://etherscan.io/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"
                    target="_blank"
                  >
                    <b-button size="is-small">ETHERSCAN</b-button>
                  </a>
                </div>
                <div class="column is-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <links />

    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered is-multiline">
            <div class="column is-6">
              <div class="columns is-multiline">
        
                <div class="column is-4">
                  <div class="box">
                    <p>Diversify</p>
                  </div>
                </div>

                <div class="column is-4">
                  <div class="box">
                    <p>Earn Interest</p>
                  </div>
                </div>

                <div class="column is-4">
                  <div class="box">
                    <p>Financial Security</p>
                  </div>
                </div>

                <div class="column is-12">
                  <div class="box">
                    <p>
                      Use Non-ERC20 cryptocurrencies like BNB, BTC, LTC and NANO
                      on the blockchain. You can use
                      these currencies outside of the Thirm Ecosystem too - no
                      restrictions!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-5 is-offset-1">
              <lottie-player
                src="https://thirm.com/animations/1.json"
                background="transparent"
                speed="1"
                style="width: 100%; height: 100%"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </section>

    <numbers />
    <medium />
  </div>
</template>

<script>
import medium from "../components/medium";
import numbers from "../components/numbers";
import links from "../components/links";

export default {
  components: {
    medium,
    numbers,
    links,
  },
};
</script>

