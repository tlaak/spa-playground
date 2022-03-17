<script lang="ts">
  import BeerItem from "./BeerItem.svelte";
  import type { Beer } from "../types/beer";
  import { getBeer } from "../services/beerService";
  export const name = "Foo bar";

  let beers: Beer[] = [];
  let isLoading = false;

  const fetchBeer = async () => {
    isLoading = true;
    beers = await getBeer();
    isLoading = false;
  };
</script>

<main>
  <button on:click={fetchBeer} class="get-beer__button"
    >Show me the beers!</button
  >
  {#if isLoading}
    <p>Fetching beer... be patient!</p>
  {/if}
  <ol class="get-beer__beers-list">
    {#each beers as beer}
      <li>
        <BeerItem>
          <svelte:fragment slot="beer">{beer.name}</svelte:fragment>
          <svelte:fragment slot="tagline">{beer.tagline}</svelte:fragment>
        </BeerItem>
      </li>
    {/each}
  </ol>
</main>

<style>
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
