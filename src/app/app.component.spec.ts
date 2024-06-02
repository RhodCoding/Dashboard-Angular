import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import test from 'node:test';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'dashboard-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dashboard-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, dashboard-app');
  });
});

/*Profile Test subject to change*/
function previewProfileImage(event: Event): void {
  const profilePic = document.getElementById('profilePic') as HTMLImageElement; 
  profilePic.src = URL.createObjectURL((event.target as HTMLInputElement).files![0]);
}

function previewCertificateImage(event: Event): void {
  // Code to handle certificate image preview
}

function prevMonth(): void {
  // Code for previous month action
}

function nextMonth(): void {
  // Code for next month action
}

