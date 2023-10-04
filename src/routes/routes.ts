import { LazyExoticComponent, lazy } from 'react'

type JSXComponent = () => JSX.Element

interface Route {
  to : string
  path: string
  Component : JSXComponent | LazyExoticComponent<JSXComponent>
  name: string
}

const Lazy1 = lazy(() => import/* webpackChunkName: "LazyPage1" */('../01-lazyload/components/pages/lasy-page1'))
const Lazy2 = lazy(() => import/* webpackChunkName: "LazyPage2" */('../01-lazyload/components/pages/lasy-page2'))
const Lazy3 = lazy(() => import/* webpackChunkName: "LazyPage3" */('../01-lazyload/components/pages/lasy-page3'))

export const ROUTES : Route[] = [
  {
    to: '/',
    path: '/',
    Component:Lazy1,
    name: 'Lazy-1'
  },
  {
    to: '/lazy-page-2',
    path: '/lazy-page-2',
    Component:Lazy2,
    name: 'Lazy-2'
  },
  {
    to: '/lazy-page-3',
    path: '/lazy-page-3',
    Component: Lazy3,
    name: 'Lazy-3'
  }
]