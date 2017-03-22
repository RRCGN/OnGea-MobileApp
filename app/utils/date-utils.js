/**
 *
 * @flow
 */

import moment from 'moment'

export default class DateUtil {
  static getMostRecent(data: Array<{ dateFrom: string }>): any {
    const now = moment().unix()
    let shortestDistance = 0
    let foundIndex = 0
    data.forEach((obj, i) => {
      const testDate = moment(obj.dateFrom).unix()
      const diff = testDate - now
      if (diff > shortestDistance) {
        shortestDistance = diff
        foundIndex = i
      }
    })
    return foundIndex
  }
}
