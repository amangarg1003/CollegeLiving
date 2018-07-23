import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'app';

    public constructor(
        private api: ApiService
    ) {}

    public ngOnInit(): void {
        this.api.listings().subscribe(console.log);
    }
}
