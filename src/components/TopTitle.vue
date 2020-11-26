<template>
  <div class="top-title" >
      {{text}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      text: '唱片管理'
    }
  }
}
</script>
<style lang="sass" scoped>
.top-title 
  padding-left: .4rem
  height: 1.2rem
  line-height: 1.2rem
  background-color: #333
  color: #c8c8c8
  text-align: left
  font-size: .35rem
</style>