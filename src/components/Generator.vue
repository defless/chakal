<template>
  <div class="h-screen text-center relative flex items-center justify-center">
    <div class="mb-16">
      <button @click="generate" class="shadow p-5 rounded bg-indigo-500 text-white">Dis les termes 🥶</button>
      <div class="mt-10 mx-10 md:mx-32 dark:text-white">
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
