import  EditorPick from "@/components/EditorPick";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MediumNewsBox from "@/components/MediumNewsBox";
import TopStory from "@/components/TopStory";

export default function Home() {
  return (
    <main className="mx-[12%]">
      <div className=" min-h-screen">
        <Header />
        <Hero/>
        <TopStory/>
        <EditorPick/>
        <MediumNewsBox/>
        <Footer/>
      </div>
    </main>
  );
}
