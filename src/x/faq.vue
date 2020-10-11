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
          title: "Getting THIRM Tokens",
          text: "THIRM Tokens are not for sale by the team, only way to obtain THIRM Tokens is contacting/buying/trading from current holders. Uniswap Exchange is best place for you to find these traders.",
        },
        {
          title: "THIRM Tokens Supply",
          text: "Max Supply is at 100,000 THIRM. Governance can mint more if needed. ",
        },
        {
          title: "THIRM Tokens Uses",
          text: "Thirm Token is your governance share in Thirm Protocol, all holders decide future of Thirm Protocol.",
        },
 {
          title: "THIRM Tokens Value",
          text: "Thirm Token holds no value, Thirm Token is only used to govern/operate/manage Thirm Protocol, it has no real world value.",
        },
    
      ],
    };
  },
};
</script>
