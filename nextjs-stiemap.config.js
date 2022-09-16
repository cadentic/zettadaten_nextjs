module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:4845',
    generateRobotsTxt: true, // (optional)
    // ...other options
    robotsTxtOptions: {
        additionalSitemaps: [
            'process.env.SITE_URL/server-sitemap.xml', // <==== Add here
        ],
    }
}