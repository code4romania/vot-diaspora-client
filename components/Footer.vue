<template>
  <footer class="bg-dark">
    <div class="text-right bg-light py-2 mt-5">
      <div class="container">
        <a
          class="social-link-item mx-1"
          href="https://www.facebook.com/code4romania"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/social/facebook.svg"
            width="45"
            height="45"
            alt="Code4Ro Facebook"
            class="p-2 bg-secondary"
          />
        </a>
        <a
          class="social-link-item mx-1"
          href="https://www.instagram.com/code4romania"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/social/instagram.svg"
            width="45"
            height="45"
            alt="Code4Ro Instagram"
            class="p-2 bg-secondary"
          />
        </a>
        <a
          class="social-link-item mx-1"
          href="https://www.linkedin.com/company/code4romania"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/social/linkedin.svg"
            width="45"
            height="45"
            alt="Code4Ro LinkedIn"
            class="p-2 bg-secondary"
          />
        </a>
        <a
          class="social-link-item mx-1"
          href="https://twitter.com/Code4Romania"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/social/twitter.svg"
            width="45"
            height="45"
            alt="Code4Ro Twitter"
            class="p-2 bg-secondary"
          />
        </a>
        <a
          class="btn btn-lg btn-success text-white ml-1"
          href="https://code4.ro/ro/doneaza/"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('donate') }}</a
        >
      </div>
    </div>
    <div class="container text-white py-4">
      <div class="row">
        <div class="col col-xs-12 col-sm-6 text-center text-sm-left">
          <h3 class="link-title h5">Ecosistem Alegeri</h3>
          <nav>
            <ul class="list-unstyled">
              <!-- <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://votromania.ro/"
                >
                  Vot Romania
                </a>
              </li> -->
              <!-- <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://votemonitor.org/"
                >
                  Monitorizare Vot
                </a>
              </li> -->
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://rezultatevot.ro/"
                >
                  Rezultate Vot
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://atentlavot.ro/ro"
                >
                  Atent la Vot
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.code4.ro/ro/raport-alegeri-monitorizare-vot"
                >
                  Monitorizare Vot
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-xs-12 col-sm-6 text-center text-sm-right">
          <ul class="list-unstyled">
            <li>
              <nuxt-link :to="localePath('cookies-policy')"
                >Politica de cookies</nuxt-link
              >
            </li>
            <li>
              <a
                href="http://bit.ly/2q06tSu"
                target="_blank"
                rel="noopener noreferrer"
                >Abonează-te la newsletter</a
              >
            </li>
          </ul>
          <nuxt-link :to="localePath('index')"
            ><img
              alt="Code4ro"
              src="../assets/code4RoGrey.svg"
              class="mt-3 mb-2" /></nuxt-link
          ><br />
          <span>&copy; 2024 Code for Romania.</span>
          <p>
            Organizație neguvernamentală independentă, neafiliată politic și
            apolitică.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  font-size: 0.9rem;
}
footer a {
  color: #fff;
}

.social-link-item {
  img {
    border-radius: 5px;
  }
}
</style>
<script setup lang="ts"></script>
