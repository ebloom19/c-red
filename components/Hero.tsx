import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-4rem)] bg-black">
      <Image
        src="https://images.unsplash.com/photo-1607603750909-408e193868c7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
        alt="Japanese tuned car"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">C-Red Tuning</h1>
        <p className="mb-8 text-xl md:text-2xl">Japanese Import Tuning Specialists</p>
        <Button size="lg" asChild>
          <a href="#services">Explore Our Services</a>
        </Button>
      </div>
    </div>
  )
}

export default Hero