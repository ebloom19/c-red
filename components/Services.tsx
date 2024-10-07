import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, Gauge, Cpu, Battery, Car, Cable } from 'lucide-react'

const services = [
  {
    title: 'Engine Tuning',
    description: 'Optimize your engine performance for maximum power and efficiency.',
    icon: Wrench,
  },
  {
    title: 'ECU Remapping',
    description: 'Custom ECU programming to unlock your vehicle\'s full potential.',
    icon: Cpu,
  },
  {
    title: 'Performance Upgrades',
    description: 'High-quality aftermarket parts to enhance your vehicle\'s capabilities.',
    icon: Gauge,
  },
  {
    title: 'Hybrid Tuning',
    description: 'Specialized tuning for hybrid Japanese imports.',
    icon: Battery,
  },
  {
    title: 'Import Services',
    description: 'Handpick and import the best Japanese sports cars for you.',
    icon: Car,
  },
  {
    title: 'Regular Servicing',
    description: 'Keep your vehicle in top condition with our expert servicing.',
    icon: Cable,
  },
]

const Services = () => {
  return (
    <section id="services" className="p-16 bg-background flex flex-col items-center justify-center">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services