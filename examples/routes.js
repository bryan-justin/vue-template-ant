import Demo from './demo'
const AsyncComp = () => {
  const pathnameArr = window.location.pathname.split('/')
    const com = pathnameArr[1] || 'button' // eslint-disable-line
  const demo = pathnameArr[2] || 'index'
  return {
    component: import(`../components/card/demo/${demo}.vue`),
  }
}
export default [
  { path: '/components/:name/:demo?', component: Demo },
  // { path: '/*', component: AsyncComp },
]
