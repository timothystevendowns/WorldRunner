import React, { Component } from "react";
import axios from "axios";

export default class RunWorld extends Component {

    runWorld = () => {
        axios.post("http://localhost:8080/runWorld")
            .then(res => {
                console.log("World run triggered");
                window.location.href = "/view-world";
            })
            .catch(err => {
                console.error(err);
                alert("Failed to run world");
            });
    }

    render() {
        return (
            <div className="container text-center" style={{ paddingTop: "100px" }}>
                <h2>Run World</h2>

                <button className="site-button" onClick={this.runWorld}>
                    Run World
                </button>
            </div>
        );
    }
}