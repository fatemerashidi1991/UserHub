import { Component, Inject } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconButton,
    MatIconModule,
    UserDialogComponent,
    MatDialogModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.css'
})
export class ErrorDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
