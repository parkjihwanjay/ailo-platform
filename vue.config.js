module.exports = {
	lintOnSave: false,

	devServer: {
		open: process.platform === 'darwin',
		host: '0.0.0.0',
		port: 8080, // CHANGE YOUR PORT HERE!
		https: true,
		hotOnly: false,
	},

	css: {
		loaderOptions: {
			scss: {
				prependData: `
          @import "@/styles/variables.scss";
          @import "@/styles/base.scss";
        `,
			},
			// css: {
			// prependData: `@import "normalize.css"`,
			// options here will be passed to css-loader
			// },
		},
	},

	pluginOptions: {
		s3Deploy: {
			// registry: undefined,
			awsProfile: 'default',
			region: 'ap-northeast-2',
			bucket: 'ailoplatform',
			createBucket: true,
			staticHosting: true,
			staticIndexPage: 'index.html',
			staticErrorPage: 'index.html',
			assetPath: 'dist',
			assetMatch: '**',
			deployPath: '/',
			acl: 'public-read',
			pwa: false,
			pwaFiles: 'service-worker.js',
			enableCloudfront: false,
			uploadConcurrency: 5,
			pluginVersion: '3.0.0',
		},
	},
};
