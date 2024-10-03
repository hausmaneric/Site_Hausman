import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Utils } from '../../utils';
import { MenuComponent } from "../../components/menu/menu.component";
import { SlideComponent } from "../../components/slide/slide.component";
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { TabComponent } from "../../components/tab/tab.component";
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from "../../components/footer/footer.component";
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, SlideComponent, ButtonModule, CommonModule, FormsModule, TabComponent, ToastModule, FooterComponent],
  providers: [MessageService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  items!: MenuItem[];
  selectedItemIndex: number | null = null;

  @ViewChild('x') x!: ElementRef;

  constructor(public utils: Utils, public utils2: Utils, private renderer: Renderer2, private messageService: MessageService){}

  ngOninit(){
    const body = this.renderer.selectRootElement('body');
    this.renderer.listen(body, 'click', () => {
      if(this.submenuDesktop == true){
        this.submenuDesktop = false;
      }
    })
    this.items = [
      { label: 'Sobre o NEXT'},
    ];
  }

  selectItem(index: number) {
    this.selectedItemIndex = index;
  }

  submenuDesktop = false;

  menuOpen = false;
  subMenuOpen: string | null = null;
  subSubMenuOpen: string | null = null;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if(this.menuOpen == true){
      this.subMenuOpen = null;
      this.subSubMenuOpen = null;
    }
  }

  navigateTo(route: string) {
    this.menuOpen = false;
    this.subMenuOpen = null;
    this.subSubMenuOpen = null;
  }

  toggleSubmenu(menu: string) {
    this.subMenuOpen = this.subMenuOpen === menu ? null : menu;
    this.subSubMenuOpen = null;
  }

  toggleSubsubmenu(submenu: string) {
    this.subSubMenuOpen = this.subSubMenuOpen === submenu ? null : submenu;
  }

  menuDesktop(){
    this.submenuDesktop = !this.submenuDesktop;
  }

  message(){
    this.messageService.add({ severity: 'info', summary: 'Site em produção', life: 2000 });
  }
}
