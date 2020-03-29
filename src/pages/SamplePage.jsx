import React from 'react'
import Layout from 'components/layout/Layout'
import Seo from 'components/general/seo/Seo'

const SamplePage = () => {
    return (
        <Layout>
            <Seo
                title="Sample Page"
                desc="Sample Page"
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
                    Nothing to see here, just an example of how routing works!
                </h1>
            </section>
        </Layout>
    )
}

export default SamplePage
