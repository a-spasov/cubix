<script setup>
import SiteHeader from '../components/layout/SiteHeader.vue';
</script>

<template>
  <div class="tile is-vertical">
    <SiteHeader />
    <div>MAIN</div>
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
    <footer>Some footer text</footer>
  </div>
</template>

