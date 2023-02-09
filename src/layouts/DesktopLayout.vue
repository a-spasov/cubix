<script setup>
import Header from '../components/layout/Header.vue';
</script>

<template>
  <div class="tile is-vertical">
    <Header />
    <div>MAIN</div>
    <div class="tile pt-4 mt-6">
      <div class="tile is-parent is-outlined">
        <article class="tile is-child notification is-success">
          <div class="tile is-vertical">
            <button class="button is-primary">
              Button
            </button>
            <button class="button is-link">
              Button
            </button>
            <button class="button is-info">
              Button
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
            <button class="bulma-delete-mixin is-large"></button>
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

