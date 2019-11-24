import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

	auto= {
		marca: 'Kia',
		modelo: 'Forte',
		anio: 2019
	}

	fecha = (new Date()).getMonth();

  constructor() { }

  ngOnInit() {
  }

}
