import { EventCardContainer } from '@/components/dashboard/EventCard';
import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';

export default function page() {
  const events = [
    {
      id: '1',
      title: 'Billy and Rica',
      type: 'Wedding',
      location: 'Philippines',
      thumbnail: '/images/mockEvent/img1.jpg',
    },
    {
      id: '1',
      title: 'Billy and Rica',
      type: 'Wedding',
      location: 'Philippines',
      thumbnail: '/images/mockEvent/img1.jpg',
    },
    {
      id: '1',
      title: 'Billy and Rica',
      type: 'Wedding',
      location: 'Philippines',
      thumbnail: '/images/mockEvent/img1.jpg',
    },
    {
      id: '1',
      title: 'Billy and Rica',
      type: 'Wedding',
      location: 'Philippines',
      thumbnail: '/images/mockEvent/img1.jpg',
    },
    {
      id: '1',
      title: 'Billy and Rica',
      type: 'Wedding',
      location: 'Philippines',
      thumbnail: '/images/mockEvent/img1.jpg',
    },
    {
      id: '1',
      title: 'Billy and Rica',
      type: 'Wedding',
      location: 'Philippines',
      thumbnail: '/images/mockEvent/img1.jpg',
    },
    {
      id: '1',
      title: 'Billy and Rica',
      type: 'Wedding',
      location: 'Philippines',
      thumbnail: '/images/mockEvent/img1.jpg',
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row justify-between">
        <p className="text-2xl font-bold">Upcoming Event</p>
        <Input placeholder="Search an event" className="w-fit" />
      </div>
      <div className="h-full w-full items-start justify-start relative flex flex-row flex-wrap gap-y-20 gap-x-2">
        {events.map((evt) => (
          <EventCardContainer key={evt.id} {...evt} />
        ))}
        <div className="ml-5 w-[354px] aspect-square rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-white group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden items-center flex flex-col justify-center gap-2">
          <PlusCircle size={100} className="text-gray-400" />
          <p className="text-2xl text-gray-400">Create New Event</p>
        </div>
      </div>
    </div>
  );
}
