'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Switch} from '@/components/ui/switch';
import {Label} from '@/components/ui/label';
import Link from 'next/link';

const defaultServices = [
  {id: 1, name: 'Gel Manicure', price: 45, duration: 45, category: 'Hands', technicianSpecialization: 'Nail Art'},
  {id: 2, name: 'Pedicure', price: 60, duration: 60, category: 'Feet'},
  {id: 3, name: 'Acrylic Nails', price: 75, duration: 90, category: 'Hands', technicianSpecialization: 'Acrylic Specialist'},
];

export default function AdminSettings() {
  const [salonName, setSalonName] = useState('The Nail Shop');
  const [address, setAddress] = useState('123 Main Street, Anytown');
  const [contactPhone, setContactPhone] = useState('+1 (123) 456-7890');
  const [website, setWebsite] = useState('www.thenailshop.com');
  const [mondayHours, setMondayHours] = useState('10:00 AM - 6:00 PM');
  const [tuesdayClosed, setTuesdayClosed] = useState(true);
  const [wednesdayHours, setWednesdayHours] = useState('10:00 AM - 8:00 PM');
  const [services, setServices] = useState(defaultServices);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="mb-4">Manage your salon information and settings here.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Salon Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="salonName">Salon Name</Label>
            <Input
              type="text"
              id="salonName"
              value={salonName}
              onChange={e => setSalonName(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="contactPhone">Contact Phone Number</Label>
            <Input
              type="text"
              id="contactPhone"
              value={contactPhone}
              onChange={e => setContactPhone(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="website">Website/Social Media Links</Label>
            <Input
              type="text"
              id="website"
              value={website}
              onChange={e => setWebsite(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Opening Hours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="mondayHours">Monday</Label>
            <Input
              type="text"
              id="mondayHours"
              value={mondayHours}
              onChange={e => setMondayHours(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="tuesdayClosed">Tuesday</Label>
            <Switch id="tuesdayClosed" checked={tuesdayClosed} onCheckedChange={setTuesdayClosed} />
            {tuesdayClosed && <p className="text-muted-foreground">Closed</p>}
          </div>
          <div>
            <Label htmlFor="wednesdayHours">Wednesday</Label>
            <Input
              type="text"
              id="wednesdayHours"
              value={wednesdayHours}
              onChange={e => setWednesdayHours(e.target.value)}
              className="mt-1"
            />
          </div>
          {/* Add more days as needed */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Services &amp; Prices</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Technician Specialization</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.id}>
                  <td className="border px-4 py-2">{service.name}</td>
                  <td className="border px-4 py-2">${service.price}</td>
                  <td className="border px-4 py-2">{service.duration} min</td>
                  <td className="border px-4 py-2">{service.category}</td>
                  <td className="border px-4 py-2">{service.technicianSpecialization || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button className="mt-4">+ Add New Service</Button>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Technician Availability</h2>
        {/* Implement technician availability management UI here */}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Booking Rules</h2>
        {/* Implement booking rules settings UI here */}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Notifications &amp; Reminders</h2>
        {/* Implement notifications settings UI here */}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Payment Settings (Optional)</h2>
        {/* Implement payment settings UI here */}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Admin Users / Roles (Advanced)</h2>
        {/* Implement admin user management UI here */}
      </section>

      <Link href="/admin">
        <Button variant="outline">Back to Admin Panel</Button>
      </Link>
    </div>
  );
}
