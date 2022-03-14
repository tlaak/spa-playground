<template>
  <div class="page">
    <GetBeer />
  </div>
</template>

<script>
// @ is an alias to /src
import GetBeer from '@/components/GetBeer.vue'

export default {
  name: 'get-beer',
  components: {
    GetBeer,
  },
}
</script>
