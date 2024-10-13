const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItTocDoneRight = require("markdown-it-toc-done-right");

module.exports = function (eleventyConfig) {
  // Copy static assets to the output directory
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/main.js");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/webfonts");

  // Add a collection of all Markdown files
  eleventyConfig.addCollection("all", function(collection) {
    return collection.getAll().filter(item => item.inputPath.endsWith(".md"));
});

  // Set up Markdown-it for Markdown rendering
  eleventyConfig.setLibrary("md", markdownIt({
    html: true, // Enable HTML tags in Markdown
    linkify: true, // Automatically convert URLs into links
    typographer: true // Enable smart quotes and other typographic replacements
  })
  .use(markdownItAnchor) // For anchor links on headings
  .use(markdownItTocDoneRight) // For table of contents generation
  );

  // Return configuration for input and output directories
  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    },
  };
};
