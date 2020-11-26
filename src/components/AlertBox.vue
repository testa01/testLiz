<template>
  <div class="alert-box">
    <h1>添加唱片</h1>
    <span class="close" @click="$emit('close')">X</span>
    <div class="edit">
      <p><label for="cp">唱片</label><input type="text" id="cp" v-model="obj.album"></p>
      <p><label for="singer">歌手</label><input type="text" id="singer" v-model="obj.singer"></p>
      <p><label for="price">价格</label><input type="text" id="price" v-model="obj.price"></p>
      <p><label for="store">库存</label><input type="number" id="store" v-model="obj.number"></p>
      <div class="right-ctrl">
        <button class="no" @click="$emit('close')">取消</button>
        <button class="yes" @click="add()">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      obj: {
        album: '',
        singer: '',
        price: '',
        number: ''
      }  
    }
  },
  methods: {
    add(){
      this.$emit('add-new');
      let list = JSON.parse(localStorage.getItem('data') || '[]');
      let bol = true
      var randomId = ''
      rand()
      function rand(){
        randomId = 'album' + Math.floor(Math.random()*10000)
        list.every((x)=>{
          if(x.id == randomId){
            bol = false
          }
        })
      }
      let o = JSON.parse(JSON.stringify(this.obj));//深拷贝一下当前填入的项
      if(bol){
          list.push({
          ...o,
          id: randomId
        })
        localStorage.setItem('data',JSON.stringify(list) || '[]')
      }else {
        randomId = 'album' + Math.random()*10000
        rand()
      }
      this.obj={
        album: '',
        singer: '',
        price: '',
        number: ''
      }  
    },
  }
}
</script>
<style lang="sass" scoped>
.alert-box  
  position: fixed
  left: 50%
  top: 50%
  width: 10.22rem
  height: 7.78rem 
  transform: translate(-50%,-50%)
  padding: .4rem
  background: #fff
  box-shadow: 0 0 2px #ccc
  .close 
    position: absolute
    right: 0.1rem
    top: 0.1rem
    font-size: .64rem
  h1 
    text-align: left
    font-size: .35rem
  .edit 
    padding-top: .4rem
    p 
      display: flex
      margin-left: 1.4rem
      text-align: left
      margin-top: .4rem
      align-items: center
      font-size: .26rem
      input 
        width: 5.96rem
        height: .76rem  
        border: 1px solid #ccc
        border-radius: .05rem
      label 
        width: 1rem
        text-align: center
    .right-ctrl 
      text-align: right
</style>