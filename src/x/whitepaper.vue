<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <lottie-player
                src="https://thirm.com/animations/whitepaper.json"
                background="transparent"
                speed="1"
                style="width: 100%; height: 100%"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="column is-offset-1">
              <div class="columns is-vcentered is-multiline">
                <div class="column is-3" v-for="item in list" :key="item.title">
                  <div class="title has-text-centered">
                    <a
                      target="_blank"
                      v-bind:href="
                        'https://thirm.com/whitepaper/' + item.title + '.html'
                      "
                    >
                      <b-button size="is-large">{{ item.title }}</b-button>
                    </a>
                  </div>
                </div>
              </div>
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
          title: "ENGLISH",
        },
      ],
    };
  },
};
</script>


