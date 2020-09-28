<template>
  <div>
    <section class="hero is-medium is-white">
      <div class="hero-body">
        <div class="container">
          <center>WORK IN PROGRESS</center>

          <br />
          <div class="columns is-vcentered">
            <div class="column">TOP 10 Liduidity Providers</div>

            <div class="column is-offset-1">
              <b-table
                :data="data"
                :columns="columns"
                :hoverable="true"
              ></b-table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-white">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">TOP 10 Token Holders</div>

            <div class="column is-offset-1">
              <b-table
                :data="data2"
                :columns="columns"
                :hoverable="true"
              ></b-table>
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
      data: [],
      data2: [],
      columns: [
        {
          field: "address",
          label: "Address",
        },
        {
          field: "share",
          label: "Share",
        },
      ],
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

    axios({
      method: "GET",
      url:
        "https://api.ethplorer.io/getTopTokenHolders/0xa93f2a6b50d92bd64848f5ea15164f558b75ce9c?apiKey=freekey&limit=10",
    }).then((response) => {
      this.data2 = response.data.holders;
    });
  },
};
</script>
