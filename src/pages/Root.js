import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import PagePromotionSearch from './Promotion/Search/Search'
import PagesPromotionForm from './Promotion/Form/Form'

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/create" component={PagesPromotionForm}></Route>
                <Route path="/edit/:id" component={PagesPromotionForm}></Route>

                <Route path="/" component={PagePromotionSearch}></Route>
            </Switch>
        </Router>
    )
}

export default Root;