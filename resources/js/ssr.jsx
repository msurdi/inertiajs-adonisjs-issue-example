import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import ReactDOMServer from 'react-dom/server'

const render = (page) =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => require(`./Pages/${name}`),
    setup: ({ App, props }) => <App {...props} />,
  })

export default render
