import { Component, signal, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer";
import { HeaderComponent } from "./components/header/header";
import { ScrollService } from './services/scroll';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  protected readonly title = signal('neon-royale-casino');
  protected readonly scrollService = inject(ScrollService);

  showLogin = signal(false);
  showRegister = signal(false);

  // Salas de juego con scroll horizontal
  gameRooms = [
    {
      title: 'SALA PREMIUM',
      description: 'Experiencia VIP exclusiva',
      badge: 'ELITE',
      bgColor: 'linear-gradient(135deg, #1a1a2e 0%, #d4af37 100%)'
    },
    {
      title: 'RULETA DORADA',
      description: 'Juego clásico de mesa',
      badge: 'POPULAR',
      bgColor: 'linear-gradient(135deg, #0f3460 0%, #e94560 100%)'
    },
    {
      title: 'POKER ELITE',
      description: 'Torneos de alto nivel',
      badge: 'NUEVO',
      bgColor: 'linear-gradient(135deg, #16213e 0%, #00d4ff 100%)'
    },
    {
      title: 'SLOTS NEON',
      description: 'Máquinas modernas',
      badge: 'HOT',
      bgColor: 'linear-gradient(135deg, #2d1b3d 0%, #ff006e 100%)'
    },
    {
      title: 'BLACKJACK VIP',
      description: 'Mesa privada 24/7',
      badge: 'EXCLUSIVO',
      bgColor: 'linear-gradient(135deg, #1a1a3e 0%, #ffd60a 100%)'
    },
    {
      title: 'BACCARAT ROYAL',
      description: 'Juego de elegancia',
      badge: 'PREMIUM',
      bgColor: 'linear-gradient(135deg, #0a2540 0%, #d4af37 100%)'
    }
  ];

  // Juegos destacados
  gameCards = [
    {
      title: 'Neon Slots',
      category: 'Slots',
      badge: 'NUEVO',
      rating: 5,
      bgColor: 'linear-gradient(135deg, #1a1a2e 0%, #d4af37 100%)'
    },
    {
      title: 'Gold Roulette',
      category: 'Mesa',
      badge: 'HOT',
      rating: 5,
      bgColor: 'linear-gradient(135deg, #0f3460 0%, #e94560 100%)'
    },
    {
      title: 'Blackjack VIP',
      category: 'Cartas',
      badge: '',
      rating: 5,
      bgColor: 'linear-gradient(135deg, #16213e 0%, #00d4ff 100%)'
    },
    {
      title: 'Poker Master',
      category: 'Cartas',
      badge: 'HOT',
      rating: 5,
      bgColor: 'linear-gradient(135deg, #2d1b3d 0%, #ff006e 100%)'
    },
    {
      title: 'Crash Royale',
      category: 'Crash',
      badge: 'NUEVO',
      rating: 4,
      bgColor: 'linear-gradient(135deg, #1a1a3e 0%, #ffd60a 100%)'
    },
    {
      title: 'Mega Wheel',
      category: 'En Vivo',
      badge: '',
      rating: 5,
      bgColor: 'linear-gradient(135deg, #0a2540 0%, #d4af37 100%)'
    },
    {
      title: 'Golden Keno',
      category: 'Lotería',
      badge: '',
      rating: 4,
      bgColor: 'linear-gradient(135deg, #1a1a2e 0%, #00d4ff 100%)'
    },
    {
      title: 'Baccarat Gold',
      category: 'Mesa',
      badge: 'NUEVO',
      rating: 5,
      bgColor: 'linear-gradient(135deg, #0f3460 0%, #ff006e 100%)'
    }
  ];

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }

  enviarContacto() {
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
    console.log('Formulario de contacto enviado');
  }

  ngAfterViewInit() {
    this.initRevealOnScroll();
  }

  private initRevealOnScroll() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach(target => observer.observe(target));
  }
}
