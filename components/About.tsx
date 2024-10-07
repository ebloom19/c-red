import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="p-16 bg-secondary flex flex-col items-center justify-center">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold">About C-Red Tuning</h2>
            <p className="mb-4">
              C-Red Tuning is one of the oldest specialist Japanese Import Tuning Houses in Australia. Formed in 1997 by Jeff Ash to Import, Service and Tune Japanese Sports Cars for Australian enthusiasts. Our primary focus is on Nissan Skyline and Silvia/200SX, Toyota Import RWD Platforms and the Mitsubishi Lancer Evolution 7 onward.
            </p>
            <p className="mb-4">
              The Nissan SR20 and RB Engines, Toyota's JZ series and the Mitsubishi 4G63 engines are our specialty. We are also fond of the odd LSx engine in the right car!
            </p>
            <p>
              From regular servicing to show car builds, we cover it all. From Mild Power Upgrades, Engine Builds and Turbo Kits to Extreme Performance and Crazy Conversions. Tuning it all on our in-house Dyno Dynamics Dyno, we're able to tailor a solution to your import needs.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/images/c-red-workshop.jpg"
              alt="C-Red Tuning workshop"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About