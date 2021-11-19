<template>
  <global-footer class="footer custom-render">
    <template v-slot:links>
      <a href="https://www.buukle.top" target="_blank">BUUKLE</a>
    </template>
    <template v-slot:copyright>
      <a href="https://github.com/buukle" target="_blank">BUUKLE - github</a>
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter
  }
}
</script>
