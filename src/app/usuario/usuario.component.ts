import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = [
    {usuario: 'crangarita', nombre: 'Carlos Angarita', email: 'crangarita@gmail.com', clave: '1234'},
    {usuario: 'cygomez', nombre: 'Claudia Gomez', email: 'claudiayamilegomez@gmail.com', clave: '1234'},
    {usuario: 'yancarlo', nombre: 'Yan Angarita', email: 'yancarlo1206@gmail.com', clave: '1234'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
