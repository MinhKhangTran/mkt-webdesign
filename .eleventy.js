const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");
// Filters
const dateFilter = require("./src/filters/date-filter.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addWatchTarget("./src/scss/");

  // add filter for the year
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });

  // add featured projects to collection
  eleventyConfig.addCollection("featuredProject", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/projekte/*.md")
    ).filter((x) => x.data.featured);
  });

  // add projects to collections
  eleventyConfig.addCollection("projects", (collection) => {
    return collection.getFilteredByGlob("./src/projekte/*.md").reverse();
  });

  // add blogposts to collections
  eleventyConfig.addCollection("blogposts", (collection) => {
    return collection.getFilteredByGlob("./src/blogposts/*.md").reverse();
  });

  // add leistungen to collections
  eleventyConfig.addCollection("leistungen", (collection) => {
    return collection
      .getFilteredByGlob("./src/leistungen/*.md")
      .sort((a, b) => {
        return a.data.order > b.data.order ? 1 : -1;
      });
  });

  // add beispiele to collections
  eleventyConfig.addCollection("beispiele", (collection) => {
    return collection.getFilteredByGlob("./src/beispiele/*.md").sort((a, b) => {
      return a.data.order > b.data.order ? -1 : 1;
    });;
  });

  // add featured beispiele to collection
  eleventyConfig.addCollection("featuredBeispiele", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/beispiele/*.md")
    ).filter((x) => x.data.featured);
  });

  // Add filters
  eleventyConfig.addFilter("dateFilter", dateFilter);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
