<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-6 my-2">
        <div class="bg-dark p-4 text-white h-100">
          <h2>{{ $t('social_share.title') }}</h2>
          <p>
            {{ $t('social_share.text') }}
          </p>
          <div class="share-actions">
            <a
              href="mailto:info@example.com?&subject=&body=Îți mai aduci aminte de cozile de la vot la care am stat în 2014? http://www.votdiaspora.ro"
              target="_blank"
              rel="noopener noreferrer"
              class="share-cta email p-3"
            >
              <img
                src="./../assets/social/email.svg"
                alt="Write us an email"
                width="32"
              />
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.votdiaspora.ro"
              target="_blank"
              rel="noopener noreferrer"
              class="share-cta fb p-3 mx-1"
            >
              <img
                src="./../assets/social/facebook.svg"
                alt="Like us on Facebook"
                width="32"
              />
            </a>
            <a
              href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.votdiaspora.ro&text=Pe%2026%20mai%202019%20diaspora%20are%20un%20cuv%C3%A2nt%20de%20spus.%20Rom%C3%A2nii%20de%20pretutindeni%20au%20dreptul%20de%20a-%C8%99i%20alege%20reprezentan%C8%9Bii%20%C3%AEn%20Parlamentul%20European."
              target="_blank"
              rel="noopener noreferrer"
              class="share-cta tw p-3"
            >
              <img
                src="./../assets/social/twitter.svg"
                alt="Follow us Twitter"
                width="32"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 my-2">
        <div class="bg-dark p-4 text-white h-100">
          <h2>{{ $t('donate_card.title') }}</h2>
          <p>
            {{ $t('donate_card.text') }}
          </p>
          <a
            class="btn btn-lg btn-success text-white"
            href="https://code4.ro/ro/doneaza/"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t('donate') }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.share-actions {
  .share-cta {
    display: inline-block;

    &.fb {
      background: #3b5998;
    }

    &.tw {
      background: #1da1f2;
    }

    &.email {
      background: #fff;
    }

    &:hover,
    &:focus {
      background: #fc0;
    }
  }
}
</style>
