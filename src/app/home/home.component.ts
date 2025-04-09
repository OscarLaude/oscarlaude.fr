import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
import { TuiConnected, TuiStepper, TuiPdfViewerDirective } from '@taiga-ui/kit';
import { DomSanitizer } from '@angular/platform-browser';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk';
import { TuiButton } from '@taiga-ui/core';
@Component({
  selector: 'app-home',
  imports: [TuiIcon, NgFor, TuiConnected, TuiStepper, TuiButton, TuiPdfViewerDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private readonly isMobile = inject(TUI_IS_MOBILE);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly pdf = 'assets/fr_cv_oscarlaude.pdf';

  protected open = false;

  protected readonly experiences = [
    {
      role: 'Développeur Web Fullstack',
      company: 'Magellium - avr.2025 - maintenant',
    },
    {
      role: 'Développeur Web Fullstack Alternant',
      company: 'Coyote - sept.2020 - sept.2024',
    },
  ];

  /**
   * @description:
   * Embedded PDFs in mobile doesn't work,
   * so you can use third-party services
   * or your own service to render PDF in mobile iframe
   */
  protected readonly src = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.isMobile
      ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
      : this.pdf,
  );

}
