import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
import { TuiConnected, TuiStepper, TuiPdfViewerDirective, TuiPulse } from '@taiga-ui/kit';
import { DomSanitizer } from '@angular/platform-browser';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk';
import { TuiButton } from '@taiga-ui/core';
@Component({
  selector: 'app-home',
  imports: [TuiIcon, NgFor, TuiConnected, TuiStepper, TuiButton, TuiPdfViewerDirective, TuiPulse],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private readonly isMobile = inject(TUI_IS_MOBILE);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly pdf = 'assets/fr_cv_oscarlaude.pdf';

  protected open = false;
  protected playing = true;

  protected readonly certifications = [
    {
      title: 'Programmation C# Microsoft',
      subtitle: 'Cours udemy Jonathan Roux',
      date: '01/04/2025',
      status: 0
    },
    {
      title: 'Google Analytics',
      subtitle: 'Google Analytics Individual',
      date: '10/11/2019',
      status: 1
    }
  ];

  protected readonly projects = [
    {
      title: 'Portfolio',
      subtitle: 'Site web personnel oscarlaude.fr',
      github: 'https://github.com/OscarLaude/oscarlaude.fr',
      link: 'https://oscarlaude.fr'
    }
  ];

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

  protected readonly skills = [
    "Angular", "RxJS", "Angular Material", "Typescript", "Javascript", "HTML5", "CSS3/SCSS/SASS",
    "jQuery", "NgRx", "Webpack", "Jasmine", "Accessibilité Web (WCAG)", "React", "NextJS", "Node.js",
    "Express", "PHP", "C#", "Slim Framework", "Symfony", "Twig", "SQL (MySQL, PostgreSQL, MariaDB)",
    "NoSQL (Firebase, MongoDB)", "Git", "Jira", "CI/CD", "Docker"
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
