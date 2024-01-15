import HeroSection from "@/components/hero-section/hero-section";
import Features from "@/components/feature";
import ChartSection from "@/components/chart-section";
import Testimonials from "@/components/Testimonials";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			{/* Hero Section */}
			<HeroSection />
			{/* User Services Experience */}
			<Features />
			{/* Transaction Matrics Section */}
			<ChartSection/>
			{/* Testimonials Section */}
			<Testimonials/>
		</section>
	);
}
