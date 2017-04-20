<template>
  <div class="page">
    <div class="header-container">
      <h1>Tv Trends</h1>
    </div>

    <div class="search-container">
      <form v-on:submit.prevent="$router.push({ name: 'show', params: { show: searchTxt } })">
        <input class="search-input" type="text" v-model="searchTxt" placeholder="Enter Tv Show..." />
        <input class="button-primary" type="submit" value="Search">
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
    }
  }
</script>

<style scoped>
  .header-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  .search-container {
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: lightblue;
  }

  h1 {
    font-size: 24px;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }

  form {
    width: 100%;
  }

  .search-input {
    width: 30%;
  }

  .button-primary {
    margin-left: 10px;
  }
</style>
