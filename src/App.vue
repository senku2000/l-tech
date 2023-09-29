<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    document.body
    let script = document.createElement('script')

    script.src = '/static/js/main.js'

    document.body.append(script)
  }
}
</script>

