import React, { Component } from 'react';
import axios from 'axios';
import UserCard from "./UserCard";

class GithubFollowerContain extends Component {
    constructor() {
        super();
        this.state = {
            ghFollowerData: []
        };
    };

    componentDidMount() {
        axios
            .get("https://api.github.com/users/RaymondTrinh91/followers")
            .then(res => {
                console.log(res)
                this.setState({ ghFollowerData: res.data })
            })
            .catch(error => {
                console.log('Follower data grab error:', error.response)
            })
    };

    render() {
        return (
            <div>
                <h3>My Followers</h3>
                <div className="cardContain">
                    {this.state.ghFollowerData.map(user => (
                        <UserCard
                            key={user.id}
                            userData={user} />
                    ))}
                </div>
            </div>
        )
    }
}

export default GithubFollowerContain;