<template>
  <div>
    <template>
      <b-navbar class="vli">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="https://raw.githubusercontent.com/thirmprotocol/Assets/master/logo.png" />
          </b-navbar-item>
        </template>

        <template slot="start">
          <b-navbar-item target="_blank" href="https://dapp.thirm.com">DAPP</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/whitepaper' }">WHITEPAPER</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/team' }">TEAM</b-navbar-item>
        </template>

        <template slot="end">
          <b-navbar-item target="_blank" href="https://medium.com/thirmprotocol">
            <i class="has-text-white fab fa-medium fa-2x"></i>
          </b-navbar-item>
          <b-navbar-item target="_blank" href="https://github.com/thirmprotocol">
            <i class="has-text-white fab fa-github fa-2x"></i>
          </b-navbar-item>
          <b-navbar-item target="_blank" href="https://twitter.com/thirmprotocol">
            <i class="has-text-white fab fa-twitter fa-2x"></i>
          </b-navbar-item>
          <b-navbar-item target="_blank" href="https://discord.com/invite/Fa4vDXj">
            <i class="has-text-white fab fa-discord fa-2x"></i>
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>
  </div>
</template>


<style scoped>
.vli {
  background-color: #1abc9c;
}
</style>
