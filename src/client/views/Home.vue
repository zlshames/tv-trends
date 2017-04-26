<template>
  <div class="page">
    <div class="panel">
      <h1>Search for your favorite show!</h1>
      <form class="search-box" v-on:submit.prevent="handleSearch">
        <el-input
          placeholder="Enter title"
          icon="search"
          v-model="searchTxt"
          :on-icon-click="handleSearch"
          @click="handleSearch">
        </el-input>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchTxt: ''
      }
    },
    methods: {
      handleSearch() {
        if (this.searchTxt.length > 3) {
          this.$router.push({ name: 'search', params: { title: this.searchTxt } })
        }
      }
    }
  }
</script>

<style scoped>
  .panel {
    position: absolute;
    height: 400px;
    width: 100%;
    background-color: #485971;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .search-box {
    width: 40%;
  }

  h1 {
    margin-top: -15px;
    color: whitesmoke;
    text-align: center;
    font-size: 24px;
  }
</style>
