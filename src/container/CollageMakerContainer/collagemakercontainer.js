import React, {Component} from 'react'
import './collagemakercontainer.css'

export default class CollageMakerContainer extends Component{
    render(){
        const url = 'https://gfycat.com/gifs/detail/BoldAngelicGartersnake';
        return(
            <div className="CollageMakerContainer__MainDiv">
                <div className="CollageMakerContainer__MainDiv__ImageDisplayOptions">
                    <div className="CollageMakerContainer__MainDiv__ImageDisplayOptions__Images">

                    </div>
                    <div className="CollageMakerContainer__MainDiv__ImageDisplayOptions__ListBox">
                        ListBox
                    </div>
                </div>
                <div className="CollageMakerContainer__MainDiv__ImagesUploader">
                    <div className="CollageMakerContainer__MainDiv__ImagesUploader__Dropbox">
                        ImageUploader
                    </div>
                    <div>
                        Submit
                    </div>
                </div>
            </div>
        )
    }
}