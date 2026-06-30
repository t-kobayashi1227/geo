import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ContactPage() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-[linear-gradient(170deg,#eef7fe_0%,#dcecfb_100%)] px-4 py-12 text-center md:px-10 md:py-20">
          <h1 className="text-2xl font-bold text-[#16202b] md:text-[32px]">お問い合わせ</h1>
          <p className="mt-1 text-[11px] tracking-[4px] text-[#88a0b3] md:text-xs">CONTACT</p>
          <p className="mx-auto mt-5 max-w-[480px] text-xs leading-relaxed text-[#46607a] md:max-w-none md:text-sm">
            ご相談・ご依頼など、下記フォームよりお気軽にお問い合わせください。
            <br />
            <span className="font-bold text-[#e0584f]">必須</span>項目は必ずご入力ください。
          </p>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-10">
            <div className="mx-auto max-w-[680px]">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
