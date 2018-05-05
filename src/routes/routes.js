import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../container/homepagecontainer/homepagecontainer'
import YelpFusionCard from '../components/YelpFusionCard/yelpfusioncard'

export default () => (
    <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/home" component={HomePageContainer} />
        <Route path="/yelpyelp" component={YelpFusionCard}/>
        {/* TODO: [DC] <Route path="/profile" component={Profile} /> */}
        {/* TODO: [DC] <Route path="/destination" component={Destination} /> */}
    </Switch>
);