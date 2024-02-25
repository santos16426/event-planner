'use client';
import { Switch } from '@/components/ui/switch';
import { dashboard } from '@/constants/dashboard/eventBuilder';
import { usePathname, useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="flex flex-col gap-10">
      {dashboard.map((item) => {
        return (
          <div key={item.title}>
            <div className="flex flex-row gap-2 items-center mb-2">
              <p className="text-2xl font-bold">{item.title}</p>
              {item.canBeDisabled && (
                <div>
                  <Switch defaultChecked={true} />
                  <p></p>
                </div>
              )}
            </div>
            <div className="flex flex-row gap-6">
              {item.links.map((link) => {
                return (
                  <div
                    key={link.title}
                    onClick={() => router.push(`${path}${link.href}`)}
                    className="w-40 aspect-square shadow-md bg-white rounded-2xl flex flex-col items-center justify-around py-2"
                  >
                    <div className="w-24 aspect-square">Icon</div>
                    <p className="text-base text-gray-500">{link.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
