import AboutLayout from './layout'

// export const generateMetadata = async ({ params }: { params: PageProps["params"]}) => {
//   const data = await fetchData(params);

//   const title = `Spacd - ${data.title}`;
//   const seo_img = `${process.env.NEXT_PUBLIC_HOST}/img/${data.headerImage.split("/").at(-1)}`;
//   const url = `${process.env.NEXT_PUBLIC_HOST}/brands/${data.path}`;

//   return {
//     title,
//     description: data.description,
//     applicationName: title,
//     keywords: data.tags,
//     icons: {
//       icon: '/icon.png',
//       shortcut: '/shortcut-icon.png',
//       apple: '/apple-icon.png',
//       other: {
//         rel: 'apple-touch-icon-precomposed',
//         url: '/apple-touch-icon-precomposed.png',
//       },
//     },
//     openGraph: {
//       title,
//       description: data.description,
//       url,
//       siteName: 'Spacd',
//       images: [
//         {
//           url: seo_img,
//         },
//       ],
//       locale: 'en-US',
//       type: 'website',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description: data.description,
//       images: [seo_img],
//       url
//     },
//     other: {
//       "og:image": seo_img,
//     },
//   }
// }

const Layout = () => {
  return <AboutLayout />
}

export default Layout
