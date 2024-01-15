import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { dataFake, gameData } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  gameData: gameData[] = [];

  ngOnInit(): void {
    this.getGameData();
  }

  getGameData() {
    this.gameData = dataFake;
  }
}
