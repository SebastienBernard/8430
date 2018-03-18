// Content.js

import React, {Component} from 'react';

export default class Playlists extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          Playlists: []
        };
      }

    componentDidMount() {

    }

    render(){
        return (
            <div id="playlist-section" className="content-wrapper">
                <section className="content-header">
                <div className="row">
                    <div className="col-sm">
                        <h2>Playlists</h2>
                        <table className="table table-dark table-striped">
                            <thead>
                            <tr>
                                <th>Supplier</th>
                                <th>Playlist name</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>John</td>
                                <td>john@example.com</td>
                            </tr>
                            <tr>
                                <td>Mary</td>
                                <td>mary@example.com</td>
                            </tr>
                            <tr>
                                <td>July</td>
                                <td>july@example.com</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm">
                        <h2>Playlist content</h2>
                        <table className="table table-dark table-striped">
                            <thead>
                            <tr>
                                <th>Supplier</th>
                                <th>Song name</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>John</td>
                                <td>john@example.com</td>
                            </tr>
                            <tr>
                                <td>Mary</td>
                                <td>mary@example.com</td>
                            </tr>
                            <tr>
                                <td>July</td>
                                <td>july@example.com</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
            </section>
       </div>
        )
    }
}