import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
import { TuiConnected, TuiStepper } from '@taiga-ui/kit';
@Component({
  selector: 'app-home',
  imports: [TuiIcon, NgFor, TuiConnected, TuiStepper],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
}
