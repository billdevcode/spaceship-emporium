import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='PageLayout'>
    <Header />
    <div className='PageLayout__MainContent'>
      {children}
    </div>
    <Footer />
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
