import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Form, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  form: FormGroup = new FormGroup({
    id: new FormControl((this.data?.id ?? null)),
    title: new FormControl((this.data?.title ?? '')),
    price: new FormControl((this.data?.price ?? '')),
    year: new FormControl((this.data?.year ?? '')),
    chip: new FormControl((this.data?.configure.chip ?? '')),
    ssd: new FormControl((this.data?.configure.ssd ?? '')),
    memory: new FormControl((this.data?.configure.memory ?? '')),
    display: new FormControl((this.data?.configure.display ?? ''))
  })

  isNew: boolean = true;

  ngOnInit(): void {
    if (this.data) this.isNew = false
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  submit() {
    this.data = {
      id: this.form.value.id,
      title: this.form.value.title,
      price: this.form.value.price,
      year: this.form.value.year,
      image: "../../../assets/icons/mac.jpg",
      configure: {
        chip: this.form.value.chip,
        ssd: this.form.value.ssd,
        memory: this.form.value.memory,
        display: this.form.value.display
      }
    }
    this.dialogRef.close(this.data)
  }
}
