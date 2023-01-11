import React from 'react'
import '../css/app.css'
import { createInertiaApp } from '@inertiajs/react'
import { hydrateRoot } from 'react-dom/client'

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
})
