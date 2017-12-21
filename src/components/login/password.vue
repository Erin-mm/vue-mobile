<template>
  <div id="payPwd">
    <div style="text-align: center">
      支付密码设置
    </div>
    <input ref="pwd" type="password" maxlength="6" v-model="msg"  style="position: absolute;z-index: -1;left:-100%;opacity: 0"/>
    <ul class="pwd-wrap" @click="focus">
      <li><i v-if="msg.length > 0"></i></li>
      <li><i v-if="msg.length > 1"></i></li>
      <li><i v-if="msg.length > 2"></i></li>
      <li><i v-if="msg.length > 3"></i></li>
      <li><i v-if="msg.length > 4"></i></li>
      <li><i v-if="msg.length > 5"></i></li>
    </ul>
  </div>
</template>
<script>
  export default {
    components: {
    },
    props: {
      // 接收一个由父级组件传递过来的值
      value: {
        type: String,
        default: function () {
          return ''
        }
      }
    },
      computed:{
        msg: {
          // 动态计算currentValue的值
          get:function() {
            return this.value; // 将props中的value赋值给currentValue
          },
          set:function(val) {
            this.$emit('input', val); // 通过$emit触发父组件
          }
        }
      },
//      watch:{
//      msg(curVal){
//        if(/[^\d]/g.test(curVal)){
//          this.msg = this.msg.replace(/[^\d]/g,'');
//        }else{
//          this.msgLength = curVal.length;
//        }
//      },
//    },
    methods: {
      focus(){
        this.$refs.pwd.focus();
      },
    }
  }

</script>
<style lang="scss" scoped >
  html,body{
    width: 100%;
    height: 100%;
    background: #fbf9fe;
  }
  #payPwd .pwd-wrap{
    width: 90%;
    height: 44px;
    padding-bottom: 1px;
    margin: 0 auto;
    background: #fff;
    border:1px solid #ddd;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    cursor: pointer;
  }
  .pwd-wrap li{
    list-style-type:none;
    text-align: center;
    line-height: 44px;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-flex: 1;
    border-right:1px solid #ddd ;
  }
  .pwd-wrap li:last-child{
    border-right: 0;
  }
  .pwd-wrap li i{
    height: 10px;
    width: 10px;
    border-radius:50% ;
    background: #000;
    display: inline-block;
  }
</style>
