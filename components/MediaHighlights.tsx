import Image from 'next/image'
import Link from 'next/link'

const mediaItems = [
  {
    title: 'Workshop Profile',
    publication: 'High Performance Imports | #88',
    description: 'Overview of the C-Red Team',
    image: '/images/hpi-88-cpink2-cover.jpg',
    link: '/magazines/workshop-profile/',
  },
  {
    title: 'Engine Conversions',
    publication: 'Fast Fours & Rotaries | April 2010',
    description: '',
    image: '/images/fastfours-201004-engineconversions-cover.jpg',
    link: '/magazines/engine-conversions/',
  },
  {
    title: 'Chase-her',
    publication: 'High Performance Imports | #62',
    description: '1996 Toyota JZX100 Chaser',
    image: '/images/hpi-62-jz-cover.jpg',
    link: '/magazines/chase-her/',
  },
  // Add more media items as needed
]

const MediaHighlights = () => {
  return (
    <section className="p-16 bg-background">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold text-center">C-Red in the Media</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {mediaItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <Link href={item.link} className="block mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={260}
                  className="rounded-lg object-cover"
                />
              </Link>
              <h3 className="text-lg font-semibold mb-2">
                <Link href={item.link}>{item.title}</Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-1">{item.publication}</p>
              {item.description && <p className="text-sm">{item.description}</p>}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/magazines" className="text-primary hover:underline">
            View All Magazine Features
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MediaHighlights