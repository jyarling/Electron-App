import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'

export function SimpleMap() {
  const center: LatLngExpression = [51.505, -0.09]
  return (
    <MapContainer center={center} zoom={13} className="h-64 w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>A pretty CSS3 popup.</Popup>
      </Marker>
    </MapContainer>
  )
}
