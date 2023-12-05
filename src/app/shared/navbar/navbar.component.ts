import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatButtonModule, NgFor, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  menuItems = [
    { name: 'Curso Angular 13', link: '/angular-video-course' }

  ]

  openNewTab(url: string) {

    window.open(url, '_blank')?.focus();
  }

}
