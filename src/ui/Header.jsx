function Header() {
  return (
    <div className="flex flex-row items-center justify-between bg-slate-900 px-4 py-3 ">
      <div className="text-white text-xl font-bold border px-3 py-2 border-white">
        MessageNode
      </div>
      <div className="flex flex-row gap-14 text-xl font-semibold pr-12">
        <div className="text-orange-500">Feed</div>
        <div className="text-white">Logout</div>
      </div>
    </div>
  );
}

export default Header;
