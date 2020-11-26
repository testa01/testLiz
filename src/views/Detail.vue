<template>
  <div class="detail">
    <top-title></top-title>
    <div class="detail-box">
      <h1>您查看的唱片ID为：{{item.id}}</h1>
      <div class="box">
        <p><label for="">唱片名称：</label>{{item.album}}</p>
        <p><label for="">歌手：</label>{{item.singer}}</p>
        <p><label for="">价格：</label>{{item.price}}</p>
        <p><label for="">库存：</label><input type="text" v-model="item.number"><button class="change" @click="changeN()">调整</button></p>
      </div>
      <button @click="goList(item.id)">返回列表</button>
    </div>
  </div>
</template>
<script>
export default {
  created(){
    let list = JSON.parse(localStorage.getItem('data')) || [];
    list.forEach((item)=>{
      if(item.id == this.item.id){
        this.item = item;
      }
    })
  },
  data(){
    return {
      item: {
        id: this.$route.params.id,
        album: '',
        singer: '',
        price: '',
        number: ''
      }
    }
  },
  methods: {
    changeN(){
      let list = JSON.parse(localStorage.getItem('data')) || [];
      //  因为使用的时forEach方法，所以会改变原数组
      list.forEach((item)=>{
        if(item.id == this.item.id){
          item.number = this.item.number;//将input中的值赋值给原先传来的数据，进行更改
          this.item = item;
        }
      })
      console.log(list);
      localStorage.setItem('data',JSON.stringify(list))
    },
    goList(x){
      this.$router.push('/List/'+x)
    }
  }
}
</script>
<style lang="sass" scoped>
$s: .25rem
.detail 
  .detail-box 
    width: 5.85rem
    h1 
      font-size: .3rem
    .box  
      width: 5.85re
      height: 2.64rem
      background: #ccc
      p 
        font-size: $s
        label
          text-align: right
          width: 1.5rem
        input
          width: 0.6rem
          text-align: center
</style>