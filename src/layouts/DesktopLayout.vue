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
    <section class="main section" style="display: flex; flex-direction: row; column-gap: 24px;">
      <article style="flex: 1 1 0;">
        <h1 class="title is-1">Bulma samples</h1>
        <h2 class="title is-2">Why do we use it?</h2>
        <h3 class="title is-3">Why do we use it?</h3>
        <h4 class="title is-4">Why do we use it?</h4>
        <h5 class="title is-5">Why do we use it?</h5>
        <h6 class="title is-6">Why do we use it?</h6>
        <h6 class="title is-7">Why do we use it?</h6> 

        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </article>
      <article style="flex: 1 1 0;">
        <h1 class="display" style="letter-spacing: 1.5px;">Mine samples:</h1>
        <h1 class="" style="letter-spacing: 0.5px;">Why do we use it?</h1>
        <h2 class="" style="letter-spacing: 0px;">Why do we use it?</h2>
        <h3 class="" style="letter-spacing: 0.25px;">Why do we use it?</h3>
        <h4 class="" style="letter-spacing: 0px;">Why do we use it?</h4>
        <h5 class="" style="letter-spacing: 0.15px;">Why do we use it?</h5>
        <h6 class="" style="letter-spacing: 0.15px;">Why do we use it?</h6>
        <p>
          Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </article>
      <article style="flex: 1 1 0;">
        <h1 class="display" style="letter-spacing: 1.5px;">Mine samples:</h1>
        <h1 class="" style="letter-spacing: 1px;">Why do we use it?</h1>
        <h2 class="" style="letter-spacing: 1px;">Why do we use it?</h2>
        <h3 class="" style="letter-spacing: 0.75px;">Why do we use it?</h3>
        <h4 class="" style="letter-spacing: 0.5px;">Why do we use it?</h4>
        <h5 class="" style="letter-spacing: 0.35px;">Why do we use it?</h5>
        <h6 class="" style="letter-spacing: 0.25px;">Why do we use it?</h6>
        <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
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

