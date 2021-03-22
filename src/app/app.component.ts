import { Component, Inject } from '@angular/core';
import { SolvedFinderService } from './solved-finder.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kmoj';
  constructor(public solverFinder: SolvedFinderService, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(usernameDialog, {
      width: '250px',
      data: this.solverFinder.handle
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.solverFinder.handle = result;
        window.location.reload()
      }
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview.html',
})
export class usernameDialog {

  constructor(
    public dialogRef: MatDialogRef<usernameDialog>,
    @Inject(MAT_DIALOG_DATA) public data) { }
  handle = this.data;
  onNoClick(): void {
    this.dialogRef.close();
  }

}
