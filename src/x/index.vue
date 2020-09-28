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
              <div class="content box">
                <strong>THIRM PROTOCOL</strong>
                THIRM PROTOCOL supercharges your DeFi Performance. Access
                non-ERC20 assets on ERC20. Earn interest on your assets without
                locking them. Automatically switch to the most profitable
                lending protocols.
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
                    href="https://uniswap.info/token/0xa93f2a6b50d92bd64848f5ea15164f558b75ce9c"
                    target="_blank"
                  >
                    <b-button size="is-small">UNISWAP</b-button>
                  </a>
                </div>
                <div class="column">
                  <a
                    href="https://etherscan.io/token/0xa93f2a6b50d92bd64848f5ea15164f558b75ce9c"
                    target="_blank"
                  >
                    <b-button size="is-small">ETHERSCAN</b-button>
                  </a>
                </div>

                <div class="column is-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered is-multiline">
            <div class="column is-6">
              <div class="columns is-multiline">
                <div class="column is-12">
                  <div class="box">
                    <p>
                      T-Tokens auto switch to the most profitable
                      interest-paying protocol. The Thirm Protocol allocates
                      itself to the most paying protocol meaning users do not
                      need to pay gas.
                    </p>
                  </div>
                </div>

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
                      on the blockchain and still earn interest. You can use
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

    <medium />
  </div>
</template>

<script>
//import platforms from "../components/platforms";
import medium from "../components/medium";

export default {
  components: {
    // platforms,
    medium,
  },
};
</script>


