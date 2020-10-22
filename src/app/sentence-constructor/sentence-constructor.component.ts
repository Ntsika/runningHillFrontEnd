import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {SentenceModule} from '../Models/sentence/sentence.module';
import {WordModule} from '../Models/word/word.module';
import {WebService} from '../Controller/web.service';

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

  constructor(private webService: WebService) {

  }

  ngOnInit(): void {
    //  populate typelist and sentence history
    this.updateSentenceHistory();
    this.getAllTypes();
  }

  addWordToSentence(word: WordModule): void {
    if (word.type === 'Punctuation'){
      this.sentenceText += word.text;
    }else{
      this.sentenceText += ' ' + word.text;
    }

  }

  addSentence(): void {
    this.webService.post('addSentence', this.sentenceText).subscribe((res: any) => {
      console.log(res);
      this.sentenceText = '';
      this.updateSentenceHistory();
    });
  }

  getAllTypes(): void {
    this.webService.get('allTypes').subscribe((result: string) => {
      this.wordTypes = [...result];
    });
  }

  selectType(type: string): void {
    this.webService.get('words/' + type).subscribe((result: WordModule[]) => {
      this.availableWords = result;
    });
  }

  updateSentenceHistory(): void {
    this.webService.get('sentenceHistory').subscribe((result: SentenceModule[]) => {
      this.sentenceHistory = result;
    });
  }


}
