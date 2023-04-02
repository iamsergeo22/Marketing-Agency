export { default as ThemeSwitcher } from '../../components/ThemeSwitcher.vue'

export const LazyThemeSwitcher = import('../../components/ThemeSwitcher.vue' /* webpackChunkName: "components/ThemeSwitcher" */).then(c => c.default || c)
