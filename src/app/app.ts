import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./layout/additions/navbar/navbar";
import { Footer } from "./layout/additions/footer/footer";
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, NgxSpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TrueTechFront');
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private spinner: NgxSpinnerService
  ) {}
}
