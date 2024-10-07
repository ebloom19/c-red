import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-secondary p-8">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">C-Red Tuning</h3>
            <p>Specialist Japanese Import Tuning House</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <p>Unit 8, 383 Sevenoaks St</p>
            <p>Beckenham WA 6107</p>
            <p>Australia</p>
            <p>Tel: (08) 9356 3000</p>
            <p>Email: marc@c-red.com.au</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Opening Hours</h3>
            <p>Monday to Friday 8:15am - 5:00pm</p>
            <p>Available by Appointment other times</p>
            <div className="mt-4">
              <h4 className="mb-2 font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-foreground hover:text-primary">
                  <Facebook />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary">
                  <Instagram />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary">
                  <Twitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 C-Red Tuning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer