import React, { Component } from 'react';
import { connect } from "react-redux"

import { fetchUser } from "./../../../redux/actions/userActions"
import { fetchTweets } from "./../../../redux/actions/tweetsActions"

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
})
class HomePage extends Component {
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets())
    }

    render() {
        const { user, tweets } = this.props;

        if (!tweets.length) {
            return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
        }

        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)

        return <div>
            <h1>{user.name}</h1>
            <ul>{mappedTweets}</ul>
        </div>
    }
}

export default HomePage;
