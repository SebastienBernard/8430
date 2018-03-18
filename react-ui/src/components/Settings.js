// Content.js

import React, {Component} from 'react';


export default class Settings extends Component {
    render(){
        return (
            <div id="playlist-section" className="content-wrapper">
                <section className="content-header">
                <div  className="row">
                   <h1 id="settings-title">Settings</h1>   
                </div>
                <div className="row">
                    <h3>You must connect to the 3 stream music provider. If you don't connect to one of the 3 they will not appear in the playlist and the search</h3>  
                </div>
               
                <div className="row">
                    <div className="col-sm">
                    </div>

                    <div className="col-sm">
                     
                    </div>
                    <div className="col-sm">
                     
                </div>
            </div>
            </section>
       </div>   
        )
    }
}