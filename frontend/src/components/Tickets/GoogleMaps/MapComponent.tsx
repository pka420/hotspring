import React from "react";
import { useEffect, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface MapProps {
    center: { lat: number; lng: number };
}

const containerStyle = {
    width: "400px",
    height: "400px",
};

const MapComponent: React.FC<MapProps> = ({ center }) => {
    console.log("in MapComponent", center);
    const [latitudeLongitudeLoaded, setLatitudeLongitudeLoaded] = useState<
        boolean
    >(false);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY as string,
    });

    useEffect(() => {
        if (!isNaN(center.lat) && !isNaN(center.lng)) {
            setLatitudeLongitudeLoaded(true);
        } else {
            console.log("Invalid latitude and longitude");
        }
    }, [center]);


    return (
        <div>
            {latitudeLongitudeLoaded
                ? (
                    <div>
                        {isLoaded
                            ? (
                                <div>
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={10}
                                    >
                                        <MarkerF
                                            position={center}
                                        />
                                    </GoogleMap>
                                    <GoogleMap zoom={15} center={center}>
                                    </GoogleMap>
                                </div>
                            )
                            : (
                                <Backdrop open={true}>
                                    <CircularProgress color="inherit" />
                                </Backdrop>
                            )}
                    </div>
                )
                : (
                    <Backdrop open={true}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                )}
        </div>
    );
};

export default MapComponent;
