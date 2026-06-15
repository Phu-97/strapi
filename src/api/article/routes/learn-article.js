module.exports = {
  routes: [
    {
      method: "GET",
      path: "/blogs",
      handler: "learn-article.find",
    },
    {
      method: "GET",
      path: "/blogs/:id",
      handler: "learn-article.findOne",
    },
    {
      method: "POST",
      path: "/blogs",
      handler: "learn-article.create",
    },
    {
      method: "DELETE",
      path: "/blogs/:id",
      handler: "learn-article.delete",
    },
    {
      method: "PUT",
      path: "/blogs/:id",
      handler: "learn-article.update",
    },
  ],
};
