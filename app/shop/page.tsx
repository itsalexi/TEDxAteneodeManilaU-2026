/**
 * Merchandise Shop
 * 
 * Shop page for TEDx-branded merchandise. Displays products with
 * images, descriptions, and prices. Redirects to google forms for payment.
 * 
 * @route /shop
 */
import {
  CatalogSection,
  LandingSection,
  TopPicksSection,
} from "@/app/shop/sections";

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-tedx-white bg-black">
      <LandingSection />
      <TopPicksSection />
      <CatalogSection />
    </div>
  );
}