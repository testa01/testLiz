<template>
  <div class="list">
    <top-title></top-title>
    <div class="list-box">
      <button class="addSing" @click="isAlert=true">添加唱片</button>
      <table cellspacing="0">
        <tr>
          <td>序号</td>
          <td>唱片</td>
          <td>歌手</td>
          <td>价格</td>
          <td>库存</td>
          <td>操作</td>
        </tr>
        <tr v-for="(d,i) in list" :key="i">
          <td>{{i+1}}</td>
          <td>{{d.album}}</td>
          <td>{{d.singer}}</td>
          <td>{{d.price}}</td>
          <td>{{d.number}}</td>
          <td><button @click="goDetail(d)">查看详情</button></td>
        </tr>
      </table>
      <div class="count-ctrl">
        <h1>唱片统计：</h1>
        <p>共{{ totalNum }}张库存，总计${{ totalPrice }}元</p>
      </div>
      <transition name="alert">
        <alert-box v-show="isAlert" :isAlert="isAlert" @close="isAlert = false" @add-new="addNew()"></alert-box>
      </transition>
    </div>
  </div>
</template>
<script>
//  引入弹框组件
import AlertBox from '@/components/AlertBox.vue'
import list from '@/assets/albumList.js'
//引入初始数据之后，就将数据存储在本地
//存储时优先考虑 之前是否有设置本地存储值，如若没有再设置为初始化数据
export default {
  data(){
    return {
      //  list 本身有之前存储的内容
        //  所以赋值时,要从本地存储的内容中取值，如果本地没有值，取默认值
        //  赋值时也注意考虑是否有设置过的本地存储值，有就设置为存储后的，否则再设置为初始化数据
      list: JSON.parse(localStorage.getItem('data') || JSON.stringify(list)),
      isAlert: false,
    }
  },
  created(){
    localStorage.setItem('data',localStorage.getItem('data') || JSON.stringify(list));
  },
  components: {
    //定义引入的弹框组件为子组件
    AlertBox
  },
  methods: {
    addNew(){
      this.isAlert = false
      setTimeout(()=>{
        this.list = JSON.parse(localStorage.getItem('data') || JSON.stringify(list))
      },200)
      console.log(this.list)
  },
    // addNew(x){
    //   //Math.random() - 随机数的设置
    //   let bol = true
    //   var randomId = ''
    //   let self = this
    //   rand()
    //   function rand(){
    //     randomId = 'album' + Math.floor(Math.random()*10000)
    //     self.list.every((x)=>{
    //       if(x.id == randomId){
    //         bol = false
    //       }
    //     })
    //   }
    //   if(bol){
    //     x.id = randomId
    //     console.log(x.id)
    //     this.list.push(x)
    //   }else {
    //     randomId = 'album' + Math.random()*10000
    //     rand()
    //   }
    //   this.isAlert = false
    // },
    goDetail(x){
      console.log(x)
      this.$router.push(`/Detail/${x.id}`);//进如详情页面
    }
  },
  computed: {
    totalNum(){
      return this.list.reduce((v,d)=>{
        v+=d.number - 0 
        return v
      },0)
    },
    totalPrice(){
      return this.list.reduce((v,d)=>{
        v+=d.number * d.price 
        return v
      },0)
    }
  },
}
</script>
<style lang="sass" scoped>
.alert-enter,.alert-leave-to 
  opacity: 0
.alert-enter-active,.alert-leave-active 
  transition: all 1s

$size: .16rem
button 
  border: 0
  outline: 0
  background: #409eff
  color: #fff
  width: 1.6rem
  height: .64rem
  border-radius: .1rem
.list 
  font-size: $size
  .list-box
    button.addSing 
      display: block
      margin-left: .4rem
      margin-top: .36rem
      margin-bottom: .36rem
      font-size: $size
    table 
      width: 14.2rem
      background: #fff
      margin: 0 auto
      tr  
        td 
          border: 1px solid #ccc
          border-collapse: collapse
          border-spacing: 0
          button 
            font-size: $size
    .count-ctrl 
      padding-left: 1.8rem
      text-align: left
</style>