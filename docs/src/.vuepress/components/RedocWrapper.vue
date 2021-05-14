<template>
  <div id="redoc-container"></div>
</template>

<script>
import * as redoc from 'redoc/bundles/redoc.standalone.js'
export default {
  name: "RedocWrapper",
  // props: ['specOrSpecUrl'],
  mounted() {
    // import("redoc/bundles/redoc.standalone").then(module => {
    //   if (module) {
    //     console.log(module);
    //     // redoc.init(this.specOrSpecUrl, document.getElementById('redoc-container'))
    //   }
    // });
    console.log(redoc);
    // redoc.init(this.specOrSpecUrl, document.getElementById('redoc-container'))
  }
}
</script>
