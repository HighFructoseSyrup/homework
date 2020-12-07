import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MediaCreate } from '../../models';

@Component({
  selector: 'app-media-entry',
  templateUrl: './media-entry.component.html',
  styleUrls: ['./media-entry.component.scss']
})
export class MediaEntryComponent implements OnInit {

  hasErrors = false;
  form!: FormGroup;
  @Output() itemAdded = new EventEmitter<MediaCreate>();
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      format: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      isLoanedOut: new FormControl('No', [Validators.required])
    });
  }

  get title(): AbstractControl { return this.form.get('title') as AbstractControl; }
  get format(): AbstractControl { return this.form.get('format') as AbstractControl; }
  get isLoanedOut(): AbstractControl { return this.form.get('isLoanedOut') as AbstractControl; }

  add(elementToReceiveTheFoci: HTMLElement): void {
    if (this.form.invalid) {
      this.hasErrors = true;
    } else {
      this.hasErrors = false;
      // tell our parent (container) something happened.

      this.itemAdded.emit({
        title: this.title.value,
        format: this.format.value,
        isLoanedOut: this.isLoanedOut.value
      });

      this.form.reset({title: '', format: '', isLoanedOut: 'No'});
      elementToReceiveTheFoci.focus();
    }
  }

}
