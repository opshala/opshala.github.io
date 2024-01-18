import { createScriptLoader } from "@solid-primitives/script-loader";

export default function NewsletterForm() {
    createScriptLoader({
        src: "https://f.convertkit.com/ckjs/ck.5.js"
    });
    return (
        <>
            <form
                action="https://app.convertkit.com/forms/5966463/subscriptions"
                class="seva-form formkit-form px-5"
                method="post"
                data-sv-form="5966463"
                data-uid="33d3d62ce6"
                data-format="inline"
                data-version="5"
                data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
                min-width="400 500 600 700 800"
            >
                <div data-style="clean">
                    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                    <div data-element="fields" data-stacked="true" class="seva-fields formkit-fields">
                        <div class="formkit-field text-center my-2 mx-auto">
                            <input class="formkit-input w-[95%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:border-secondary focus:ring-secondary/30" name="email_address" aria-label="Your Email Address*" placeholder="Your Email Address*" required={true} type="email" />
                        </div>
                        <div class="formkit-field text-center my-2 mx-auto">
                            <input class="formkit-input w-[95%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:border-secondary focus:ring-secondary/30" aria-label="Your Name*" name="fields[first_name]" required={true} placeholder="Your Name*" type="text" />
                        </div>
                        <div class="formkit-field text-center my-2 mx-auto">
                            <textarea class="formkit-input w-[95%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:border-secondary focus:ring-secondary/30" aria-label="What do you think about OpShala? (optional)" name="fields[comments]" placeholder="What do you think about OpShala? (optional)" />
                        </div>
                        <div class="text-center my-2 mx-auto">
                            <button data-element="submit" class="formkit-submit formkit-submit px-5 py-3 text-md font-medium text-center text-white bg-accent rounded-lg focus:ring-4 focus:outline-none focus:ring-accent/30">
                                <div class="formkit-spinner">
                                    <div></div><div></div><div></div>
                                </div>
                                <span class="">Subscribe</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
  );
}