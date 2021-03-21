import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ladder } from '../../assets/ladder';
import { SolvedFinderService } from '../solved-finder.service';
@Component({
  selector: 'app-ladders',
  templateUrl: './ladders.component.html',
  styleUrls: ['./ladders.component.css']
})
export class LaddersComponent implements OnInit {
  ladder = ladder;
  constructor(private router: ActivatedRoute, private solvedFinderService: SolvedFinderService) { }
  number = 11;
  displayedColumns = ["id", 'name', 'difficulty']
  selectedLadder = [];
  dataSource = [];

  solvedQuestions = []
  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.number = params['number'];
    })
    this.selectedLadder = ladder[this.number - 11];
    this.dataSource = this.selectedLadder;
    this.findSolved()
  }


  findSolved() {
    this.solvedFinderService.getConfig()
      .subscribe((data) => {
        for (var entry of data['result']) {
          if (entry.verdict == "OK") {
            var prob = [entry.problem.contestId, entry.problem.index]
            this.solvedQuestions.push("http://codeforces.com/problemset/problem/" + prob[0] + "/" + prob[1]);
          }
        }
        this.addToList();

      });
  }

  addToList() {
    for (let i = 0; i < this.selectedLadder.length; i++) {
      if ((this.solvedQuestions.indexOf(this.selectedLadder[i][1])) >= 0) {
        this.selectedLadder[i].push(1);
      } else {
        this.selectedLadder[i].push(0);
      }
    }
  }
}
