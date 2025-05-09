import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";
// import { FileTextIcon } from "@radix-ui/react-icons";

const editorsPick = [
  {
    // icon:FileTextIcon,
    title: "The Future of Remote Work",
    summary: "How companies are rethinking offices in the age of AI and flexibility.",
    image: "/images/remote-work.jpg",
    href: "/",
    cta: "Read more",
    background: (
      <Image
        src="/images/remote-work.jpg"
        alt="Remote work"
        fill
        className="object-cover opacity-50"
      />
    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    // icon:FileTextIcon,
    title: "Inside the World of Competitive Coding",
    summary: "A look into the lives of top coders battling for algorithmic glory.",
    image: "/images/competitive-coding.jpg",
    href: "/",
    cta: "Read more",
    background: (
      <Image
        src="/images/competitive-coding.jpg"
        alt="Competitive Coding"
        fill
        className="object-cover opacity-50"
      />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    // icon:FileTextIcon,
    title: "Climate Tech is Booming",
    summary: "Startups and investors are betting big on the green tech revolution.",
    image: "/images/climate-tech.jpg",
    href: "/",
    cta: "Read more",
    background: (
      <Image
        src="/images/climate-tech.jpg"
        alt="Climate Tech"
        fill
        className="object-cover opacity-50"
      />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    // icon:FileTextIcon,
    title: "The Rise of Indie Game Developers",
    summary: "Passion projects are shaping the gaming industry like never before.",
    image: "/images/indie-games.jpg",
    href: "/",
    cta: "Read more",
    background: (
      <Image
        src="/images/indie-game-developer.jpg"
        alt="Indie Games"
        fill
        className="object-cover opacity-50"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
];

function EditorsPick() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-[#111827]">Editor's Pick</h2>
      <BentoGrid className="lg:grid-rows-2">
        {editorsPick.map((item) => (
          <BentoCard
            key={item.title}
            // Icon={FileTextIcon}
            name={item.title}
            description={item.summary}
            href={item.href}
            cta={item.cta}
            background={item.background}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default EditorsPick;
