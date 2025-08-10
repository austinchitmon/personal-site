import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { HomeStore } from './home.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, ButtonDirective],
  providers: [
    HomeStore
  ],
  template: `
    <div class="page-container">
      <div class="content-section">
        <div class="text-content">
          <h3 class="greeting">
            <span [style.color]="homeStore.textColor()">Hi There! 👋</span> I'm Austin Chitmon
          </h3>
          <h1 class="title">Welcome to my Personal Website</h1>
          <h2 class="subtitle">I am a Software Engineer with a focus on UI Development and Angular Expertise. This website serves as a catalog for any and all
            of my personal projects.</h2>
        </div>
        <div class="image-container">
          <img
            ngSrc="/img/headshot.png"
            alt="Austin Chitmon headshot"
            width="300"
            height="300"
            priority
            class="headshot"
          />
        </div>
      </div>

      <div class="section-break"></div>

      <div class="about-section">
        <h2 class="section-title">About Me</h2>
        <div class="divider"></div>

        <div class="about-content">
          <p>Where to begin? I suppose my computer-boy journey started as a teenager, when I build my own PC so I could run World of Warcraft above 30 FPS on
            the family PC.</p>

          <p>I deepened my admiration for technology by exploring the technical side of the film-making process through camerawork & editing in
            high school. Some people played football, some did theatre, but I... I was a <span [style.font-style]="'italic'">"Film Kid".</span> I wasn't afraid
            to
            take up an on-screen talent role when
            the opportunity presented itself as well, which helped hone my public speaking
            skills from an early age. I was always interested in the technical side of things of whatever hobby I was doing, making my degree choice in Computer
            Science at
            the University of Arkansas (<span [style.color]="'#B44'">Woo Pig! 🐗</span>) an easy decision.</p>

          <p>I learned how to code in the pursuit of my degree, never touching an IDE before entering university. I was emphatically hooked after seeing that
            "Hello World" printed to the screen for the first time. Spending hours digging deep on hard problems (fueled by the nectar of the Gods ☕) was
            extremely rewarding to me. </p>

          <p>While honing my coding and technical skills, as a sophomore, I began sharing this passion for tech and personal development by becoming an
            <span [style.color]="'#c78514'">Engineering Peer Mentor</span>
            and <span [style.color]="'#c78514'">Freshman Orientation
              Mentor</span> at the
            university. I also spent a semester as a <span [style.color]="'#c78514'">Fulbright IT Classroom Technician</span>, where I learned how to get
            down into the
            nitty-gritty of IT troubleshooting. Throughout all this less-technical work, I was still grinding away in the coding mines and began seeking out
            more computer-science focused opportunities.</p>

          <p>After honing my skills the first half of university, I was humbled to be selected for an
            <span [style.color]="'#c78514'">Application Development</span> internship with
            <span [style.color]="'#dbd82a'">J.B. Hunt</span> my
            sophomore year. Following my internship I was offered a full-time position. I quickly moved up the ranks at Hunt from a
            <span [style.color]="'#c78514'">Software Engineer I</span>, to a
            <span [style.color]="'#c78514'">Software Engineer II</span>, to my current position as a
            <span [style.color]="'#c78514'">Software Engineer III</span> and <span [style.color]="'#c78514'">Front-End Technical Lead</span>.</p>
        </div>
      </div>

      <div class="resume-section">
        <h3 class="resume-title">Want the details?</h3>
        <div class="divider"></div>
        <button pButton
                (click)="downloadResume()"
                class="resume-button">
          📄 Download My Resume
        </button>
      </div>
    </div>
  `,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected readonly homeStore = inject(HomeStore);

  downloadResume() {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Austin_Chitmon_Resume.pdf';
    link.click();
  }
}
