import moment from 'moment'

export default class DateUtil {
  static getMostRecent(
    data: Array<{ dateFrom: string }>
  ): { index: number, obj: any} {
    const now = moment().unix()
    let shortestDistance = -1
    let foundIndex = 0
    data.forEach((obj, i) => {
      const testDate = moment(obj.dateFrom).unix()
      const diff = testDate - now
      if (shortestDistance < 0 || diff < shortestDistance) {
        shortestDistance = diff
        foundIndex = i
      }
    })

    return {
      index: foundIndex,
      obj: data[foundIndex]
    }
  }
}
