import React from 'react'
import Layout from 'components/layout/Layout'
import gif from 'assets/img/main.gif'

const Index = () => {
    return (
        <Layout>
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