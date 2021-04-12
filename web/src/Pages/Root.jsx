import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import PagesPromotionSearch from './Promotion/Search/Search.jsx'
import PagesPromotionFrom from './Promotion/Form/Form.jsx'


const Root = ()=> {
    return(
        <Router>
            <Switch>
                <Route path="/create" component={PagesPromotionFrom} />
                <Route path= "/edit/:id" component={PagesPromotionFrom} />
                <Route path="/" component={PagesPromotionSearch}/>
            </Switch>
        </Router>
    )

}
export default Root;