// components/SiteFooter.tsx

async function getCurrentYear() {
  'use cache'
  return new Date().getFullYear()
}

export default async function SiteFooter() {
  const year = await getCurrentYear()
  return (
    <footer className="bg-jacaranda-800 text-jacaranda-100 py-10 text-center font-sans text-sm">
      © {year} Keo Studio · Pretoria
    </footer>
  )
}