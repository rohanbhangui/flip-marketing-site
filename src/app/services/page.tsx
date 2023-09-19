import ServicesLayout from './layout'

export const generateMetadata = async () => {
  // const data = await fetchData(params)

  // const title = `Spacd - ${data.title}`
  // const seo_img = `${process.env.NEXT_PUBLIC_HOST}/img/${data.headerImage
  //   .split('/')
  //   .at(-1)}`
  // const url = `${process.env.NEXT_PUBLIC_HOST}/brands/${data.path}`

  const title = 'Services'
  const description = `See how we have helped countless businesses reach their potential`

  const data = {
    title,
    description,
  }

  const url = `https://flipyourmarketing.ca/services`

  const seo_img = `${process.env.NEXT_PUBLIC_HOST}/seo-logo-image.png`

  return {
    title,
    description,
    applicationName: title,
    keywords: '',
    icons: {
      icon: '/icon.png',
      shortcut: '/shortcut-icon.png',
      apple: '/apple-icon.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    },
    openGraph: {
      title,
      description: data.description,
      url,
      siteName: 'Flip Marketing',
      images: [
        {
          url: seo_img,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: data.description,
      images: [seo_img],
      url,
    },
    other: {
      'og:image': seo_img,
    },
  }
}

const Layout = () => {
  return <ServicesLayout />
}

export default Layout
