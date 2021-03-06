import React from 'react'
import withDashboard from 'components/withDashboard'
import ArticlePage from 'components/Articles/Article'

const Article = ({ location }) => <ArticlePage location={location} />

export default withDashboard(Article)
