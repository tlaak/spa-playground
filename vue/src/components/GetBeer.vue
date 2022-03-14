<!--
  This is a simple example atom component that doesn't really do much.
  It has some styles and some code logic to verify that it's getting all
  the props it needs. It doesn't connect to any stores, it doesn't perform
  any api calls and it doesn't even have any event handlers attached to it.

  It is perfectly reusable anywhere in the application without modifications.

  Components like this could be even added in a UI library that can be installed
  and reused in other Bud applications.
-->
<template>
  <div class="get-beer">
    <button type="button" class="get-beer__button" @click="getBeer">
      Show me the beers!
    </button>
    <div v-if="isLoading" class="get-beer__spinner">
      <p>Fetching beer... be patient!</p>
    </div>
    <div v-if="beers" class="get-beer__beers">
      <!-- <ol class="get-beer__beers-list">
        <li v-for="beer of beers" class="get-beer__beers-list-item">
          <div class="get-beer__beers-list-item--beer-name">
            {{ beer.name }}
          </div>
          <div class="get-beer__beers-list-item--beer-tagline">
            {{ beer.tagline }}
          </div>
        </li>
      </ol>-->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class GetBeer extends Vue {
  beers = []
  isLoading = false
  getBeer() {
    // eslint-disable-next-line
    console.log('get beer clicked')
  }
}

export default GetBeer
</script>

<style lang="css" scoped>
.get-beer {
}

.get-beer__button {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: var(--color__background--button);
  border: none;
  color: var(--color__text--button);
  padding: 0.75rem 2rem;

  &:hover {
    background-color: var(--color__background--button-hover);
    box-shadow: 0 0 5px hsl(0, 0%, 50%);
  }
}

.get-beer__spinner {
}

.get-beer__beers {
}

.get-beer__beers-list {
  line-height: 1.5;
  margin: 1rem 0;
}

.get-beer__beers-list-item {
  margin-bottom: 0.5rem;
}

.get-beer__beers-list-item--beer-name {
  font-weight: bold;
}

.get-beer__beers-list-item--beer-tagline {
  font-style: italic;
}
</style>
