module.exports = {
  query: `
        galleriesCount(where: JSON): Int!
        
      `,
  resolver: {
    Query: {
      galleriesCount: {
        description: "Return the count of galleries",
        resolverOf: "application::gallery.gallery.count",
        resolver: async (obj, options, ctx) => {
          return await strapi.api.gallery.services.gallery.count(
            options.where || {}
          );
        },
      },
    },
  },
};
