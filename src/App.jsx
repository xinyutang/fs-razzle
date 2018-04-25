import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

// emotion
import { ThemeProvider } from 'emotion-theming'
import theme from 'common/utils/theme'
import 'common/utils/globalStyles'

// Pages
import Retail from 'pages/Retail'
import Pro from 'pages/Pro'
import Dashboard from 'pages/Dashboard'
import Suggestions from 'pages/Dashboard/Suggestions'
import Portfolio from 'pages/Dashboard/Portfolio'
import Trades from 'pages/Dashboard/Trades'
import AdminOverview from 'pages/Dashboard/Admin/Overview'

const App = () => (
    <ThemeProvider theme={theme}>
        <Switch>
            <Route exact path="/" component={Retail} />
            <Route exact path="/pro" component={Pro} />
            <Route exact path="/dashboard" component={Dashboard}>
                <Route exact path="/suggestions/*" component={Suggestions} />
                <Route exact path="/portfolio/*" component={Portfolio} />
                <Route exact path="/Trades/*" component={Trades} />

                <Route exact path="/admin" component={AdminOverview} />
            </Route>
        </Switch>
    </ThemeProvider>
)

export default App
