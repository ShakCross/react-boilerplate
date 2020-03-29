import React from 'react'
import Layout from 'components/layout/Layout'
import Seo from 'components/general/seo/Seo'
import gif from 'assets/img/main.gif'

const Index = () => {
    return (
        <Layout>
            <Seo
                title="Index Page"
                desc="Index Page"
                canonical=""
                ogTitle=""
                ogDesc=""
                ogUrl=""
                ogImage=""
                hashTag=""
            />
            <section>
                <h1
                    style={{
                        fontFamily: 'BreePeru', fontSize: 19, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    Reactive frontend doing it right!!
                </h1>
                <img style={{ width: '100%' }} src={gif} />
            </section>
        </Layout>
    )
}

export default Index