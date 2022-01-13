<template>
  <div class="h-screen text-center">
    <div class="mt-80">
      <button @click="generate" class="shadow p-5 rounded bg-indigo-500 text-white">Dis les termes 🥶</button>
      <div class="mt-10 mx-10 md:mx-32">
        {{ this.generatedText }}
      </div>
    </div>
  </div>
</template>

<script>

  import generator from '/src/utils/generator.js'

  export default {
    name: 'Generator',

    data: () => ({
      generatedText: '',
    }),
    methods: {
      generate() {
        this.generatedText = generator();
      },
    },
  }
</script>
