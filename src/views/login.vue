<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click='add'>+</button>
    <button @click='minus'>-</button>
  </div>
</template>
<script>
export default {
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    add(){
      this.$store.dispatch('addCountAsync',{num:10})
    },
    minus(){
      this.$store.commit('addCount',{num:-20})
    }
  },
}
</script>
