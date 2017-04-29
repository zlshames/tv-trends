<template>
  <div class="search-container">
    <div v-if="results.length > 0" v-for="item in results">
      <tv-card :item="item" :displayTrends="item.showTrends" :toggleTrends="toggleTrends"/>
    </div>
    <p v-if="results.length === 0 && loading" class="not-found">Loading...</p>
    <p v-if="results.length === 0 && !loading" class="not-found">No results for your search</p>
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
        results: [],
        loading: false
      }
    },
    watch: {
      '$route': function(newRoute) {
        this.handleSearch()
      }
    },
    mounted() {
      this.handleSearch()
    },
    methods: {
      async handleSearch(title) {
        this.loading = true
        this.results = []

        try {
          const search = this.$route.params.title
          const res = await this.fetchSearchResults(search)
          this.results = res
        } catch (error) {
          console.log(error)
        }

        this.loading = false
      },
      async fetchSearchResults(search) {
        const searchQuery = `https://api.themoviedb.org/3/search/tv?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US&query=${ search }&page=1`
        const searchRes = await fetch(searchQuery)
        const searchBody = await searchRes.json()

        let results = []
        for (let i = 0; i < searchBody.results.length; i++) {
          const detailQuery = `https://api.themoviedb.org/3/tv/${ searchBody.results[i].id }?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US`
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
  .search-container {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;

    display: flex;
    flex-direction: column;
  }

  .not-found {
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    .search-container {
      width: 90%;
    }
  }
</style>
