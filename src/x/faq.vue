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
          title: "Where do I  buy Thirm ?",
          text:
            "Thirm is avaiable on DEXs, we recommend uniswap to buy and sell your thirm tokens.",
        },
        {
          title: "How does the leaderboard work ?",
          text:
            "Leaderboard is based on the people providing liquidity on Uniswap, the more you provide the bigger part of the airdrop specified you will receive. The reward will be paid out at the end of the Beta and will be based on a random snapshot taken during the month.",
        },
        {
          title: "When is the end of the Beta?",
          text:
            "As with all development it is not easy to know when product is finished but the current plan is to have the product available at  1st week of December.",
        },
        {
          title: "What is the THIRM (THRM) total supply ?",
          text:
            "Supply is at 100,000 THIRM, Governance can mint more, if proposal to do so passes. ",
        },

        {
          title: "Is there a liquidity lock?",
          text:
            "Yes, you can find further information on unicrypt https://unicrypt.network/uniswap-browser/pair/0x8ce44024c46545E5Ab1D16C326Ea157dad7B3c00  ",
        },

        {
          title: "What is the Thirm token good for ?",
          text:
            "As a holder of Thirm you will have the right to vote on the governance of the project, in addition 0.5% of earnings from staking will be paid as fees which are used to buy Thirm from DEX and burn them in order to decrease the supply. ",
        },
        {
          title: "How do i vote ?",
          text:
            "Voting platform is under development, and will allow you to vote via a smart contract influencing every decision THIRM PROTOCOL Makes",
        },
        {
          title: "Will you do marketing?",
          text:
            "We have plans for marketing in the future, but currently the main focus is to release our product.",
        },
      ],
    };
  },
};
</script>
