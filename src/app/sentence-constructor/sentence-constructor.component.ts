import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {SentenceModule} from '../Models/sentence/sentence.module';
import {WordModule} from '../Models/word/word.module';
import {observable} from 'rxjs';

@Component({
  selector: 'app-sentence-constructor',
  templateUrl: './sentence-constructor.component.html',
  styleUrls: ['./sentence-constructor.component.css']
})
export class SentenceConstructorComponent implements OnInit {

  sentenceHistory: SentenceModule [] = [];
  availableWords: WordModule[] = [];
  wordTypes: string[] = [];
  sentenceText: string = '';
  selectedType: string = '';

  constructor() {
  //  populate typelist and sentence history
  }

  ngOnInit(): void {

  }

  addWordToSentence(){

  }

  addSentence(){

  }

  getAllTypes(){

  }

  selectType(type: string){

  }

  populateWords(type: string){

  }

  updateSentenceHistory(){

  }


}
