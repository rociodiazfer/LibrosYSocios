import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-socios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './socios.component.html',
  styleUrl: './socios.component.css'
})
export class SociosComponent {
  numero:string=""
  arrayNumeros: number[]=[]

  agregarNumeros(){
    this.arrayNumeros.push(Number(this.numero))
  }
}
