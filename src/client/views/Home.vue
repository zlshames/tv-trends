<template>
  <div class="page">
    <div class="panel">
      <img class="icon" src="http://bundler.watch.aetnd.com/images/icons/icon-cable-provider.svg" />
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
    <div class="body-container">
      <h2>Top Shows</h2>
      <div v-if="results.length > 0" v-for="item in results">
        <tv-card :item="item" :displayTrends="item.showTrends" :toggleTrends="toggleTrends"/>
      </div>
    </div>
  </div>
</template>

<script>
  import TvCard from 'components/TvCard'
  export default {
    components: {
      TvCard
    },
    data() {
      return {
        searchTxt: '',
        results: []
      }
    },
    async mounted() {
      try {
        const results = await this.fetchShows()
        this.results = results
      } catch (err) {
        console.log(err)
      }
    },
    methods: {
      handleSearch() {
        if (this.searchTxt.length > 3) {
          this.$router.push({ name: 'search', params: { title: this.searchTxt } })
        }
      },
      async fetchShows() {
        const showsQuery = `https://api.themoviedb.org/3/discover/tv?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false`
        const showsRes = await fetch(showsQuery)
        const showsBody = await showsRes.json()

        let results = []
        for (let i = 0; i < 5; i++) {
          const detailQuery = `https://api.themoviedb.org/3/tv/${ showsBody.results[i].id }?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US`
          const details = await fetch(detailQuery)
          const detailBody = await details.json()

          detailBody.showTrends = false
          results.push(detailBody)
        }

        return results
      },
      toggleTrends(id) {
        // Turn off other trends
        for (let i = 0; i < this.results.length; i++) {
          if (this.results[i].id === id) {
            this.results[i].showTrends = !this.results[i].showTrends
          } else {
            this.results[i].showTrends = false
          }
        }
      }
    }
  }
</script>

<style scoped>
  .panel {
    height: 400px;
    width: 100%;
    background-color: #485971;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .body-container {
    margin: 0 auto;
    margin-top: 15px;
    width: 80%;
  }

  .search-box {
    width: 350px;
  }

  h1 {
    margin-top: -15px;
    color: whitesmoke;
    text-align: center;
    font-size: 24px;
  }

  h2 {
    text-align: center;
    font-weight: lighter;
    font-size: 32px;
  }

  .page {
    background-color: whitesmoke;
    padding-bottom: 30px;
  }

  .icon {
    height: 100px;
    width: 100px;
    margin-top: -60px;
    margin-bottom: 10px;
  }
</style>
