import React from 'react'
import Layout from 'components/layout/Layout'
import Seo from 'components/general/seo/Seo'
import gif from 'assets/img/main.gif'
import { Default } from 'components/general/task/Task.stories.js'
import Button from 'components/general/button/Button'

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
                <Button>
                    Reactive frontend doing it right!!
                </Button>
                <img style={{ width: '100%' }} src={gif} />
            </section>
        </Layout>
    )
}

export default Index