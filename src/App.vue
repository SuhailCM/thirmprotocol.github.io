<template>
  <div id="app">
    <div class="bg"></div>
    <template>
      <b-navbar :fixed-top="true">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">HOME</b-navbar-item>
        </template>

        <template slot="start">
          <b-navbar-item tag="router-link" :to="{ path: '/earn' }">EARN</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/whitepaper' }">WHITEPAPER</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/about' }">ABOUT</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/contact' }">CONTACT</b-navbar-item>
        </template>

        <template slot="end">
          <b-navbar-item target="_blank" href="https://medium.com/thirmprotocol">
            <span class="has-text-dark">
              <i class="fab fa-medium fa-2x"></i>
            </span>
          </b-navbar-item>
          <b-navbar-item target="_blank" href="https://github.com/thirmprotocol">
            <span class="has-text-dark">
              <i class="fab fa-github fa-2x"></i>
            </span>
          </b-navbar-item>
          <b-navbar-item target="_blank" href="https://twitter.com/thirmprotocol">
            <span class="has-text-dark">
              <i class="fab fa-twitter fa-2x"></i>
            </span>
          </b-navbar-item>
          <b-navbar-item target="_blank" v-bind:href="discord">
            <span class="has-text-dark">
              <i class="fab fa-discord fa-2x"></i>
            </span>
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>

    <router-view />

    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <div class="subtitle">Copyright © 2020 THIRM SOLUTIONS</div>
            </div>
            <div class="column">
              <div class="columns">
                <div class="column">
                  <center>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/thirm/?viewAsMember=true"
                    >
                      <span class="has-text-dark">
                        <i class="fab fa-linkedin fa-3x"></i>
                      </span>
                    </a>
                  </center>
                </div>

                <div class="column">
                  <center>
                    <a target="_blank" href="https://medium.com/thirmprotocol">
                      <span class="has-text-dark">
                        <i class="fab fa-medium fa-3x"></i>
                      </span>
                    </a>
                  </center>
                </div>
                <div class="column">
                  <center>
                    <a target="_blank" href="https://github.com/thirmprotocol">
                      <span class="has-text-dark">
                        <i class="fab fa-github fa-3x"></i>
                      </span>
                    </a>
                  </center>
                </div>
                <div class="column">
                  <center>
                    <a target="_blank" href="https://twitter.com/thirmprotocol">
                      <span class="has-text-dark">
                        <i class="fab fa-twitter fa-3x"></i>
                      </span>
                    </a>
                  </center>
                </div>
                <div class="column">
                  <center>
                    <a target="_blank" v-bind:href="discord">
                      <span class="has-text-dark">
                        <i class="fab fa-discord fa-3x"></i>
                      </span>
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<style scoped>
.bg {
  animation: slide 10s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #1abc9c 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>


<script>
import axios from "axios";

export default {
  data() {
    return {
      discord: "https://discord.com/widget?id=712795894982115380&theme=dark",
    };
  },
  mounted() {
    try {
      axios({
        method: "GET",
        url: "https://discord.com/api/guilds/712795894982115380/widget.json",
      }).then((responsex) => {
        this.discord =
          responsex.data.instant_invite ||
          "https://discord.com/widget?id=712795894982115380&theme=dark";
      });
    } catch (error) {
      console.log("no discord");
    }
  },
};
</script>
