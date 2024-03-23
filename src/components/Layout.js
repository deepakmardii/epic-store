export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header>header</header>
      <main className="flex-grow bg-[#f7f7f7]">{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
