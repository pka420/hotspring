import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    width: "400px",
    height: "400px",
};

interface MapComponentProps {
    center: {
        lat: number;
        lng: number;
    };
}

const MapComponent: React.FC<MapComponentProps> = ({ center }) => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBww_Z4tCWpJt131BjHSKyXBdBbWrK565M",
    });

    const [map, setMap] = React.useState<google.maps.Map | null>(null);

    const onLoad = React.useCallback((map: google.maps.Map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback((map: google.maps.Map) => {
        setMap(null);
    }, []);

    return isLoaded
        ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
            </GoogleMap>
        )
        : <></>;
};

export default React.memo(MapComponent);
