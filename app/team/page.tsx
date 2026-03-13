/**
 * Core Team Page
 * 
 * Credits the organizing team with photos, names, roles, and bios.
 * Static content page - data will be hardcoded in a data file.
 * 
 * @route /team
 */
import {
  DepartmentsSection,
  GetInTouchSection,
  LandingSection,
  LeadersSection,
  OrganizerSection,
} from "@/app/team/sections";

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-tedx-white bg-black">
      <LandingSection />
      <OrganizerSection />
      <LeadersSection />
      <DepartmentsSection />
      <GetInTouchSection />
    </div>
  );
}