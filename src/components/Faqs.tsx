import { For, onMount } from "solid-js";
import faqs from "~/data/faqs";
import { Accordion } from "flowbite";
import type { AccordionItem, AccordionInterface } from "flowbite";

export default function Faqs() {

    onMount(() => {
      const accordionEl: HTMLElement = document.querySelector('#faqs')!;
      const accordionItems: AccordionItem[] = faqs.map((faq, index) => {
        return {
          id: faq.id,
          triggerEl: document.querySelector(`#faqs-heading-${faq.id}`)!,
          targetEl: document.querySelector(`#faqs-body-${faq.id}`)!,
          active: index === 0,
        };
      });

      const accordion: AccordionInterface = new Accordion(accordionEl, accordionItems);
    });

    return (
      <div id="faqs" data-accordion="collapse">
        <For each={faqs}>{(faq, i) =>
          <>
            <h2 id={`faqs-heading-${faq.id}`}>
              <button type="button" class={`flex items-center justify-between w-full p-5 font-medium border border-gray-300 focus:ring-4 focus:ring-gray-300 hover:bg-gray-100 gap-3 ${i() == 0 ? "rounded-t-xl" : ""}`} data-accordion-target={`#faqs-body-${faq.id}`} aria-expanded="false" aria-controls={`faqs-body-${faq.id}`}>
                <span class="text-left">{faq.question}</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>
            <div id={`faqs-body-${faq.id}`} class="hidden" aria-labelledby={`faqs-heading-${faq.id}`}>
              <div class={`p-5 border border-gray-300 ${i() == faqs.length - 1 ? "rounded-b-xl" : "border-b-0"}`}>
                {faq.answer}
              </div>
            </div>
          </>
        }</For>
      </div>
    );
  };
  
