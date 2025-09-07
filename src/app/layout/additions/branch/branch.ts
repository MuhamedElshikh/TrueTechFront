import { Component, OnInit } from '@angular/core';
import { Branchservice } from '../../../shared/servises/branch/branchservice';
import { branch } from '../../../shared/interfaces/BranchInterface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.html',
  styleUrls: ['./branch.css'],
  imports: [RouterLink],
})
export class Branch implements OnInit {
  branch!: branch[];
  constructor(private _branchService: Branchservice) {}
  ngOnInit(): void {
    this.GetAllBranches();
  }
  GetAllBranches() {
    this._branchService.getAllBranches().subscribe({
      next: (res) => {
        console.log(res);
        console.log('TOKEN =', localStorage.getItem('usertoken'));
        this.branch = res;
      },
      error: (err) => {
        console.error('Error fetching branches:', err);
        this.branch = [];
      },
    });
  }
}
