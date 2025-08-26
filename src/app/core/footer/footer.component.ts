import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">© {{currentYear}} Austin Chitmon. All rights reserved.</p>
        <div class="footer-links">
          <a href="https://github.com/austinchitmon"
             target="_blank"
             rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/austinchitmon/"
             target="_blank"
             rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:austinchitmon@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
