<template>
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item @click="$router.push({ name: 'home' })" index="1" class="brand">
      TV Trends
    </el-menu-item>
    <el-menu-item v-if="$route.name !== 'home'" index="2" class="item-input">
      <form v-on:submit.prevent="handleSearch">
        <el-input
          placeholder="Search"
          icon="search"
          v-model="searchTxt"
          :on-icon-click="handleSearch"
          @click="handleSearch">
        </el-input>
      </form>
    </el-menu-item>
    <el-menu-item style="float: right;" index="3" class="item-input">
      <a href="https://themoviedb.org" target="_blank">API</a>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
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
  .brand {
    font-size: 24px;
    color: whitesmoke;
  }

  .brand.is-active {
    color: whitesmoke;
  }

  .item-input {
    border-bottom: none !important;
  }

  .item-input:hover {
    border-bottom: none !important;
  }

  a {
    text-decoration: none;
  }
</style>
