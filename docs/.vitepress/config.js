// .vitepress/config.js
export default {
  title: 'Rokuro Inosuke',
  description: 'Indonesian Content Creator Gaming',

  themeConfig: {
    logo: "/me.jpg",
    siteTitle: "Rokuro Inosuke",
    nav: [
    { text: "Blog", link: "//blog.rokuro.my.id"},
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
    ],
    
    socialLinks: [
      {
        icon: {
          svg: `<img src="/icons8-github-100.png" alt="My Custom Icon" style="width: 32px; height: 32px;" />`
        },
        link: 'https://github.com/teguhsbl'
      },
      {
        icon: {
          svg: `<img src="/icons8-tiktok-100.png" alt="My Custom Icon" style="width: 32px; height: 32px;" />`
        },
        link: 'https://www.tiktok.com/@rokuro.04'
      }

    ],
     
    footer: {
   message: "This is my personal website, which combines various of my platforms.",
   copyright: "Copyright © 2024-present Rokuro Inosuke",
 },
  },
}
