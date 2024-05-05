import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useState } from "react";

interface Props {
    markers?: {
        lat: number,
        lng: number,
    }[],
    center : {
        lat: number,
        lng: number,
    }
}

function PlaceGoogleMap({markers, center} : Props) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLEMAP_KEY,
    })

    const [map, setMap] = useState(null)
    const onLoad = useCallback(function callback(map: any) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])
    const onUnmount = useCallback(function callback(map: any) {
        setMap(null)
      }, [])

      return(
        <>
            {
                isLoaded && <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: '100px',
                        borderRadius: '6px',
                    }}
                    center={center}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={{
                        fullscreenControl:false,
                        keyboardShortcuts:false,
                        mapTypeControl:false,
                    }}
                >
                    {
                        markers?.map((marker) => 
                            <Marker position={marker} />
                        )
                    }
                </GoogleMap>
            }
        </>
      )
}

export default PlaceGoogleMap;