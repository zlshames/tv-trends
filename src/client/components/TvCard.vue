<template>
  <div class="card">
    <div class="header-content">
      <div class="info-container">
        <img v-if="item.poster_path" :src="'https://image.tmdb.org/t/p/original/' + item.poster_path" />
        <img v-if="!item.poster_path" src="http://www.freeiconspng.com/uploads/no-image-icon-6.png" />

        <div class="info-list">
          <span class="info-title">{{ item.name }}</span>
          <span class="info-misc">Rating: {{ item.vote_average }}</span>
          <span class="info-misc">Year: {{ getAirDate }}</span>
          <span class="info-misc">Seasons: {{ item.number_of_seasons }}</span>
        </div>
      </div>
      <div class="action-container">
        <button @click="toggleTrends(item.id)" type="button" class="el-button el-button--primary" style="float: right;">
          <span>{{ (displayTrends) ? 'Hide Trends' : 'Show Trends' }}</span>
        </button>
      </div>
    </div>
    <div v-if="displayTrends" class="card-body">
      <vue-chart v-if="chartData.rows.length > 0" class="chart" :columns="chartData.columns" :rows="chartData.rows" :options="chartData.options" />
      <p v-if="chartData.rows.length === 0 && !loading">No trends available for this title</p>
      <p v-if="chartData.rows.length === 0 && loading">Loading...</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item', 'displayTrends', 'toggleTrends'],
    data() {
      return {
        loading: false,
        chartData: {
          columns: [
            {
              'type': 'string',
              'label': 'Episode'
            },
            {
              'type': 'number',
              'label': 'Rating'
            }
          ],
          rows: [],
          options: {
            legend: {position: 'none'},
            title: 'Rating by Episode',
            hAxis: {
                title: 'Episode'
            },
            vAxis: {
                title: 'Rating'
            },
            width: 600,
            height: 400
          }
        }
      }
    },
    watch: {
      displayTrends() {
        if (this.displayTrends) {
          this.getDataByEpisode()
        }
      }
    },
    computed: {
      getAirDate() {
        if (this.item.first_air_date) {
          return this.item.first_air_date.split('-')[0]
        } else {
          return 'N/A'
        }
      }
    },
    methods: {
      async fetchEpisodes() {
        // Get episodes of show
        const seasons = this.item.number_of_seasons
        let episodes = []
        for (let i = 0; i < seasons; i++) {
          const seasonQuery = `https://api.themoviedb.org/3/tv/${ this.item.id }/season/${i + 1}?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US`
          const season = await fetch(seasonQuery)

          if (season.ok) {
            const seasonBody = await season.json()

            for (let e = 0; e < seasonBody.episodes.length; e++) {
              episodes.push(seasonBody.episodes[e])
            }
          }
        }

        return episodes
      },
      async getDataByEpisode() {
        this.loading = true

        const episodes = await this.fetchEpisodes()
        const newData = {
          columns: [
            {
              'type': 'string',
              'label': 'Episode'
            },
            {
              'type': 'number',
              'label': 'Rating'
            }
          ],
          rows: [],
          options: {
            legend: {position: 'none'},
            title: 'Rating by Episode',
            hAxis: {
                title: 'Episode'
            },
            vAxis: {
                title: 'Rating'
            },
            width: 600,
            height: 400
          }
        }

        for (let i = 0; i < episodes.length; i++) {
          const avg = Number(episodes[i].vote_average)
          if (avg > 0) {
            newData.rows.push([
              `S${episodes[i].season_number}E${episodes[i].episode_number}`,
              avg
            ])
          }
        }

        this.chartData = newData
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .card {
    border: 1px solid #d1dbe5;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    padding-bottom: 15px;
    margin-bottom: 15px;

    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .header-content {
    height: 100%;
    width: 100%;
  }

  .info-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    float: left;
    height: 100%;
    margin-left: 15px;
    margin-top: 15px;
  }

  .action-container {
    float: right;
    margin-right: 15px;
    margin-top: 15px;
  }

  .info-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 15px;
  }

  .info-title {
    font-size: 26px;
    margin-bottom: 4px;
  }

  .info-misc {
    font-size: 14px;
    margin: 2px;
  }

  .info-container > img {
    height: 120px;
    width: 100px;
    border-radius: 3px;

    -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.4);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.4);
  }

  .card-body {
    border-top: 1px solid #d1dbe5;
    margin-top: 15px;
    width: 100%;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .chart {
    width: 80%;
    margin: 0 auto;
    margin-top: 15px;
  }
</style>
