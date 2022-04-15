const globalSettings = {
    // Element 组件默认尺寸，支持：large、medium、small、mini
    elementSize: 'medium',
    // 侧边栏默认展开/折叠
    sidebarCollapse: false,
    // localStorage sessionStorage 前缀
    storagePrefix: 'gzsw_web_',
    // 是否开启扁平化路由，开启后三级以及三级以上的嵌套路由均为被处理成二级，但侧边栏导航的层级效果不变（默认开启用以支持多级路由缓存）
    enableFlatRoutes: true,
    // 是否在非开发环境开启错误日志功能，具体业务代码在 ./utils/error.log.js
    enableErrorLog: false,
    // 是否开启系统配置（在生产环境关闭）
    // enableThemeSetting: process.env.NODE_ENV !== 'production'
    enableThemeSetting: true
}

export default globalSettings
