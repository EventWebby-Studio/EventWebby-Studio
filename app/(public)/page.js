import RsvpForm from "../../components/layout/RsvpForm";
import HeroSection from "@/components/ui/HeroSection";
import LogoCloudSection from "@/components/ui/LogoCloudSection";
import ContentSection from "@/components/ui/ContentSection";
import FeatureSection from "@/components/ui/FeatureSection";
import CTASection from "@/components/ui/CTASection";
import BentoGridSection from "@/components/ui/BentoGridSection";
import HeaderSection from "@/components/ui/HeaderSection";
import ContactSection from "@/components/ui/ContactSection";
import BlogSection from "@/components/ui/BlogSection";
import CoreSection from "@/components/ui/CoreSection";
import WordScrollingSection from "@/components/ui/WordScrollingSection";
import AboutSection from "@/components/ui/AboutSection";
import GridSection from "@/components/ui/GridSection";
import ScrollJackedSection from "@/components/ui/ScrollJackedSection";
import FooterSection from "@/components/ui/FooterSection";
export default function HomePage() {
  return (
    <section className="text-center">
      <HeroSection></HeroSection>
      <ScrollJackedSection></ScrollJackedSection>
      {/* <WordScrollingSection></WordScrollingSection> */}
      <AboutSection></AboutSection>
      <GridSection></GridSection>
      {/* <h1 className="text-5xl font-bold mb-4">
        Build a RSVP event website Faster with InviteFlow
      </h1>
      <p className="text-gray-600 mb-8">
        An agency-ready fullstack boilerplate with RSVP functionality.
      </p>
      <a
        href="/login"
        className="btn inline-block"
      >
        Get Started
      </a> */}
      {/* <LogoCloudSection></LogoCloudSection> */}
      {/* <ContentSection></ContentSection> */}
      {/* <BentoGridSection></BentoGridSection> */}
      <FeatureSection></FeatureSection>
      {/* <CoreSection></CoreSection> */}
        <ContactSection></ContactSection>
      {/* <CTASection></CTASection> */}
      {/* <HeaderSection></HeaderSection> */}

      {/* <BlogSection></BlogSection> */}


      {/* <RsvpForm></RsvpForm> */}
      <FooterSection></FooterSection>
    </section>
  )
}
