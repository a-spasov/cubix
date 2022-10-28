<template>
  <div class="tile is-vertical">
    <div class="tile notification is-primary is-12">
      <p class="title">Cubix</p>
      <nav class="navbar">
        <li >Home</li>
        <li>Puzzles</li>
        <li>Collections</li>
        <li>Usefull Links</li>
        <li>Hall of fames</li>
      </nav>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Side bar</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
      <div class="tile is-vertical is-9">
        <!-- <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
            </div>
          </article>
        </div> -->
        <Loader>Cubix</Loader>
      </div>
    </div>
    <div class="tile notification is-primary is-12">
      <p class="title">Footer</p>
    </div>
  </div>
</template>

<script setup>
import Loader from '../views/Loader.vue'
</script>