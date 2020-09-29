<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <b-collapse
              class="card"
              animation="slide"
              v-for="(collapse, index) of collapses"
              :key="index"
              :open="isOpen == index"
              @open="isOpen = index"
            >
              <div
                slot="trigger"
                slot-scope="props"
                class="card-header"
                role="button"
              >
                <p class="card-header-title">
                  {{ collapse.title }}
                </p>
                <a class="card-header-icon">
                  <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
                </a>
              </div>
              <div class="card-content">
                <div class="content">
                  {{ collapse.text }}
                </div>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title: "How can i use THIRM ?",
          text:
            "THIRM is Ethereum Token, which means its useable from any Ethereum wallet. We recommend Trust Wallet.",
        },
        {
          title: "How can i trade THIRM ?",
          text:
            "THIRM is avaiable on DEXs, we recommend uniswap to buy and sell your thirm tokens.",
        },
 {
          title: "THIRM (THRM) Max Supply",
          text:
            "Supply is at 100,000 THIRM, Governance can mint more, if proposal to do so passes. ",
        }, {
          title: "How do i Vote ?",
          text:
            "Voting platform is under development, and will allow you to vote via a smart contract influencing every decision THIRM PROTOCOL Makes",
        },
      ],
    };
  },
};
</script>
