  <template>
  <div>
    <section class="hero is-medium vli">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <img class="zoom" src="logo.png" />
            </div>
            <div class="column is-offset-2">
              <div class="content box">
                <strong>THIRM PROTOCOL</strong>
                supercharges your DeFi Performance, access non ERC20 assests on ERC20, earn interest on your assests without locking them, automatic switch to most profitable lending protocols, Right On DeFi.
              </div>

              <div class="columns is-vcentered">
                <div class="column">
                  <a href="https://dapp.thirm.com/" target="_blank">
                    <b-button size="is-small">DAPP</b-button>
                  </a>
                </div>
                <div class="column">
                  <a
                    href="https://app.uniswap.org/#/swap?outputCurrency=0xa93f2a6b50d92bd64848f5ea15164f558b75ce9c"
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
                <div class="column is-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
.vli {
  background-color: #1abc9c;
}

.zoom:hover {
  transform: scale(1.2);
  transition: transform 2s;
}
</style>
