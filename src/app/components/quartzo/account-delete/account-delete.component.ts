import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Utils } from '../../../utils';
import { MenuComponent } from "../../../components/menu/menu.component";
import { SlideComponent } from "../../../components/slide/slide.component";
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { TabComponent } from "../../../components/tab/tab.component";
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-account-delete',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, SlideComponent, ButtonModule, CommonModule, FormsModule, TabComponent, ToastModule, FooterComponent],
  providers: [MessageService],
  templateUrl: './account-delete.component.html',
  styleUrl: './account-delete.component.css'
})
export class AccountDeleteComponent {

}
