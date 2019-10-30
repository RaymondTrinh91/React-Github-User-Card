import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';

class UserCard extends Component {
    constructor() {
        super();
        this.state = {
            followerData: []
        }
    }

    componentDidMount() {
        axios
            .get(this.props.userData.url)
            .then(res => {
                console.log(res)
                this.setState({ followerData: res.data })
            })
            .catch(error => {
                console.log('Error from follower data grab', error)
            })
    }

    render() {
        return (
            <div>

                {console.log(this.props)}
                <Card>
                    <Image src={this.state.followerData.avatar_url} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.state.followerData.name}</Card.Header>
                        <Card.Meta>{`${this.state.followerData.location === null ? "None" : this.state.followerData.location}`}</Card.Meta>
                        <Card.Description>
                            {`${this.state.followerData.bio === null ? "None" : this.state.followerData.bio}`}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href={this.state.followerData.html_url}>
                            <Icon name='user' />
                            GitHub
              </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default UserCard;