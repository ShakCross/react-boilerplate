import React from 'react'
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

const Layout = ({ children }) => {
    return (
        <section>
            <Header/>
            {children}
            <Footer/>
        </section>
    )
}

Layout.defaultProps = {
    children: '',
};

export default Layout
