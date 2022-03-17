<div>
  <div class="get-beer__beers-list-item--beer-name">
    <slot name="beer" />
  </div>
  <div class="get-beer__beers-list-item--beer-tagline">
    <slot name="tagline" />
  </div>
</div>

<style scoped>
  .get-beer__beers-list-item--beer-name {
    font-weight: bold;
  }

  .get-beer__beers-list-item--beer-tagline {
    font-style: italic;
  }
</style>
