export default function Home() {
  return (
    <main>
      <div className="flex flex-col my-4 gap-4 items-center justify-center">
        <a
          className="px-4 py-2 w-[300px] text-center hover:bg-slate-600 hover:text-white bg-slate-400 rounded-sm text-green-700 transition"
          href="/users"
        >
          Users
        </a>
        <a
          className="px-4 py-2 w-[300px] text-center hover:bg-slate-600 hover:text-white bg-slate-400 rounded-sm text-gray-800 transition"
          href="/protocols"
        >
          Protocols
        </a>
      </div>
    </main>
  )
}
