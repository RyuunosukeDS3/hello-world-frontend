import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css'],
})
export class WorkshopComponent implements OnInit {
  markdownContent = '';
  theme = 'dark';

  private readonly apiUrl = environment.apiUrl;

  constructor(
    private readonly http: HttpClient,
    public readonly renderer: Renderer2
  ) {}

  ngOnInit() {
    this.http
      .get<{ theme: 'light' | 'dark' }>(`${this.apiUrl}/theme`)
      .subscribe({
        next: (res) => {
          this.theme = res.theme || environment.defaultTheme;
          this.applyTheme();
        },
        error: () => {
          this.applyTheme();
        },
      });

    this.http
      .get(`${this.apiUrl}/workshop/devsecops`, { responseType: 'text' })
      .subscribe({
        next: (data) => {
          this.markdownContent = data;
        },
        error: (err) => {
          console.error('Failed to load markdown', err);
        },
      });
  }

  private applyTheme() {
    this.renderer.removeClass(
      document.body,
      this.theme === 'light' ? 'dark' : 'light'
    );
    this.renderer.addClass(document.body, this.theme);
  }

  toggleTheme(event: Event): void {
    const isDark = (event.target as HTMLInputElement).checked;
    this.theme = isDark ? 'dark' : 'light';
    this.applyTheme();
  }
}
