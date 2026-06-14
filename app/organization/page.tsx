import Link from "next/link";
import { AssociationLinks } from "@/components/AssociationLinks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RecruitSection } from "@/components/RecruitSection";
import { SectionTitle } from "@/components/SectionTitle";

const officers = [
  { title: "理事長", name: "平野　吉彦" },
  { title: "副理事長", name: "齋藤　浩之" },
  { title: "理事", name: "飯沼　浩" },
  { title: "理事", name: "村尾　治祐" },
  { title: "理事", name: "加藤　敏弘" },
  { title: "理事", name: "小林　久男" },
  { title: "理事", name: "中島　貞寿" },
  { title: "理事", name: "水澤　光京" },
  { title: "理事", name: "坂井　徹" },
  { title: "理事", name: "小幡　季也" },
  { title: "特別顧問", name: "中山　輝也" },
  { title: "特別顧問", name: "村尾　建治" },
  { title: "理事", name: "大塚　悟" },
  { title: "理事", name: "堀　武夫" },
  { title: "理事", name: "篠崎　寿一" },
  { title: "理事", name: "渡邊　衛" },
];

function GroupMarker() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-foreground bg-brand-purple md:size-8"
    >
      <span className="size-2 rounded-full border border-foreground bg-white md:size-2.5" />
    </span>
  );
}

function MemberMarker() {
  return (
    <span
      aria-hidden="true"
      className="inline-block size-4 shrink-0 rounded-full border border-foreground bg-brand-peach md:size-5"
    />
  );
}

export default function OrganizationPage() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero illustration="イラストor写真" />

        <section className="bg-background pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <SectionTitle>協会案内</SectionTitle>
            <div className="mt-10 md:mt-16">
              <AssociationLinks current="/organization" />
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <SectionTitle>組織・役員・委員会</SectionTitle>

            <div className="mx-auto mt-10 max-w-3xl space-y-10 md:mt-16 md:space-y-14">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <GroupMarker />
                  <h3 className="text-lg font-bold md:text-2xl">協会の組織</h3>
                </div>
                <div className="pl-9 md:pl-12">
                  <Link href="#" className="inline-flex items-center gap-3 text-sm underline md:gap-4 md:text-lg">
                    <MemberMarker />
                    協会組織図
                  </Link>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <GroupMarker />
                  <h3 className="text-lg font-bold md:text-2xl">役員</h3>
                </div>
                <div className="pl-9 md:pl-12">
                  {officers.map((officer) => (
                    <div
                      key={officer.name}
                      className="flex items-center gap-3 border-b border-dotted border-foreground py-3 text-sm md:gap-4 md:py-4 md:text-lg"
                    >
                      <MemberMarker />
                      <span className="w-20 md:w-28">{officer.title}</span>
                      <span className="flex-1 text-right">{officer.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <RecruitSection />
      </main>
      <Footer />
    </div>
  );
}
