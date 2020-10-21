import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceConstructorComponent } from './sentence-constructor.component';

describe('SentenceConstructorComponent', () => {
  let component: SentenceConstructorComponent;
  let fixture: ComponentFixture<SentenceConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenceConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
