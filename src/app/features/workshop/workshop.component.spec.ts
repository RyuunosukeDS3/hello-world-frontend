import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkshopComponent } from './workshop.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Renderer2 } from '@angular/core';
import { environment } from '../../../environments/environment';

interface WorkshopComponentWithRenderer extends WorkshopComponent {
  renderer: Renderer2;
}

describe('WorkshopComponent', () => {
  let component: WorkshopComponent;
  let fixture: ComponentFixture<WorkshopComponent>;
  let httpMock: HttpTestingController;
  let renderer: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkshopComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkshopComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    renderer = fixture.componentRef.injector.get(Renderer2);

    // Spy on renderer methods
    spyOn(renderer, 'addClass').and.callThrough();
    spyOn(renderer, 'removeClass').and.callThrough();

    // Optionally override the renderer on the component if you want
    (component as WorkshopComponentWithRenderer).renderer = renderer;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set theme from API and apply it', () => {
    fixture.detectChanges();

    const themeReq = httpMock.expectOne(`${environment.apiUrl}/theme`);
    expect(themeReq.request.method).toBe('GET');
    themeReq.flush({ theme: 'light' });

    const markdownReq = httpMock.expectOne(
      `${environment.apiUrl}/workshop/devsecops`
    );
    markdownReq.flush('# Markdown Content');

    expect(component.theme).toBe('light');
    expect(renderer.removeClass).toHaveBeenCalledWith(document.body, 'dark');
    expect(renderer.addClass).toHaveBeenCalledWith(document.body, 'light');
  });

  it('should load markdown content', () => {
    fixture.detectChanges();

    const themeReq = httpMock.expectOne(`${environment.apiUrl}/theme`);
    themeReq.flush({ theme: 'dark' });

    const markdownReq = httpMock.expectOne(
      `${environment.apiUrl}/workshop/devsecops`
    );
    const mockMarkdown = '# DevSecOps Workshop';
    markdownReq.flush(mockMarkdown);

    expect(component.markdownContent).toBe(mockMarkdown);
  });

  it('should apply theme on toggleTheme', () => {
    component.theme = 'light'; // initial theme

    const mockEvent = {
      target: { checked: true }, // toggled to dark
    } as unknown as Event;

    component.toggleTheme(mockEvent);

    expect(component.theme).toBe('dark');
    expect(renderer.removeClass).toHaveBeenCalledWith(document.body, 'light');
    expect(renderer.addClass).toHaveBeenCalledWith(document.body, 'dark');
  });
});
