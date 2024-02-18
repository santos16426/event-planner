export default function page() {
  return (
    <div className="w-screen min-h-screen relative bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="p-20 flex flex-row gap-10 flex-wrap">
        <div className="w-52 p-8 text-lg bg-slate-100 aspect-square rounded-md shadow-lg flex items-center justify-center">
          <p className="text-wrap break-words line-clamp-3 p-3 text-center">
            Website
          </p>
        </div>
        <div className="w-52 p-8 text-lg bg-slate-100 aspect-square rounded-md shadow-lg flex items-center justify-center">
          <p className="text-wrap break-words line-clamp-3 p-3 text-center">
            Event Details
          </p>
        </div>
        <div className="w-52 p-8 text-lg bg-slate-100 aspect-square rounded-md shadow-lg flex items-center justify-center">
          <p className="text-wrap break-words line-clamp-3 p-3 text-center">
            GuestList
          </p>
        </div>
        <div className="w-52 p-8 text-lg bg-slate-100 aspect-square rounded-md shadow-lg flex items-center justify-center">
          <p className="text-wrap break-words line-clamp-3 p-3 text-center">
            Gift Registry
          </p>
        </div>
        <div className="w-52 p-8 text-lg bg-slate-100 aspect-square rounded-md shadow-lg flex items-center justify-center">
          <p className="text-wrap break-words line-clamp-3 p-3 text-center">
            Invitations
          </p>
        </div>
        <div className="w-52 p-8 text-lg bg-slate-100 aspect-square rounded-md shadow-lg flex items-center justify-center">
          <p className="text-wrap break-words line-clamp-3 p-3 text-center">
            Suppliers
          </p>
        </div>
        <div className="w-52 p-8 text-lg bg-slate-100 aspect-square rounded-md shadow-lg flex items-center justify-center">
          <p className="text-wrap break-words line-clamp-3 p-3 text-center">
            Requirements(Wedding)
          </p>
        </div>
      </div>
    </div>
  );
}
