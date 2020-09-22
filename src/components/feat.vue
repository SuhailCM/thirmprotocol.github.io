  <template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered is-multiline">
            <div class="column is-5">
              <div class="columns is-multiline">
                <div class="column is-12">
                  <div class="box">
                    <p>T-Tokens auto switches to the most profitable interest-paying protocol, the whole Thirm Protocol allocates itself to the most paying protocol, which means each user doesn't have to pay gas.</p>
                  </div>
                </div>

                <div class="column is-4">
                  <div class="box">
                    <p>Disversify</p>
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
                    <p>Use Non-ERC20 Cryptocurrencies like BNB, BTC, LTC, NANO right on blockchain and still earn interest. You can use these currencies outside Thirm Ecosystem too, no limitations!</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-6 is-offset-1">
              <img src="../assets/protocol.png" />
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
            "Bitfinex is a cryptocurrency exchange owned and operated by iFinex Inc.Based in Hong Kong and registered in the British Virgin Islands.",
        },
        {
          Platform: "Binance",
          Defination:
            "Binance is a cryptocurrency exchange that provides a platform for trading various cryptocurrencies. It is one of the largest cryptocurrency exchange in the world in terms of trading volume. ",
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
