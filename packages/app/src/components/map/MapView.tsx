import { LatLngExpression } from "leaflet";
import { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { MapViewProps } from "./MapViewProps";

interface MapViewState {
  lat: number,
  lng: number,
  zoom: number,
}

export default class MapView extends Component<MapViewProps, MapViewState> {

  public state: MapViewState = {
    lat: this.props.lat,
    lng: this.props.lng,
    zoom: this.props.zoom
  }

  public render() {
    const position: LatLngExpression = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} style={{ height: "300px", width: "100%" }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Crest
          </Popup>
        </Marker>
      </Map>
    )
  }
}



