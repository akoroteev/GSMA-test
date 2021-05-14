<template>
  <div id="app">
    <redoc-wrapper
        :spec-or-spec-url="'http://petstore.swagger.io/v2/swagger.json'"
        :options="redocOptions">
    </redoc-wrapper>
  </div>
</template>

<script>
// import RedocWrapper from '@hnluu8/vue-redoc-wrapper';
export default {
  name: 'RedocComponent',
  components: {
    'redoc-wrapper': () => import('@hnluu8/vue-redoc-wrapper'),
  },
  data() {
    return {
      // https://github.com/Redocly/redoc#redoc-options-object
      redocOptions: {
        hideDownloadButton: true,
        showConsole: true,
      },
    }
  },
  mounted() {
    import("@hnluu8/vue-redoc-wrapper").then(m => {
      console.log(m);
      m.default.render();
    });
  }
}
</script>
