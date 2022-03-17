<template>
  <div>
    <div class="get-beer__beers-list-item--beer-name">
      <slot name="beer"></slot>
    </div>
    <div class="get-beer__beers-list-item--beer-tagline">
      <slot name="tagline"></slot>
    </div>
  </div>
</template>

<style scoped>
.get-beer__beers-list-item--beer-name {
  font-weight: bold;
}

.get-beer__beers-list-item--beer-tagline {
  font-style: italic;
}
</style>
