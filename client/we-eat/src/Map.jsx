import React from 'react'
import "./Map.css"
import { Image } from 'semantic-ui-react'

class Map extends React.Component {

    render() {
        return (
            <div className="map-background">
                <Image as="img" src="https://maps-tel-aviv.com/img/1200/tel-aviv-neighborhood-map.jpg" ui />
            </div>
        )
    }
}


export default Map;