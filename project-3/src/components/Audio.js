import React, {Component} from 'react'
import audio from "./halo.mp3"
class Audio extends Component {
    render(){
        return(
            <audio autoPlay={false} loop>
                <source src={audio}  type="audio/mpeg"/>
            </audio>
        )
    }
}

export default Audio