import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {SentenceModule} from '../Models/sentence/sentence.module';
import {WordModule} from '../Models/word/word.module';
import {WebService} from '../Controller/web.service';
import {WordTypesModule} from '../Models/word-types/word-types.module';

@Component({
  selector: 'app-sentence-constructor',
  templateUrl: './sentence-constructor.component.html',
  styleUrls: ['./sentence-constructor.component.css']
})
export class SentenceConstructorComponent implements OnInit {

  sentenceHistory: SentenceModule [] = null;
  availableWords: WordModule[]  = null;
  wordTypes: WordTypesModule[] = null;
  sentenceText: string = '';

  constructor(private webService: WebService) {

  }

  ngOnInit(): void {
    //  populate typelist and sentence history
    this.getAllTypes();
  }

  addWordToSentence(word: string): void {
    this.sentenceText += ' ' + word;
  }

  addSentence(): void {
    console.log("add sentence");
    this.webService.post('addSentence', this.sentenceText).subscribe((res: any) => {
      console.log(res);
      this.sentenceText = '';
      this.updateSentenceHistory();
    });
  }

  getAllTypes(): void {
    console.log("get all types");
    this.webService.get('wordTypes').subscribe((result: WordTypesModule[]) => {
      console.log(result);
      this.wordTypes = result;
    });
  }

  selectType(type: string): void {
    console.log("select type");
    this.webService.getWords('words', type).subscribe((result: WordModule[]) => {
      console.log(result);
      this.availableWords = result;
      console.log(this.availableWords);
    });
  }

  updateSentenceHistory(): void {
    console.log("update sentence history");
    this.webService.get('sentenceHistory').subscribe((result: SentenceModule[]) => {
      console.log(result);
      this.sentenceHistory = result;
    });
  }


}
