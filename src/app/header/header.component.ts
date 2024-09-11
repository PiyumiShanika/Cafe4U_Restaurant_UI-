import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Get all navigation links
    const navLinks = this.el.nativeElement.querySelectorAll('.navbar-nav a');

    navLinks.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', () => {
        // Get the navbar collapse element
        const navbarCollapse = this.el.nativeElement.querySelector('.navbar-collapse');

        if (navbarCollapse.classList.contains('show')) {
          // Manually trigger collapse
          const collapseInstance = new bootstrap.Collapse(navbarCollapse);
          collapseInstance.toggle(); // This will close the navbar
        }
      });
    });
  }
}
