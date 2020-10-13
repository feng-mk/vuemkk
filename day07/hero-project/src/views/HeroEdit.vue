<template>
  <div class="hero-add">
    <legend>编辑英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input type="text" class="form-control" v-model="heroObj.heroName"/>
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input name="gender" v-model="heroObj.gender" type="radio" value="男"> 男
        <input name="gender" v-model="heroObj.gender" type="radio" value="女"> 女
      </div>
    </div>
    <button @click="edit" class="btn btn-primary">编辑</button>
  </div>
</template>

<script>
export default {

  created () {
    const id = this.$route.params.id
    this.axios.get(`/heroes/${id}`).then(res => {
    //   console.log(this.heroObj)
      this.heroObj = res.data
    })
  },
  data () {
    return {
      heroObj: {
        id: '',
        heroName: '',
        gender: '男',
        cTime: ''
      }
    }
  },
  methods: {
    edit () {
      if (this.heroObj.heroName === '') return
      //   发送修改的ajax请求
      const id = this.$route.params.id
      this.axios.put(`/heroes/${id}`, this.heroObj).then(res => {
        this.$router.push('/hero')
      })
    }
  }
}
</script>
