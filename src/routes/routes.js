import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../container/homepagecontainer/homepagecontainer'
import YelpFusionCard from '../components/YelpFusionCard/yelpfusioncard'
import WeatherAppContainer from '../container/WeatherAppContainer/weatherappcontainer'
import CollageMakerContainer from '../container/CollageMakerContainer/collagemakercontainer'

export default () => (
    <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/home" component={HomePageContainer} />
        <Route path="/yelpyelp" component={YelpFusionCard}/>
        <Route path="/WeatherApp" component={WeatherAppContainer}/>
        <Route path="/CollageMaker" component={CollageMakerContainer}/>
        {/* TODO: [DC] <Route path="/profile" component={Profile} /> */}
        {/* TODO: [DC] <Route path="/destination" component={Destination} /> */}
    </Switch>
);