<template>
  <div>{{num}}</div>
</template>

<script>
export default {
  props: ['val'],
  data() {
    return {
      num: 0
    }
  },
  mounted() {
    this.getCurrent()
  },
  methods: {
    getCurrent() { // 计算显示数字
      let num = 0
      let timer = setInterval(() => {
        num += Math.ceil(this.val / 20) // 翻牌器累加20次
        if (num >= this.val) { // 超过取消计时器
          num = this.val
          // 分隔符
          this.num = num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
          clearInterval(timer)
        } else {
          this.num = num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
        }
      }, 100)
    }
  }
}
</script>