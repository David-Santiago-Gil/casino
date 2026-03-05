import { Component, inject, output } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  protected readonly scrollService = inject(ScrollService);

  openLogin = output<void>();
  openRegister = output<void>();

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
