import React, { Component } from 'react';
import axios from 'axios';
import GithubFollowerContain from './Components/GithubFollowerContain';
import { Card, Icon, Image } from 'semantic-ui-react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            ghData: []
        };
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/RaymondTrinh91')
            .then(res => {
                console.log(res)
                this.setState({ ghData: res.data })
            })
            .catch(error => {
                console.log("Initial Axios grab error: ", error.response)
            })
    }

    render() {
        return (
            <div className="appContain">
                <Card>
                    <Image src={this.state.ghData.avatar_url} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.state.ghData.name}</Card.Header>
                        <Card.Meta>{this.state.ghData.location}</Card.Meta>
                        <Card.Description>
                            {this.state.ghData.bio}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href={this.state.ghData.html_url}>
                            <Icon name='user' />
                            GitHub
                         </a>
                    </Card.Content>
                </Card>
                <GithubFollowerContain />
            </div>
        )
    }
}

export default App;