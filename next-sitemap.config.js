/** @type {import('next-sitemap').IConfig} */

const url = 'https://trackify.umer.tech/'

module.exports = {
    siteUrl: url,
    exclude: ['/icon.svg', '/apple-icon.png', '/manifest.webmanifest', '/tags/*'],
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}