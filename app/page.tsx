import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopStory from "@/components/TopStory";

export default function Home() {
  return (
    <main className="mx-[12%]">
      <div className=" min-h-screen">
        <Header />
        <Hero/>
        <TopStory/>
      </div>
    </main>
  );
}
