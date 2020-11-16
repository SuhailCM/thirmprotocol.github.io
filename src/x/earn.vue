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
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <br />
          <div class="columns is-vcentered">
            <div class="column">
              <div class="title">THIRM LIQUIDITY PROVIDERS</div>
              <div class="subtitle">REWARD : {{ reward }} THIRM EACH WEEK</div>

              <a
                href="https://uniswap.info/pair/0xd912aa12e3cf3458d478da3c629096f4e8bd5f72"
                target="_blank"
              >
                <b-button size="is-small">UNISWAP (THRM-ETH)</b-button> </a
              ><br />
            </div>

            <div class="column is-8 is-offset-1">
              <b-table :data="data" :columns="columns" :hoverable="true">
                <b-table-column field="address" label="Address" v-slot="props">
                  {{ props.row.address }}
                </b-table-column>

                <b-table-column field="share" label="Share" v-slot="props">
                  {{ props.row.share }} %
                </b-table-column>

                <b-table-column
                  field="share"
                  label="Estimated Payout"
                  v-slot="props"
                >
                  {{ ((props.row.share / 100) * reward).toFixed(4) }} THIRM
                </b-table-column>

                <b-table-column
                  field="share"
                  label="Equivalent ETH"
                  v-slot="props"
                >
                  {{ ((props.row.share / 100) * reward * ethprice).toFixed(2) }}
                  ETH
                </b-table-column>
              </b-table>
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
      reward: 200,
      ethprice: 0,
      data: [],
       list: [
        {
          title: "HOLD",
          guide:
            "THIRM PROTOCOL is continuously burning THIRM TOKEN, which means growth over time.",
        },
        {
          title: "Provide Liquidity",
          guide:
            "THIRM PROTOCOL is continuously burning THIRM TOKEN. Receive commission for providing Liquidity via the DEX.",
        },
    
      ],
    };
  },
  mounted() {
    axios({
      url: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
      method: "post",
      data: {
        query: `
			  query { token(id : "0xb526fd41360c98929006f3bdcbd16d55de4b0069"){ id derivedETH tradeVolume txCount totalLiquidity }}
				`,
      },
    }).then((result) => {
      this.ethprice =
        parseFloat(result.data.data.token.derivedETH).toFixed(4) || 0;
    });

    axios({
      method: "GET",
      url:
        "https://api.ethplorer.io/getTopTokenHolders/0xd912aa12e3cf3458d478da3c629096f4e8bd5f72?apiKey=freekey&limit=100",
    }).then((response) => {
      this.data = response.data.holders;
    });
  },
};
</script>

<style scoped>
.style1 {
  height: 250px;
}
</style>