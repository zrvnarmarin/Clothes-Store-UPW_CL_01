import ArrivalsSection from '@/components/arrivals/ArrivalsSection'
import CommunitySection from '@/components/community/CommunitySection'
import CompaniesSection from '@/components/companies/CompaniesSection'
import FavoriteSection from '@/components/favorite/FavoriteSection'
import HeroSection from '@/components/hero/HeroSection'
import SaleSection from '@/components/sale/SaleSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <HeroSection />
      <CompaniesSection />
      <ArrivalsSection />
      <SaleSection />
      <FavoriteSection />
      <CommunitySection />
    </main>
  )
}
