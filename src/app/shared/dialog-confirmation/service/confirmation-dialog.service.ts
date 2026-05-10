import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ConfirmationDialogComponent } from '../component/confirmation-dialog.component';
import { DialogData } from '../interface/dialog-data';

@Injectable({
    providedIn: 'root'
})
export class ConfirmationDialogService {

    constructor(private dialog: MatDialog) { }

    open(dialogData: DialogData): Observable<boolean> {
        return this.dialog.open(ConfirmationDialogComponent, { data: dialogData })
            .afterClosed()
            .pipe(filter((result): result is boolean => result !== undefined));
    }
}