<template>
  <div class="card">
    <div class="header-content">
      <div class="info-container">
        <img v-if="item.poster_path" :src="'https://image.tmdb.org/t/p/original/' + item.poster_path" />
        <img v-if="!item.poster_path" src="http://www.freeiconspng.com/uploads/no-image-icon-6.png" />

        <div class="info-list">
          <span class="info-title">{{ item.name }}</span>
          <div class="info-cols">
            <div class="info-col">
              <span class="info-misc"><strong>Rating:</strong> {{ item.vote_average }} / 10</span>
              <span class="info-misc"><strong>Year:</strong> {{ getAirDate }}</span>
              <span class="info-misc"><strong>Seasons:</strong> {{ item.number_of_seasons }}</span>
              <span class="info-misc"><strong>Episodes:</strong> {{ item.number_of_episodes }}</span>
            </div>
            <div class="info-list">
              <span class="info-misc"><strong>Total Votes:</strong> {{ item.vote_count }}</span>
              <span class="info-misc"><strong>Current Popularity:</strong> {{ item.popularity.toFixed(1) }}%</span>
              <span class="info-misc"><strong>Genre:</strong> {{ (item.genres[0]) ? item.genres[0].name : 'N/A' }}</span>
              <span class="info-misc"><strong><a :href="item.homepage" target="_blank">Homepage</a></strong></span>
            </div>
          </div>
        </div>

      </div>
      <div class="action-container">
        <button @click="toggleTrends(item.id)" type="button" class="el-button el-button--primary" style="float: right;">
          <span>{{ (displayTrends) ? 'Hide Trends' : 'Show Trends' }}</span>
        </button>
      </div>
    </div>
    <div v-if="displayTrends" class="card-body">
      <button v-if="view === 'bySeason' && chartData.rows.length > 0" @click="getDataByEpisode" type="button" class="el-button el-button--default">
        Load By Episode
      </button>
      <button v-if="view === 'byEpisode' && chartData.rows.length > 0" @click="getDataBySeason" type="button" class="el-button el-button--default">
        Load By Season
      </button>
      <div class="chart">
        <vue-chart v-if="chartData.rows.length > 0" :columns="chartData.columns" :rows="chartData.rows" :options="chartData.options" />
      </div>
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
        view: 'bySeason',
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
          //this.getDataByEpisode()
          this.getDataBySeason()
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
        this.view = 'byEpisode'

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
      },
      async getDataBySeason() {
        this.loading = true
        this.view = 'bySeason'

        const episodes = await this.fetchEpisodes()
        const newData = {
          columns: [
            {
              'type': 'string',
              'label': 'Episode'
            }
          ],
          rows: [],
          options: {
            title: 'Rating by Season',
            hAxis: {
                title: 'Episode'
            },
            vAxis: {
                title: 'Rating'
            },
            width: (window.innerWidth > 786) ? 600 : 400,
            height: 400,
            backgroundColor: 'transparent'
          }
        }

        // Get seasons for columns
        for (let i = 0; i < this.item.number_of_seasons; i++) {
          newData.columns.push({
            'type': 'number',
            'label': 'Season ' + (i + 1)
          })
        }

        // Group epidoes into seasons
        const seasons = []
        for (let i = 0; i < episodes.length; i++) {
          if (seasons.length < episodes[i].season_number) {
            seasons.push([])
          }

          seasons[episodes[i].season_number - 1].push(episodes[i])
        }

        // Get most episodes in a season
        let most = 0
        for (let i = 0; i < seasons.length; i++) {
          if (seasons[i].length > most) {
            most = seasons[i].length
          }
        }

        // Group by Episode
        for (let i = 0; i < most; i++) {
          let data = [`Episode ${i + 1}`]

          for (let x = 0; x < seasons.length; x++) {
            if (seasons[x][i]) {
              data.push(seasons[x][i].vote_average)
            } else {
              data.push(NaN)
            }
          }

          newData.rows.push(data)
        }

        this.chartData = newData
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .card-body > .el-button {
    height: 20px;
    padding-top: 3px;
    margin-left: 10px;
    margin-top: 10px;
  }

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

  .info-cols {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .info-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    height: 450px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-body > p {
    margin: 15px;
    text-align: center;
  }

  .chart {
    width: 80%;
    display: flex;
    justify-content: center;
  }
</style>
