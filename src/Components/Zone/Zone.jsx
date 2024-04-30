
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Zone() {
    const mapCenter = [-2.21797, 115.66283];
    return (
        <div className="container mx-auto p-4 space-y-10">
            <div className="mt-8 ">
                <h2 className="text-3xl text-center font-bold my-20">Our Tour Zone</h2>
                <div className="h-[50vh] rounded-2xl border border-[rgba(0,0,0,0.3)] overflow-hidden my-10">
                    <MapContainer center={mapCenter} zoom={10} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={mapCenter}>
                            <Popup>
                                Our Zone
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}