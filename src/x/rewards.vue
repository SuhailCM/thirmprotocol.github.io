<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <br />
          <div class="columns is-vcentered">
            <div class="column">
              <div class="title">THIRM LIQUIDITY PROVIDERS</div>
              <div class="subtitle">TOTAL REWARD : {{ reward }} THIRM</div>

              <a
                href="https://uniswap.info/pair/0x8ce44024c46545e5ab1d16c326ea157dad7b3c00"
                target="_blank"
              >
                <b-button size="is-small">UNISWAP (THRM-USDC)</b-button>
              </a>
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
                  label="Estimated Reward"
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
      reward: 5000,
      ethprice: 0,
      data: [],
    };
  },
  mounted() {
    axios({
      url: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
      method: "post",
      data: {
        query: `
			  query { token(id : "0xa93f2a6b50d92bd64848f5ea15164f558b75ce9c"){ id derivedETH tradeVolume txCount totalLiquidity }}
				`,
      },
    }).then((result) => {
      this.ethprice =
        parseFloat(result.data.data.token.derivedETH).toFixed(4) || 0;
    });

    axios({
      method: "GET",
      url:
        "https://api.ethplorer.io/getTopTokenHolders/0x8ce44024c46545e5ab1d16c326ea157dad7b3c00?apiKey=freekey&limit=100",
    }).then((response) => {
      this.data = response.data.holders;
    });
  },
};
</script>
