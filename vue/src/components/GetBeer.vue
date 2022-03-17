<script setup lang="ts">
import { ref } from 'vue'
import { getBeer } from '@/services/beerService'
import type { Beer } from '@/types/beer'
import BeerItem from './BeerItem.vue'

const beers = ref<Beer[]>([])
const isLoading = ref(false)

const fetchBeer = async () => {
  isLoading.value = true
  beers.value = await getBeer()
  isLoading.value = false
}
</script>

<template>
  <div class="get-beer">
    <button type="button" class="get-beer__button" @click="fetchBeer">
      Show me the beers!
    </button>
    <div v-if="isLoading" class="get-beer__spinner">
      <p>Fetching beer... be patient!</p>
    </div>
    <div v-if="beers" class="get-beer__beers">
      <ol class="get-beer__beers-list">
        <li
          v-for="beer of beers"
          :key="beer.id"
          class="get-beer__beers-list-item"
        >
          <BeerItem>
            <template #beer>
              {{ beer.name }}
            </template>
            <template #tagline>
              {{ beer.tagline }}
            </template>
          </BeerItem>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.get-beer {
}

.get-beer__button {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: var(--color__background--button);
  border: none;
  color: var(--color__text--button);
  padding: 0.75rem 2rem;
}

.get-beer__button:hover {
  background-color: var(--color__background--button-hover);
  box-shadow: 0 0 5px hsl(0, 0%, 50%);
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
</style>
