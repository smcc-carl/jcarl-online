module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/main.js");


  return{
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
     
    },
  }
};