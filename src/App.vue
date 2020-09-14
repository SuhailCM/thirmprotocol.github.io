<template>
  <div id="app">
    <div class="bg"></div>
    <template>
      <b-navbar class="vli" fixed-top="true">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">HOME</b-navbar-item>
        </template>

        <template slot="start">
          <b-navbar-item target="_blank" href="https://dapp.thirm.com">
            <strong>DAPP</strong>
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/whitepaper' }">WHITEPAPER</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/team' }">TEAM</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/contact' }">CONTACT</b-navbar-item>
        </template>

        <template slot="end">
          <b-navbar-item target="_blank" href="https://medium.com/thirmprotocol">
            <i class="fab fa-medium fa-2x"></i>
          </b-navbar-item>
          <b-navbar-item target="_blank" href="https://github.com/thirmprotocol">
            <i class="fab fa-github fa-2x"></i>
          </b-navbar-item>
          <b-navbar-item target="_blank" href="https://twitter.com/thirmprotocol">
            <i class="fab fa-twitter fa-2x"></i>
          </b-navbar-item>
          <b-navbar-item target="_blank" href="https://discord.com/invite/Fa4vDXj">
            <i class="fab fa-discord fa-2x"></i>
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>

    <router-view />

    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="subtitle">Copyright © 2020 THIRM SOLUTIONS</div>
            </div>
            <div class="column">
              <div class="columns">
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
                    <a target="_blank" href="https://discord.com/invite/Fa4vDXj">
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