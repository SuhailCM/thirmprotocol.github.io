
<template>
  <div>
    <section class="hero is-medium is-white">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <lottie-player
                src="https://thirm.com/animations/6.json"
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

              <b-field grouped group-multiline>
                <div class="control">
                  <a
                    href="https://github.com/thirmprotocol/whitepaper/blob/master/english.md"
                    target="_blank"
                  >
                    <b-taglist attached>
                      <b-tag type="is-info" size="is-large">Hinglish</b-tag>
                    </b-taglist>
                  </a>
                </div>
                <div class="control">
                      <a
                    href="https://github.com/thirmprotocol/whitepaper/blob/master/english.md"
                    target="_blank"
                  >
                    <b-taglist attached>
                      <b-tag type="is-info" size="is-large">English</b-tag>
                    </b-taglist>
                       </a>
                </div>
                <div class="control">
                  <b-tooltip label="Coming Soon !" position="is-bottom">
                    <b-taglist attached>
                      <b-tag type="is-info" size="is-large">Chinese</b-tag>
                    </b-taglist>
                  </b-tooltip>
                </div>
                <div class="control">
                  <b-tooltip label="Coming Soon !" position="is-bottom">
                    <b-taglist attached>
                      <b-tag type="is-info" size="is-large">Russian</b-tag>
                    </b-taglist>
                  </b-tooltip>
                </div>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
