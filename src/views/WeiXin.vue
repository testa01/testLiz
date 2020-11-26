<template>
  <div class="wei-xin">
    <div class="weixin-top">
        <div class="weixin-top-left">
          <img src="@/assets/img/l.png" alt="" >
          <span>曾经的你(原版吉他谱【...)</span>
        </div>
        <div class="weixin-top-right">
            <button>·<b>·</b>·</button>
            <button>⚪</button>
        </div>
    </div>
    <ul class="item-box">
      <li>
        <div class="img">
          <img :src="detail.imgSrc" alt="">
        </div>
        <div class="intr">
          <h2 class="title">{{detail.title}}</h2>
          <p><label for="">图片谱</label>{{detail.type}}</p>
          <span>热度：{{detail.hot}}</span>
        </div>
      </li>
    </ul>
    <div class="zan">
      <div v-for="(d,i) in zan" :key="i">
        <div class="img">
          <img :src="d.imgSrc" alt="">
        </div>
        <div class="detail-z">
          <h3>{{d.title}}</h3>
          <span>{{d.time}}</span>
        </div>
      </div> 
    </div>
    <div class="text">
      <div>
        <p>{{text[0]}}</p>
        <p>{{text[1]}}</p>
      </div>
      <button @click="copy()">复制链接</button>
    </div>
    <div class="bottom">
      <input type="text" placeholder="发表评论" @click="$event.target.value = copyV">
      <div class="img">
        <img :src="Img3" alt="" class="share" @click="share()">
        <img :src="x" alt="" class="z" @click="z()" :oSrc="Img5">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import '@/assets/resize.js'
import Img1 from '@/assets/img/img1.png'
import Img2 from '@/assets/img/img2.png'
import Img3 from '@/assets/img/share.png'
import Img4 from '@/assets/img/z.png'
import Img5 from '@/assets/img/z0.png'

export default {
  data(){
    return {
      copyV:'',
      text: ['本谱为付费谱，价格10元，请点击按钮复制网址并通过浏览器打开进行购买','https://m.jitashe.org/tab/1349851/'],
      detail: {
        imgSrc: Img1,
        title: '曾经的你（原版吉他谱）【回味经典】',
        type: '弹唱solo原版',
        hot: 195
      },
      zan: [{
        imgSrc: Img2,
        title: '生产队',
        time: '4小时前'
      }],
      Img3,
      Img4,
      Img5,
      isZan: false,
      x: Img4
    }
  },
  methods: {
    copy(){
      let text = this.text[0] + this.text[1]
      this.copyV=text
    },
    share(){
      console.log('share')
      return this.x
    },
    z(){
      this.isZan = !this.isZan;
      if(this.isZan == true){
        this.x = Img5
        this.zan.push({
        imgSrc: Img1,
        title: 'New',
        time: '刚刚'
      })
      }else {
        this.x = Img4
        this.zan.pop({
        imgSrc: Img1,
        title: 'New',
        time: '刚刚'
      })
      }
      console.log('zan')
    }
  },
  name: 'WeiXin',
  components: {

  }
}
</script>
<style lang="sass" scoped>
* 
  padding: 0
  margin: 0
  font-size: .48rem
  
.wei-xin  
  width: 9.6rem
  &>div
    background: #fff
    border-bottom: .03rem solid #ddd
  .weixin-top
    display: flex
    height: 1rem
    justify-content: space-between
    align-items: center
    background: #1997fb
    color: #fff
    .weixin-top-left  
      display: flex
      align-items: center
      img 
        width: .25rem
    .weixin-top-right
      border-radius: .78rem
      border: 1px solid #fff
      padding: 0 .05rem
      button  
        border: none
        outline: none
        background: transparent
  .item-box
    li 
      display: flex
      padding: .4rem .25rem
      background: #fff
      align-items: center
      text-align: left
      border-bottom: .03rem solid #dddddd
      .img 
        display: flex
        height: 2.38rem
        align-items: center
        margin-right: .57rem
        img
          width: 2.81rem
      .intr 
        h2 
          font-size: .36rem
          font-weight: normal
          margin-bottom: .2rem
        p 
          margin-bottom: .2rem
          color: #d4a145
        p,span
          font-size: .27rem
          label 
            font-size: .27rem
            color: #7cb7d9
            margin-right: .2rem
  .zan  
    display: flex
    padding: .4rem .25rem
    margin-bottom: .2rem
    div
      display: flex
      margin-right: .1rem
      .img
        margin-right: .2rem
        img
          width: 1.18rem
      .detail-z
        display: block
        h3
          font-size: .34rem
        span
          font-size: .3rem
          color: #7f7f7f
  .text 
    padding: .2rem
    p 
      font-size: .28rem
      text-align: left
      &+p 
        margin-bottom: .2rem
    button
      font-size: .3rem
      width: 2.1rem
      height: .7rem
      border-radius: .1rem
      border: 1px solid #ddd
      background: #f8f8f8
  .bottom 
    position: fixed
    bottom: 0
    display: flex
    justify-content: space-between
    width: calc(100% - .4rem)
    padding: .2rem
    input
      width: 6.9rem
      border-radius: .5rem
      text-indent: 1em
      font-size: .28rem
    .img
      display: flex
      justify-content: space-around
      width: 2.4rem
      .z,.share 
        width: .45rem
</style>
