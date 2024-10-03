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
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, SlideComponent, ButtonModule, CommonModule, FormsModule, TabComponent, ToastModule, FooterComponent],
  providers: [MessageService],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css',
})
export class PrivacyComponent {

}
