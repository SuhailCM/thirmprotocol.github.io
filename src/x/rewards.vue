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

            <div class="column is-7 is-offset-1">
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
      data: [],
    };
  },
  mounted() {
    axios({
      method: "GET",
      url:
        "https://api.ethplorer.io/getTopTokenHolders/0x8ce44024c46545e5ab1d16c326ea157dad7b3c00?apiKey=freekey&limit=10",
    }).then((response) => {
      this.data = response.data.holders;
    });
  },
};
</script>
