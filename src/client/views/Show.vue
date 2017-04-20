<template>
  <div>
    <div class="action-bar">
      <form class="form-container" v-on:submit.prevent="$router.push({ name: 'show', params: { show: searchTxt } })">
        <input class="search-input" type="text" v-model="searchTxt" placeholder="Enter Tv Show..." />
        <input class="button-primary" type="submit" value="Search">
      </form>
      <div class="action-container">
        <button class="button-primary" @click="getDataByEpisode">By Episode</button>
        <button class="button-primary" @click="getDataBySeason">By Season</button>

        <div class="type-container">
          <label for="regularCheckbox">
            <input type="radio" v-model="currentGraph" name="graph-type" value="line" />
            <span>Line Graph</span>
          </label>

          <label for="secondRegularCheckbox">
            <input type="radio" v-model="currentGraph" name="graph-type" value="bar" />
            <span>Bar Graph</span>
          </label>
        </div>
      </div>
    </div>

    <div class="chart-container" v-if="chartData.labels.length > 0">
      <bar-chart v-if="currentGraph === 'bar'" class="chart" :chartData="chartData" :options="chartOptions" />
      <line-chart v-if="currentGraph === 'line'" class="chart" :chartData="chartData" :options="chartOptions" />
    </div>

    <h3 v-if="chartData.labels.length === 0">Cannot retreive show data</h3>
  </div>
</template>

<script>
  import LineChart from 'components/LineChart.vue'
  import BarChart from 'components/BarChart.vue'

  import Data from '../config/data.json'

  export default {
    components: {
      LineChart, BarChart
    },
    data() {
      return {
        searchTxt: '',
        currentShow: '',
        currentOpt: 'byEpisode',
        currentGraph: 'line',
        chartData: {
          labels: [],
          datasets: [
            {
              label: 'Episodes',
              backgroundColor: '#f87979',
              data: []
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    watch: {
      '$route': function(newRoute) {
        const param = newRoute.path.replace('/', '')
        this.currentShow = param

        if (this.currentOpt === 'byEpisode') {
          this.getDataByEpisode()
        } else {
          this.getDataBySeason()
        }
      }
    },
    mounted() {
      const param = this.$route.params.show
      this.currentShow = param
      this.getDataByEpisode()
    },
    methods: {
      async fetchShow() {
        const res = await fetch('/api/v1/shows/' + this.currentShow)
        const body = await res.json()

        return body
      },
      async getDataByEpisode() {
        this.currentOpt = 'byEpisode'

        const showData = await this.fetchShow(this.currentShow)
        const episodes = showData.data._episodes
        const newData = {
          labels: [],
          datasets: [
            {
              label: 'Episodes',
              backgroundColor: this.getRandomColor(1),
              data: []
            }
          ]
        }

        for (let i = 0; i < episodes.length; i++) {
          newData.datasets[0].data.push(Number(episodes[i].rating))
        }

        // labels
        for (let i = 0; i < episodes.length; i++) {
          newData.labels.push('')
        }

        this.chartData = newData
      },
      async getDataBySeason() {
        this.currentOpt = 'bySeason'

        const showData = await this.fetchShow(this.currentShow)
        const episodes = showData.data._episodes
        const newData = {
          labels: [],
          datasets: []
        }

        let currentSeason = 0;
        for (let i = 0; i < episodes.length; i++) {
          if (!newData.datasets[episodes[i].season - 1]) {
            newData.datasets.push({
              label: 'Season: ' + episodes[i].season,
              backgroundColor: this.getRandomColor(0.3),
              data: [episodes[i].rating]
            })
          } else {
            newData.datasets[episodes[i].season - 1].data.push(Number(episodes[i].rating))
          }
        }

        // Get season with most episodes
        let max = 0, count = 0, season = 0
        for (let i = 0; i < episodes.length; i++) {
          if (season !== episodes[i].season) {
            season = episodes[i].season

            if (count > max) {
              max = count
            }

            count = 0
          }

          count++
        }

        for (let i = 0; i < max; i++) {
          newData.labels.push('Episode ' + (i + 1))
        }

        this.chartData = newData
      },
      getRandomColor(opacity) {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)

        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }
    }
  }
</script>

<style scoped>
  .chart-container {
    width: 100%;
  }

  .chart {
    width: 80%;
    margin: 0 auto;
  }

  .action-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 80%;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 20px;
  }

  .type-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 14px;
  }

  .type-container > label {
    margin-right: 45px;
  }

  h3 {
    margin: 0 auto;
    width: 500px;
    font-size: 20px;
    text-align: center;
    margin-top: 50px;
  }
</style>
