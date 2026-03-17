import React, { Component } from "react";
import axios from "axios";

export default class ViewWorld extends Component {
    constructor(props) {
        super(props);

        this.state = {
            worldState: null,
            error: null
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:8080/worldState")
            .then(res => {
                this.setState({ worldState: res.data });
            })
            .catch(err => {
                console.error(err);
                this.setState({ error: "Failed to load world state" });
            });
    }

    render() {
        const { worldState, error } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm" style={{ padding: "50px" }}>
                        <h3>View World</h3>
                        {error && <p>{error}</p>}
                        {worldState && <p>{worldState.name}</p>}
                    </div>

                    <div className="col-sm" style={{ padding: "50px" }}>
                        <h3>JSON</h3>
                        {worldState && (
                            <pre
                              style={{
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-word",
                                color: "#ffffff",
                                backgroundColor: "#1e1e1e",
                                padding: "15px",
                                borderRadius: "5px"
                              }}
                            >
                              {JSON.stringify(worldState, null, 2)}
                            </pre>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}