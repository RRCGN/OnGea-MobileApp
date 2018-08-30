import MapboxGL from '@mapbox/react-native-mapbox-gl'

const STYLE_URL = MapboxGL.StyleURL.Street
const LATLONG_AREA = 0.02

function getPackName(location) {
  return `location:${location.latitude}:${location.longitude}`
}

export async function downloadMaps(
  locations,
  onDownloadStart,
  onDownloaded,
  onAlreadyExists
) {
  for (let location of locations) {
    const name = getPackName(location)

    const existingPack = await MapboxGL.offlineManager.getPack(name)
    if (existingPack) {
      onAlreadyExists(location)
      return
    }

    onDownloadStart(location)

    MapboxGL.offlineManager.createPack(
      {
        name,
        styleURL: STYLE_URL,
        minZoom: 12,
        maxZoom: 16,
        bounds: [
          [
            +location.longitude + LATLONG_AREA,
            +location.latitude + LATLONG_AREA
          ],
          [
            +location.longitude - LATLONG_AREA,
            +location.latitude - LATLONG_AREA
          ]
        ]
      },
      (region, status) => {
        if (status.percentage === 100) onDownloaded(location)
      }
    )
  }
}
