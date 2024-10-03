import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Utils } from '../../utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @ViewChild('x') x!: ElementRef;

  _pro: boolean = false;
  _seg: boolean = false;
  _tre: boolean = false;
  _sup: boolean = false;
  menu: boolean = false;

  constructor(public utils: Utils, public utils2: Utils, private renderer: Renderer2, private router: Router){}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    }
  }

  ngOninit(){

  }

  openclosemenu(){
    this.menu = !this.menu;
  }

  visiblePro(){
    this._pro = !this._pro;
    this._seg = false;
    this._tre = false;
    this._sup = false;
  }

  visibleSeg(){
    this._pro = false;
    this._seg = !this._seg;
    this._tre = false;
    this._sup = false;
  }

  visibleTre(){
    this._pro = false;
    this._seg = false;
    this._tre = !this._tre;
    this._sup = false;
  }

  visibleSup(){
    this._pro = false;
    this._seg = false;
    this._tre = false;
    this._sup = !this._sup;
  }

  setHome(){
    this.router.navigate(['']);
  }

}
