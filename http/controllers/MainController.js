// This needs to be a const for some odd reason
import * as imdb from 'imdb-api'

// Import utilities
import JRes from '../util/JResponse'
import SendError from '../util/SendError'

export default class MainController {
  /**
   * Method for finding a show and its ratings
   * @param ctx - The current request context
   * @param next - The next state to transition to
   */
  static async findShow(ctx, next) {
    const show = await imdb.get(ctx.params.title)
    if (!show) {
      SendError(ctx, 400, 'Unable to find title specified!')
    } else {
      // Fetches & Appends Episodes
      try {
        await show.episodes()
      } catch (error) {
        return SendError(ctx, 404, "Unable to find show")
      }
    }

    ctx.body = JRes.success('Successfully fetched title', show)
  }
}
