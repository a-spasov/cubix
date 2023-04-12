<script setup>
import SiteHeader from '../components/layout/SiteHeader.vue';
import SiteFooter from '../components/layout/SiteFooter.vue';

</script>

<template>
  <div class="desktop">
    <SiteHeader class="header" />
    <aside class="sidebar">
      <div class="tile pt-4 mt-6">
        <div class="tile is-parent is-outlined">
          <article class="tile is-child notification is-success">
            <div class="tile is-vertical">
              <button class="button is-primary">
                Button
                <font-awesome-icon icon="fa-solid fa-user" spin spin-reverse />
              </button>
              <button class="button is-link">
                Button
                <font-awesome-icon icon="fa-regular fa-user" />
              </button>
              <button class="button is-info">
                Button
                <font-awesome-icon icon="fa-solid fa-lightbulb" />
              </button>
              <button class="button is-success">
                Button
              </button>
              <button class="button is-warning">
                Button
              </button>
              <button class="button is-danger">
                Button
              </button>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-9">
          <div>Cubix</div>
        </div>
      </div>
    </aside>
    <section class="main section" style="display: flex; flex-direction: row; column-gap: 48px;">
      <article style="flex: 1 1 0;">
        <h1 class="title is-1">Bulma samples</h1>
        <h2 class="title is-2">Why do we use it?</h2>
        <p class="subtitle is-4 is-spaced">Subtitle 4</p>
        <p class="mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h3 class="title is-3">Why do we use it?</h3>
        <p class="subtitle is-5 is-spaced">Subtitle 5</p>
        <p class="mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h4 class="title is-4">Why do we use it?</h4>
        <p class="subtitle is-6 is-spaced">Subtitle 6</p>
        <p class="mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h5 class="title is-5 is-spaced">Why do we use it?</h5>
        <h6 class="title is-6 is-spaced">Why do we use it?</h6>
        <h6 class="title is-7 is-spaced">Why do we use it?</h6> 
        <p class="mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <button class="button is-primary">Action</button>
      </article>
      <article style="flex: 1 1 0;">
        <h1 class="display mb-10">Mine samples:</h1>
        <h1 class="">Why do we use it?</h1>
        <p class="subtitle-3 mb-5">Subtitle test demo 3</p>
        <p class="mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h2 class="">Why do we use it?</h2>
        <p class="subtitle-4 mb-5">Subtitle 4</p>
        <p class="mb-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h3 class="">Why do we use it?</h3>
        <p class="subtitle-5  mb-6">Subtitle 5</p>
        <p class="mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h4 class="">Why do we use it?</h4>
        <p class="subtitle-6 mb-6">Subtitle 6</p>

        <h5 class="">Why do we use it?</h5>
        <h6 class="">Why do we use it?</h6>
        <p class="block">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p class="block">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem
        </p>
        <p class="block">Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
        </p>
        <p class="block">
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p class="body-2">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p class="caption">caption</p>
        <p class="overline">overline</p>

        <button class="button btn is-primary">Action</button>
      </article>
    </section>
    <SiteFooter class="footer" />
  </div>
</template>

<style>
.desktop {
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}

.sidebar {
  flex: 0 1 300px;
}
</style>

