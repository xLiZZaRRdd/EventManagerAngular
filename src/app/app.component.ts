import { Component, OnInit } from '@angular/core';
import { SwaggerApiService } from './shared/services/swagger-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ProjetTopCool';

  constructor(private _swaggerService : SwaggerApiService) {
    
  }

  ngOnInit(): void {
    this._swaggerService.getById()
  }


}
