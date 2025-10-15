import { Component } from '@angular/core';
import { ILevel } from '../../../core/models/ILevel';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-level-page',
  standalone:true,
  imports: [NgFor,NgIf],
  templateUrl: './level-page.html',
  styleUrl: './level-page.css'
})
export class LevelPage {
  levels: ILevel[] = []
}
