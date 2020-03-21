import React from 'react'
import Layout from 'components/layout/Layout'

const SamplePage = () => {
    return (
        <Layout>
            <section>
                <h1
                    style={{
                        fontFamily: 'BreePeru', fontSize: 19, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    Nothing to see here, just an example of how routing works!
                </h1>
            </section>
        </Layout>
    )
}

export default SamplePage
