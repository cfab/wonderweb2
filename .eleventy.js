const htmlmin = require('html-minifier')
const now = String(Date.now())
const { DateTime } = require("luxon");
// pour le debug cf: https://github.com/11ty/eleventy/issues/1526#issuecomment-731855231
const inspect = require("util").inspect;
const svgContents = require('eleventy-plugin-svg-contents');


module.exports = function (eleventyConfig) {
  // debug
  eleventyConfig.addFilter("debug", (content) => `${inspect(content)}`);

  // copy /fonts folder to site production
  // eleventyConfig.addPassthroughCopy("fonts");


  //inline svg
  eleventyConfig.addPlugin(svgContents);

  // navigation plugin
  const pluginNavigation = require("@11ty/eleventy-navigation");
  eleventyConfig.addPlugin(pluginNavigation);

  // tailwind css
  eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./styles/tailwind.css')

  // alpine js
  // eleventyConfig.addPassthroughCopy({
  //   './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
  // })

  // rellax scroll js
  eleventyConfig.addPassthroughCopy({
    './node_modules/rellax/rellax.min.js': './js/rellax.js',
  })

  // files version.. useful ?
  eleventyConfig.addShortcode('version', function () {
    return now
  })
  // Annee en cours
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // minify html
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }

    return content
  })

  // layouts
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  // filtres pour single post
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('dd.LL.yyyy');
  });
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('dd LLL yyyy', { locale: "fr" });
  });
  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  }
  eleventyConfig.addFilter("filterTagList", filterTagList)

}
