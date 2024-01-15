import Logo from "../../assets/images/logo.svg";

export default function NotFound() {
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
                  No-code DevOps <small>for</small> Business Apps
                </h1>
                <p class="text-lg font-normal lg:text-xl sm:px-3 lg:px-6">
                  Desktop application to deploy/manage <a href="https://wordpress.org" target="_blank" class="text-secondary underline hover:no-underline">Wordpress</a> &amp; other web applications on popular cloud hosting services with <span class="text-logo">OpShala</span>'s simplified interface!
                </p>
              </div>
            </div>
          </section>
      </div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 z-10 text-center">
        <div class="my-2 md:w-1/2 mx-auto">
          <h1 class="mb-4 text-xl font-bold tracking-tight leading-none text-secondary lg:text-3xl xl:text-4xl">
            Page not found!
          </h1>
          <p class="text-lg font-normal lg:text-xl">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <p class="mt-10">
            <a href="/" type="button" class="px-5 py-3 text-lg font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:outline-none focus:ring-accent/30">Go to the OpShala Homepage</a>
          </p>
        </div>
      </div>
    </>
  );
}
