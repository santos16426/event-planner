'use client';
import { Switch } from '@/components/ui/switch';
import { dashboard } from '@/constants/dashboard/eventBuilder';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="flex flex-col gap-10">
      {dashboard.map((item) => {
        return (
          <div key={item.title}>
            <div className="flex flex-row gap-2 items-center mb-8">
              <p className="text-2xl font-bold">{item.title}</p>
              {item.canBeDisabled && (
                <div>
                  <Switch defaultChecked={true} />
                  <p></p>
                </div>
              )}
            </div>
            <div className="flex flex-row gap-6 flex-wrap">
              {item.links.map((link) => {
                return (
                  <div
                    key={link.title}
                    onClick={() => router.push(`${path}${link.href}`)}
                    className="w-40 aspect-square shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-white rounded-2xl flex flex-col items-center justify-center py-2 cursor-pointer hover:scale-105"
                  >
                    <div className="w-24 aspect-square grid place-items-center">
                      {link.icon && (
                        <Image
                          src={link.icon}
                          width={50}
                          height={50}
                          alt="icon"
                        />
                      )}
                    </div>
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
