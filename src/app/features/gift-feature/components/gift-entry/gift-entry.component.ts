import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GiftCreate } from '../../models';



@Component({
  selector: 'app-gift-entry',
  templateUrl: './gift-entry.component.html',
  styleUrls: ['./gift-entry.component.scss']
})
export class GiftEntryComponent implements OnInit {

  hasErrors = false;
  form!: FormGroup;
  @Output() itemAdded = new EventEmitter<GiftCreate>();
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      for: new FormControl('', [Validators.required]),
      holiday: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      suggestions: new FormControl('', [Validators.required])
    });
  }

  get for(): AbstractControl { return this.form.get('for') as AbstractControl; }
  get holiday(): AbstractControl { return this.form.get('holiday') as AbstractControl; }
  get suggestions(): AbstractControl { return this.form.get('suggestions') as AbstractControl; }

  add(elementToReceiveTheFoci: HTMLElement): void {
    if (this.form.invalid) {
      this.hasErrors = true;
    } else {
      this.hasErrors = false;
      // tell our parent (container) something happened.
      this.itemAdded.emit({
        for: this.for.value,
        holiday: this.holiday.value,
        suggestions: this.suggestions.value
      });

      this.form.reset();
      elementToReceiveTheFoci.focus();
    }
  }

}
