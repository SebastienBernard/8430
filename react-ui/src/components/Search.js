// Content.js

import React, {Component} from 'react';

export default class Search extends Component {


    constructor(props) {
        super(props);
        this.state = {
            song : []
        };
      }


    componentDidMount() {

    }

    onChange() {
        fetch('/api')
        .then(response => {
            if (response.ok) {
                return response.json(); 
            }
      
        }).then(json => {
            debugger;
            this.setState({song : json});
        })
        .catch(e => {
          this.setState({
            message: `API call failed: ${e}`,
            fetching: false
          });
        })

        this.setState({ showMe : true} );
     }

    
    render(){
        return (
            <div className="content-wrapper" >
        
                <section>

                    <div className="row">
                        <div className="input-group">
                            <input id="song-search" type="text" className="form-control"  onChange={this.onChange.bind(this)} placeholder="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <h2>Song</h2>
                            <table className="table table-dark table-striped">
                                <thead>
                                <tr>
                                    <th>Supplier</th>
                                    <th>song name</th>

                                </tr>
                                </thead>
                                <tbody id="song-list">
                                    {
                                        this.state.song.map(function(song){
                                       
                                         return(
                                         <tr><td>  {song.Supplier}  </td><td><div className="row"><div>{song.Name}</div>  <button type="button" class="btn btn-success float-right">Play</button> <button type="button" class="btn btn-secondary float-right">Add to playlist</button></div> </td></tr>
                                         )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}