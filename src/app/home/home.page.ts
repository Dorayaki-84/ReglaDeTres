import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public name: string;
  public valueA: number;
  public valueB: number;
  public valueC: number;
  public result: number;
  public isValid = false;
  public historial: string[] = [];
  public historialList = [];
  public historyObj: any = {
    result: null,
    name: null,
    valueA: null,
    valueB: null,
    valueC: null,
  };



  constructor() {
    const data = JSON.parse(localStorage.getItem('historialList'));
    console.log(data);
    if (data) {
      data.forEach(element => {
        this.historialList.push(element);
      });
    }
  }

  ngOnInit(): void {

  }

  clean() {
    this.valueA = null;
    this.valueB = null;
    this.valueC = null;
  }

  calculate() {
    const operation = this.valueB * this.valueC / this.valueA;
    this.result = Math.round(operation * 1e2) / 1e2;
    this.historyObj = [];
    this.historyObj.result = this.result;
    this.historyObj.name = this.name;
    this.historyObj.valueA = this.valueA;
    this.historyObj.valueB = this.valueB;
    this.historyObj.valueC = this.valueC;

    this.historial.push(this.historyObj);
    this.historialList.push({name: this.historyObj.name, result: this.historyObj.result,
      valueA: this.valueA, valueB: this.valueB, valueC: this.valueC });
    localStorage.setItem('historialList', JSON.stringify(this.historialList));
  }

  checkValid() {
    if (this.valueA && this.valueB && this.valueC) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  borrar(){
    localStorage.removeItem('historialList');
    this.historialList = [];

  }

  detail(event){
    console.log(event);
    this.name = event.name;
    this.result = event.result;
    this.valueA = event.valueA;
    this.valueB = event.valueB;
    this.valueC = event.valueC;
  }

}
