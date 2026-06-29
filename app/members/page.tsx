import Link from "next/link";
import { AssociationLinks } from "@/components/AssociationLinks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RecruitSection } from "@/components/RecruitSection";
import { SectionTitle } from "@/components/SectionTitle";
import { MdArrowOutward } from "react-icons/md";

const members = [
  { name: "旭調査設計(株)", address: "新潟市中央区幸西1-1-11", tel: "025-245-8345" },
  { name: "応用地質(株)北信越事務所", address: "新潟市東区紫竹7-27-35", tel: "025-274-5656" },
  { name: "川崎地質(株)北陸支社", address: "新潟市中央区紫竹山5-7-5", tel: "025-241-6294" },
  { name: "(株)キタック", address: "新潟市中央区新光町10-2", tel: "025-281-1111" },
  { name: "基礎地盤コンサルタンツ(株)　北陸支社", address: "新潟市中央区弁天橋通1-2-34", tel: "025-257-1888" },
  { name: "(株)興和", address: "新潟市中央区新光町6-1", tel: "025-281-8811" },
  { name: "国土防災技術(株)新潟支店", address: "新潟市西区小針西2-5-29", tel: "025-260-2245" },
  { name: "サンコーコンサルタント(株)　北陸支社", address: "新潟市西区寺尾上4-4-15", tel: "025-260-3141" },
  { name: "(株)新協地質", address: "新潟市江南区曙町4-9-7", tel: "025-383-1771" },
  { name: "(株)新研基礎コンサルタント", address: "新潟市江南区山二ツ309-1", tel: "025-286-7188" },
  { name: "大日本ダイヤコンサルタント(株)新潟支社", address: "新潟県新潟市中央区万代2-3-16", tel: "025-241-0114" },
  { name: "中央開発(株)北陸支店", address: "新潟市中央区堀之内南3-1-21", tel: "025-283-0211" },
  { name: "東邦地水(株)新潟営業所", address: "長岡市千歳1-3-37", tel: "0258-33-2846" },
  { name: "(株)東京ソイルリサーチ　新潟営業所", address: "新潟市東区松崎1-16-37", tel: "025-272-1612" },
  { name: "(株)日さく　新潟支店", address: "新潟市東区卸新町2-2066-11", tel: "025-273-6301" },
  { name: "日特建設(株)北陸支店", address: "新潟市中央区南出来島1-4-4", tel: "025-383-8700" },
  { name: "日本基礎技術(株)新潟営業所", address: "新潟市東区寺山3-6-18", tel: "025-271-6311" },
  { name: "日本物理探鑛(株)北陸支店", address: "新潟市中央区神道寺3-11-19", tel: "025-241-2960" },
  { name: "(株)村尾技建", address: "新潟市中央区女池南2-4-17", tel: "025-284-6100" },
  { name: "明治コンサルタント(株)　北陸支社", address: "新潟市西区青山1-1-22", tel: "025-265-1122" },
];

function MemberBullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-1 inline-block size-4 shrink-0 rounded-full border border-foreground bg-brand-peach md:size-5"
    />
  );
}

export default function MembersPage() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero />

        <section className="bg-background pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <SectionTitle>協会案内</SectionTitle>
            <div className="mt-10 md:mt-16">
              <AssociationLinks current="/members" />
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <SectionTitle>会員名簿</SectionTitle>

            <div className="mx-auto mt-10 max-w-3xl md:mt-16">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="flex items-start gap-3 bg-bottom bg-repeat-x bg-[length:15px_3px] bg-[image:repeating-linear-gradient(to_right,var(--color-foreground)_0_3px,transparent_3px_15px)] py-4 md:gap-4 md:py-6"
                >
                  <MemberBullet />
                  <div className="space-y-1.5 text-sm md:space-y-2 md:text-lg">
                    <p className="font-bold">{member.name}</p>
                    <p>
                      {member.address}
                      <br className="md:hidden" />
                      <span className="hidden md:inline">／</span>
                      TEL：{member.tel}
                    </p>
                    <Link href="#" className="inline-flex items-center gap-1 whitespace-nowrap underline">
                      Website <MdArrowOutward className="size-5 md:size-7" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RecruitSection />
      </main>
      <Footer />
    </div>
  );
}
