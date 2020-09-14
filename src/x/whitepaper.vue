
<template>
  <div>
    <section class="hero is-medium is-white">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <lottie-player
                src="/data/6.json"
                background="transparent"
                speed="1"
                style="width: 100%; height: 100%;"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div class="column is-offset-1">
              <div class="subtitle has-text-centered">
                <strong>WHITEPAPER</strong>
              </div>
              <hr />
              <b-field grouped group-multiline>
                <div class="control">
                  <a
                    href="https://github.com/thirmprotocol/Assets/blob/master/whitepaper/english.md"
                    target="_blank"
                  >
                    <b-taglist attached>
                      <b-tag type="is-info" size="is-large">English</b-tag>
                    </b-taglist>
                  </a>
                </div>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
