import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  message = '';

  constructor(
    private readonly helloService: HelloService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.helloService.getMessage().subscribe({
      next: (res) => (this.message = res.message),
      error: () => (this.message = 'Failed to load message'),
    });
  }

  goToWorkshop() {
    this.router.navigate(['/workshop']);
  }
}
