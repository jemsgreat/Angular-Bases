import { Injectable } from '@angular/core';
import { stringify, v4 as uuid } from 'uuid';
// la anterior LC agrego al uuid para designar un id unico al usar v4 selecione esa version y al usar as le digo no lo llames como v4 sino como uuid
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character: Character ):void {
    console.log('MainPage')
    console.log(character)
    const newCharacter: Character = { id: uuid(), ...character};
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number):void {
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById (id:string) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
