
// const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/main.js");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/webfonts");

  // let options = {
	// 	html: true,
	// 	breaks: true,
	// 	linkify: true,
	// };

	// eleventyConfig.setLibrary("md", markdownIt(options));



  return{
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
     
    },
  }
};