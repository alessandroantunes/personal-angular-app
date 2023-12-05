import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SafeUrlPipe } from "../pipes/safe-url.pipe";
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-angular-video-course',
  standalone: true,
  templateUrl: './angular-video-course.component.html',
  styleUrl: './angular-video-course.component.scss',
  imports: [MatButtonModule, MatIconModule, SafeUrlPipe, MatCardModule, NgIf, MatDividerModule, MatSelectModule, NgFor]
})

export class AngularVideoCourseComponent {


  displayFrame = true

  aulas: Array<any> = [
    { name: 'Introdução - #01 - 2022', link: 'https://www.youtube.com/embed/vJt_K1bFUeA?si=MXSnZm-1-3CDQhgo' },
    { name: 'Instalando o Angular - primeiro projeto', link: 'https://www.youtube.com/embed/1pad3p8VOu4?si=DGDzIqIFkhgPKJI5' },
    { name: 'Estrutura do Angular - #03', link: 'https://www.youtube.com/embed/77zgi3kST90?si=k3euQIw_9wBYdZGf' },
    { name: 'Criando componentes - #04', link: 'https://www.youtube.com/embed/qyS4XK_nACo?si=CGBDhwH42DhfDN6z' },
    { name: 'Dados no template - #05', link: 'https://www.youtube.com/embed/ZxnuGvoXd5Y?si=YRqx0qjo4BYKcVIh' },
  ]

  actualClass: number = 0

  classSelected: string = this.aulas[this.actualClass].link

  defineClass() {

    this.displayFrame = false
    this.classSelected = this.aulas[this.actualClass].link
    this.displayFrame = true

  }

  changeVideo(value: number) {
    console.log(value)
    this.actualClass = value
    this.defineClass()
    console.log(this.actualClass)
  }
}
