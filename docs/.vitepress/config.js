// .vitepress/config.js
export default {
  title: 'Teguh Sabila',
  description: 'Personal portofolio website by Teguh Sabila',

  themeConfig: {
    logo: "/me.jpg",
    siteTitle: "Teguh Sabila",
    nav: [
    { text: "Blog", link: "//blog.teguhsbl.my.id"},
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
    ],
    
    socialLinks: [
    
      {
        icon: {
            svg: `<img src="/icons8-facebook-100.png" alt="My Custom Icon" style="width: 32px; height: 32px;" />`
        },
        link: 'https://fb.me/sabilateguh04'
      },
        
      {
        icon: {
            svg: `<img src="/icons8-instagram-100.png" alt="My Custom Icon" style="width: 32px; height: 32px;" />`
        },
        link: 'https://instagram.com/sabilateguh04'
      },
      {
        icon: {
             svg: `<img src="/icons8-whatsapp-100.png" alt="My Custom Icon" style="width: 32px; height: 32px;" />`
        },
        link: 'https://wa.me/6289530639515'
      },
    ],
     
    footer: {
   message: "This is my personal portofolio website to share my project and ideas.",
   copyright: "Copyright © 2024-present Teguh Sabila",
 },
  },
}
