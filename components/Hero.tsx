import { PageHero } from "./PageHero";

export function Hero() {
  return (
    <PageHero
      illustration="イラストが入ります"
      note={
        <>
          ※イラストデザインに合わせて
          <br />
          背景色を調整します。
        </>
      }
    />
  );
}
