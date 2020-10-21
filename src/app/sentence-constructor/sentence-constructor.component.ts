import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {SentenceModule} from '../Models/sentence/sentence.module';
import {WordModule} from '../Models/word/word.module';

@Component({
  selector: 'app-sentence-constructor',
  templateUrl: './sentence-constructor.component.html',
  styleUrls: ['./sentence-constructor.component.css']
})
export class SentenceConstructorComponent implements OnInit {

  constructor() {
  //  populate typelist and sentence history
  }

  ngOnInit(): void {
  }

}
