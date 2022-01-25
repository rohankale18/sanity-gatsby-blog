export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61efb09a4f9589c12a20a4ff",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-y2ndg34m",
                  apiId: "514f2303-4de9-4dad-9956-987008c6575d",
                },
                {
                  buildHookId: "61efb09b998e71b6a4429d3c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-upnze6i3",
                  apiId: "d50fcad4-8b7b-4e00-9298-c4aacf15e397",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rohankale18/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-upnze6i3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
