'use strict';
import React, {Component} from 'react';
var Dropzone = require('react-dropzone');

//var DataGrid = require('react-datagrid')

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {files: []};
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(files) {
      console.log('Received files: ', files.length, files);
    }

    render() {
        return (
            <section className="section-home container">
                <div className="row">
                    <div className="col-sm-7">
                        <h1 className="page-header">Upload photos</h1>
                        <div className="row">
                          <div className="row">
                            <Dropzone onDrop={this.onDrop}>
                              <div>Try dropping some files here, or click to select files to upload.</div>
                            </Dropzone>
                          </div>
                          <div className="row">
                            {this.state.files.length > 0 ?
                              <div>
                                <h2>Uploading {this.state.files.length} files...</h2>
                                <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
                              </div>
                              : null
                            }
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = HomePage;
