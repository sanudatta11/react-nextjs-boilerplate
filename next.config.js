/* eslint-disable */
const withLess = require('@zeit/next-less');
const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');
// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = (file) => {
    }
}

module.exports =
    withImages(
        withOptimizedImages(
            withLess(
                withOffline(
                    {

                        workboxOpts: {
                            runtimeCaching: [
                                {
                                    urlPattern: /[.](png|jpg|css|js)$/,
                                    handler: 'networkFirst',
                                    options: {
                                        cacheableResponse: {
                                            statuses: [0, 200],
                                            headers: {
                                                'x-test': 'true'
                                            }
                                        },
                                        cacheName: 'static-cache',
                                        expiration: {
                                            maxEntries: 60,
                                            maxAgeSeconds: 30 * 24 * 60 * 60,
                                        },
                                    }

                                },

                            ]
                        },

                        lessLoaderOptions: {
                            javascriptEnabled: true,
                        },

                        exportPathMap: function () {
                            return {
                                '/': {page: '/'}
                            }
                        },

                    }
                ))));
