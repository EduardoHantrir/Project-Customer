import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { authGuard } from '../../Services/guards/auth-guard';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

}
