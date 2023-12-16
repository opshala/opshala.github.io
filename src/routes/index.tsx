import { A } from "solid-start";
import Counter from "~/components/Counter";
import Logo from "../../assets/images/logo.svg";

import 'flowbite';
import NewsletterForm from "~/components/NewsletterForm";

export default function Home() {
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
              <p class="mt-10">
                <a data-formkit-toggle="b7140df158" href="https://opshala.ck.page/b7140df158" class="px-5 py-3 text-lg font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:outline-none focus:ring-accent/30">Subscribe to our newsletter</a>
              </p>
            </div>
            {/* <div class="flex">
              <div role="status" class="flex flex-col items-center justify-center w-full max-w-[90%] max-h-full bg-gray-300 rounded-lg mx-auto aspect-video shadow-2xl shadow-primary/20 border-4 border-logo/30">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600 animate-pulse" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <div class="mt-4 text-gray-400 text-lg font-bold">Demo coming soon...</div>
                <span class="sr-only">Loading...</span>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      <section class="bg-logo text-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:gap-6">
          <div class="flex flex-col justify-start items-center gap-1">
            <div class="w-full h-[100px] flex justify-center items-center">
              <svg class="w-[75px] h-[75px] text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="m12.555 5.117 2.828 2.828M14 16v4m-2-2h4M3 6v4M1 8h4m11.01-6.339 2.828 2.829L3.99 19.339 1.161 16.51 16.01 1.661Z"/>
                <path fill="currentColor" d="M16 13h-2v2h2v-2ZM10 2H8v2h2V2ZM7 4H5v2h2V4ZM4 2H2v2h2V2Zm15 8h-2v2h2v-2Zm0 5h-2v2h2v-2Z"/>
              </svg>
            </div>
            <div class="text-xl text-accent font-bold">Simplified process</div>
            <div>Astonishingly trivial for <b><u>any</u></b> user to launch web-based applications.</div>
          </div>
          <div class="flex flex-col justify-start items-center gap-1">
            <div class="w-full h-[100px] flex justify-center items-center">
              <svg class="w-[75px] h-[75px] text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M18.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12.167v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>
            </svg>
            </div>
            <div class="text-xl text-accent font-bold">For non-technical users</div>
            <div>No technical knowhow required. Follow the steps to get an app up &amp; running in minutes!</div>
          </div>
          <div class="flex flex-col justify-start items-center gap-1">
            <div class="w-full h-[100px] flex justify-center items-center">
              <svg class="w-[75px] h-[75px] text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M1 1v14h16M4 10l3-4 4 4 5-5m0 0h-3.207M16 5v3.207"/>
              </svg>
            </div>
            <div class="text-xl text-accent font-bold">Be more resourceful</div>
            <div>Reduce your reliance on external resources, IT support &amp; consultants.</div>
          </div>
          <div class="flex flex-col justify-start items-center gap-1">
            <div class="w-full h-[100px] flex justify-center items-center">
              <svg class="w-[70px] h-[70px] text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"/>
              </svg>
              <svg class="w-[70px] h-[70px] text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linejoin="round" stroke-width="1" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </div>
            <div class="text-xl text-accent font-bold">Slash costs & efforts</div>
            <div>Less external reliance, well-engineered optimised choices &amp; non-technical interface means you save time &amp; money!</div>
          </div>
          <div class="flex flex-col justify-start items-center gap-1">
            <div class="w-full h-[100px] flex justify-center items-center">
              <svg class="w-[75px] h-[75px] text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"/>
              </svg>
            </div>
            <div class="text-xl text-accent font-bold">Assisted customisation</div>
            <div>Access our network to find the right solution providers for advanced customisation needs for deployed apps.</div>
          </div>
          <div class="flex flex-col justify-start items-center gap-1">
            <div class="w-full h-[100px] flex justify-center items-center">
              <svg class="w-[75px] h-[75px] text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M20 10a28.076 28.076 0 0 1-1.091 9M6.231 2.37a8.994 8.994 0 0 1 12.88 3.73M1.958 13S2 12.577 2 10a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088c.281.706.426 1.46.425 2.22a30 30 0 0 1-.464 6.231M5 10a6 6 0 0 1 9.352-4.974M3 19a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M6.5 17.336C8 15.092 8 12.846 8 10a3 3 0 1 1 6 0c0 .75 0 1.521-.031 2.311M11 10.001c0 3 0 6-2 9"/>
              </svg>
            </div>
            <div class="text-xl text-accent font-bold">Privacy</div>
            <div>Privacy is at the center of our idea. Your private information is never sent to OpShala.</div>
          </div>
          <div class="flex flex-col justify-start items-center gap-1">
            <div class="w-full h-[100px] flex justify-center items-center">
              <svg class="w-[75px] h-[75px] text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="m6 9 2 3 5-5M9 19A18.55 18.55 0 0 1 1 4l8-3 8 3a18.549 18.549 0 0 1-8 15Z"/>
              </svg>
            </div>
            <div class="text-xl text-accent font-bold">Security</div>
            <div>Cloud deployments are engineered to follow security best-practices, preserving the security of data &amp; users.</div>
          </div>
          <div class="flex flex-col justify-start items-center gap-1">
            <div class="w-full h-[100px] flex justify-center items-center">
              <svg class="w-[75px] h-[75px] text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
              </svg>
            </div>
            <div class="text-xl text-accent font-bold">Collaboration</div>
            <div>Scale demands collaboration. Stay organised &amp; collaborate with your teams for efficient &amp; low-effort DevOps.</div>
          </div>
        </div>
      </section>
      <section class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 z-10">
        <div class="my-2 md:w-1/2 mx-auto">
          <h1 class="mb-4 text-xl font-bold tracking-tight leading-none text-secondary text-center lg:text-3xl xl:text-4xl">
            Subscribe to our newsletter
          </h1>
          <p class="text-left p-5">
            Subscribe to the <span class="text-logo">OpShala</span> newsletter to stay informed and learn with our latest industry insights, tutorials, and guides!
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
