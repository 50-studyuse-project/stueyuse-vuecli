const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig(
    {
        transpileDependencies: true,
        lintOnSave: false,
        devServer: // 配置代理
        {
            proxy:
            {
                '/abc':
                {
                    target: 'http://127.0.0.1:8001',
                    pathRewrite:
                        {
                            '^/abc': ''
                        },
                    ws: true,
                    changeOrigin: false
                }
            }
        }
    }
);
