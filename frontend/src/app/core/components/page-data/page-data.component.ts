import { Component, OnInit } from '@angular/core';
import { Dog } from '../../model/dog';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-page-data',
  templateUrl: './page-data.component.html',
  styleUrls: ['./page-data.component.css']
})
export class PageDataComponent implements OnInit {
  dataSource: Dog[] = [];
  displayedColumns: string[] = ['id', 'nome', 'raca', 'porte', 'idade'];
  ngOnInit(): void {
    this.getPets();
  }
  constructor(private dogService: ServiceService) {}

  getPets() {
    
    this.dogService.getDogs().subscribe(response=>{
      console.log(response)
      this.dataSource=response
    })  

}

}
