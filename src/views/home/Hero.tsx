export function Hero() {
  return (
    <section className="relative h-[60vh] bg-gray-900">
      <img
        src="https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
        alt="Paisaje de Sudamérica"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center px-4">EXPLORA SUDAMÉRICA CON NOSOTROS</h1>
      </div>
    </section>
  )
}
