import Logo from "~/assets/images/logo.svg";
import 'flowbite';

export default function About() {
  
  let newsletterRef: HTMLDivElement;
  const handleScrollToNewsletter = () => {
    newsletterRef?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div class="w-full" style="
        background: rgba(22, 100, 255, 1.0);
        background: radial-gradient(circle at 60% 200%, rgba(0, 68, 204, 0.35), rgba(22, 100, 255, 0.3) 30%, rgba(255, 134, 127, 0.15) 70%, rgba(255, 167, 0, 0.12) 85%, rgba(255, 167, 0, 0.50) 140%);
      ">
        <section class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 z-10">
          <div class="grid grid-rows-1 md:grid-rows-1 md:grid-cols-1 gap-5 items-center justify-center">
            <div class="text-center">
              <div class="sm:px-[10%] md:px-[20%] mb-4 lg:mb-8">
                <img alt="OpShala Logo" src={Logo} class="mx-auto max-w-[75%]" />
              </div>
              <h1 class="mb-4 text-xl font-bold tracking-tight leading-none text-secondary lg:text-3xl xl:text-4xl">
                Hello World!
              </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
