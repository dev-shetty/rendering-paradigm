export default function RetroSection({ 
  title, 
  children 
}: { 
  title: string, 
  children: React.ReactNode 
}) {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold border-b-4 border-[#2c1810] pb-4 text-center">
        {title}
      </h1>
      <div className="grid gap-6">
        {children}
      </div>
    </section>
  )
} 