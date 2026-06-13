export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-4">
      <h2 className="text-2xl font-bold md:text-[32px]">{children}</h2>
      <div className="h-1 w-10 bg-black" />
    </div>
  );
}
