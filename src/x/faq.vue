<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <lottie-player
              src="https://thirm.com/animations/faq.json"
              background="transparent"
              speed="1"
              style="width: 100%; height: 100%"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div class="column is-offset-1">
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
          title: "THIRM Token",
          text:
            "THIRM Token is governance/ownership tracking smart contract written on ethereum blockchain.",
        },
        {
          title: "THIRM Tokens Sale",
          text:
            "THIRM Tokens are not for sale by the team, we never had any token sale, the only way to obtain THIRM Tokens is by contacting/buying/trading from current tokens holders.",
        },
        {
          title: "THIRM Tokens Supply",
          text:
            "Tokens are burned regularly by DAPP users and minted by company to cover server and salary expanses. So a fixed supply does not exist on THIRM Token. ",
        },
        {
          title: "THIRM Tokens Uses",
          text:
            "Thirm Token is your governance share in Thirm Protocol, all holders decide future of Thirm Protocol.",
        },
        {
          title: "THIRM Tokens Value",
          text:
            "Thirm Token holds no value, Thirm Token is only used to govern/operate/manage Thirm Protocol, it has no real world value.",
        },
       
        {
          title: "Security Disclosure",
          text:
            "Thirm Protocol is very secure but understand this all software/code can have bugs/vulnerability, which is why its completely your responsibility to manage your funds, in case of any mishappening Thirm Solutions or its developers are not liable for any loss.",
        },
        {
          title: "Funding Disclosure",
          text:
            "Thirm protocol creation and management are privately funded by its founder Aman S, we did not have any token sales, VC, private or public funding at any point in time.",
        },
        {
          title: "Liability Disclosure",
          text:
            "You are resposbile for everything, Thirm Solutions or its members do not hold any Resposbilties/Liability for your actions.",
        },
      ],
    };
  },
};
</script>
