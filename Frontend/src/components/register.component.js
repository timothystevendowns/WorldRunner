import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.onChangeDiv = this.onChangeDiv.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            selectedclass: "",
            selecteddiv: "",
            dob: "",
            classes: [
                { label: "Choose", value: "" },
                { label: "I", value: "I" },
                { label: "II", value: "II" },
                { label: "III", value: "III" },
                { label: "IV", value: "IV" },
                { label: "V", value: "V" },
                { label: "VI", value: "VI" },
                { label: "VII", value: "VII" },
                { label: "VIII", value: "VIII" },
                { label: "IX", value: "IX" },
                { label: "X", value: "X" },
                { label: "XI", value: "XI" },
                { label: "XII", value: "XII" }
            ],
            div: [
                { label: "Choose", value: "" },
                { label: "A", value: "A" },
                { label: "B", value: "B" },
                { label: "C", value: "C" }
            ],
            gender: "Male",
            users: []
        };
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers() {
        axios
            .get("http://localhost:8080/findAllUsers")
            .then(res => this.setState({ users: res.data }))
            .catch(err => console.error(err));
    }

    onChangeName(e) {
        this.setState({ name: e.target.value });
    }

    onChangeDob(e) {
        this.setState({ dob: e.target.value });
    }

    onChangeClass(e) {
        this.setState({ selectedclass: e.target.value });
    }

    onChangeDiv(e) {
        this.setState({ selecteddiv: e.target.value });
    }

    onChangeGender(e) {
        this.setState({ gender: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        //const regName = /^[A-Z][a-z]{1,30}(\s[A-Z][a-z]{1,30})+$/;
        const name = this.state.name;

        //if (!regName.test(name)) {
            //alert("Invalid name given.");
            //return;
        //}

        const userList = {
            name: this.state.name,
            dob: this.state.dob,
            classes: this.state.selectedclass,
            div: this.state.selecteddiv,
            gender: this.state.gender
        };

        console.log("User list is", userList);

        axios
            .post("http://localhost:8080/reg", userList)
            .then(res => {
                console.log("User Added", res.data);

                this.setState({
                    name: "",
                    selectedclass: "",
                    selecteddiv: "",
                    dob: "",
                    gender: "Male"
                });

                this.loadUsers();
                alert("User registered successfully");
            })
            .catch(err => {
                console.error(err);
                alert("Failed to register user");
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm" style={{ padding: "50px" }}>
                        <h3>Student Registration</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Name :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                />
                            </div>

                            <div className="form-group">
                                <label>Date of Birth :</label>
                                <div>
                                    <input
                                        type="date"
                                        id="meet-date"
                                        className="form-control"
                                        value={this.state.dob}
                                        onChange={this.onChangeDob}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Class :</label>
                                <div>
                                    <select
                                        className="form-control"
                                        value={this.state.selectedclass}
                                        onChange={this.onChangeClass}
                                    >
                                        {this.state.classes.map((option, index) => (
                                            <option key={index} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Division :</label>
                                <div>
                                    <select
                                        className="form-control"
                                        value={this.state.selecteddiv}
                                        onChange={this.onChangeDiv}
                                    >
                                        {this.state.div.map((option, index) => (
                                            <option key={index} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Gender :</label>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            value="Male"
                                                            checked={this.state.gender === "Male"}
                                                            onChange={this.onChangeGender}
                                                        />
                                                        Male
                                                    </label>
                                                </div>
                                            </td>
                                            <td style={{ width: "20px" }}></td>
                                            <td>
                                                <div className="radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            value="Female"
                                                            checked={this.state.gender === "Female"}
                                                            onChange={this.onChangeGender}
                                                        />
                                                        Female
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-success"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="col-sm" style={{ padding: "50px" }}>
                        <h3>Student Details</h3>
                        <table border="1" cellPadding="10">
                            <thead>
                                <tr>
                                    <td>S.No</td>
                                    <th>Name</th>
                                    <th>Date of Birth</th>
                                    <th>Class</th>
                                    <th>Division</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.classes}</td>
                                        <td>{user.div}</td>
                                        <td>{user.gender}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}