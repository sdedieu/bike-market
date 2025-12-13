import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer, FooterStart } from '../../ui/footer/footer';

@Component({
  selector: 'bmsh-footer',
  template: `
    <footer bm-footer>
      <div bm-footer-start class="col-auto order-2 lg:order-1 col-span-8 h-full flex items-center">
        <div class="flex lg:items-center flex-col-reverse lg:flex-row gap-y-10 gap-x-[0.938rem]">
          <p class="text-colGrey">
            © Bike Market {{ currentYear }} <br />
            Tous droits réservés
          </p>
          <ul class="flex flex-col lg:flex-row gap-y-5 gap-x-[0.938rem]">
            <li>
              <a
                class="flex flex-row justify-center items-center box-border text-p select-none group/cta text-primary lg:hover:text-colLightGrey cursor-pointer w-fit text-p !justify-start"
                draggable="false"
                title="Conditions générales"
                href=""
                target="_self"
                >Conditions générales</a
              >
            </li>
            <li>
              <a
                class="flex flex-row justify-center items-center box-border text-p select-none group/cta text-primary lg:hover:text-colLightGrey cursor-pointer w-fit text-p !justify-start"
                draggable="false"
                title="Politique de confidentialité"
                href=""
                target="_self"
                >Politique de confidentialité</a
              >
            </li>
            <li>
              <a
                class="flex flex-row justify-center items-center box-border text-p select-none group/cta text-primary lg:hover:text-colLightGrey cursor-pointer w-fit text-p !justify-start"
                draggable="false"
                title="Politique en matière de cookies"
                href=""
                target="_self"
                >Politique en matière de cookies</a
              >
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer" class="text-p !justify-start"
                >Whistleblowing</a
              >
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer" class="text-p !justify-start"
                >Privacy Whistleblowing</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        bm-footer-end
        class="col-auto order-1 lg:order-2 col-span-6 lg:col-span-3 lg:flex h-full items-center"
      >
        <section class="flex my-10 lg:my-0">
          <div class="relative">
            <button class="flex items-center justify-center w-full gap-x-[0.625rem] cursor-pointer">
              <span class="inline-block bg-primary overflow-hidden rounded-full w-4 h-4"
                ><img
                  alt="France"
                  title="France"
                  class="!h-4 !w-auto !block object-cover object-center"
                  src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg"
                  style="display:inline-block;width:1em;height:1em;vertical-align:middle;font-size:1em;line-height:1em"
              /></span>
              <p>English</p>
              <p>|</p>
              <p>English</p>
            </button>
          </div>
        </section>
      </div>
    </footer>
  `,
  imports: [Footer, FooterStart],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellFooter {
  currentYear = new Date().getFullYear();
}
