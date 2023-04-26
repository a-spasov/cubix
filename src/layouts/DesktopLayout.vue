<script setup>
import SiteHeader from '../components/layout/SiteHeader.vue';
import SiteFooter from '../components/layout/SiteFooter.vue';

</script>

<template>
  <div class="desktop">
    <SiteHeader class="header" />
    <!-- <aside class="section">
      <div class="columns is-desktop">
        <div class="column">1</div>
        <div class="column">2</div>
        <div class="column">3</div>
        <div class="column">4</div>
      </div>
      <div class="tile is-ancestor pt-4 mt-6">
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
    </aside> -->
    <div class="container is-fullhd is-fluid" style="display: flex; flex-direction: row; column-gap: 24px;">
      <article class="mine" style="flex: 1 1 0;">
        <h1 class="display mb-24 mt-24">CUBIX Display Text</h1>
        <h1 class="">H1 Why do we use it?</h1>
        <p class="subtitle-3 mb-48">Subtitle test demo 3</p>
        <p class="mb-16">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <p class="mb-16">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <p class="mb-16">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <p class="mb-48">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h2>H2 Why do we use it?</h2>
        <p class="subtitle-4 mb-48">Subtitle 4</p>
        <p class="mb-48">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h3 class="mb-32">H3 Why do we use it?</h3>
        <!-- <p class="subtitle-5 mb-24">Subtitle 5</p> -->
        <p class="mb-48">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h4>H4 Why do we use it?</h4>
        <p class="subtitle-6 mb-24">Subtitle 6</p>
        <p class="mb-48">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h5 class="mb-24">H5 Why do we use it?</h5>
        <p class="body-2 mb-16">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem
        </p>
        <p class="body-2 mb-16">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at.
        </p>
        <h6 class="mb-24">H6 Why do we use it?</h6>
        <h2 class="mb-48">Paragraphs with class block</h2>
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
      <article style="flex: 1 1 0;">
        <h1 class="display spaced">CUBIX Display Text</h1>
        <h1 class="">H1 Why do we use it?</h1>
        <p class="subtitle-3 spaced">Subtitle test demo 3</p>
        <p class="body-1 block">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <p class="body-1 block">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <p class="body-1 block">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <p class="body-1 block">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h2 class="">H2 Why do we use it?</h2>
        <p class="subtitle-4 spaced">Subtitle 4</p>
        <p class="body-1 block">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h3 class="spaced">H3 Why do we use it?</h3>
        <!-- <p class="subtitle-5 spaced">Subtitle 5</p> -->
        <p class="body-1 block">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h4>H4 Why do we use it?</h4>
        <p class="subtitle-6 spaced">Subtitle 6</p>
        <p class="body-1 block">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h5 class="spaced">H5 Why do we use it?</h5>
        <p class="body-1 block">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h6 class="spaced">H6 Why do we use it?</h6>
        <p class="body-2 block">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <h2 class="spaced">Paragraphs with class block</h2>
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
        <p class="overline-1">overline 1</p>
        <p class="overline-2">overline 2</p>
        <p class="overline-3">overline 3</p>


        <button class="button btn is-primary">Action</button>
      </article>
    </div>
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

