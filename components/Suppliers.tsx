const suppliers = [
  { name: 'Power House Racing', url: 'http://www.powerhouseracing.com/' },
  { name: 'Nitto Performance Engineering', url: 'http://www.nitto.com.au/' },
  { name: 'Dyno Dynamics', url: 'http://www.dyno.com.au/' },
  { name: '6Boost.com', url: 'http://www.6boost.com/' },
  { name: 'Hypertune', url: 'http://www.hypertune.net/' },
  { name: 'Royal Purple', url: 'http://www.royalpurple.com.au/' },
  { name: 'Ross Performance Parts', url: 'http://www.rosstuffbond.com.au/' },
  { name: 'Exedy', url: 'http://www.exedy.com.au/' },
  { name: 'Haltech', url: 'http://www.haltech.com/' },
  { name: 'Koyorad', url: 'http://www.koyoradracing.com/' },
  { name: 'TiAL Sport', url: 'http://www.tialsport.com/' },
  { name: 'Garrett', url: 'http://www.turbobygarrett.com/' },
  { name: 'Tomei', url: 'http://tomeiusa.com/' },
  { name: 'Valvoline', url: 'http://www.valvoline.com.au/' },
]

const Suppliers = () => {
  return (
    <section className="p-16 bg-secondary">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold text-center">Our Suppliers</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {suppliers.map((supplier, index) => (
            <a
              key={index}
              href={supplier.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {supplier.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Suppliers