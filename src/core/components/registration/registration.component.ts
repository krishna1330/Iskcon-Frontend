import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RegistrationService } from '../../services/registration.service';
import { IPersonalDetails } from '../../interfaces/personalDetails';
import { IFamilyDetails } from '../../interfaces/familyDetails';
import { IAddressDetails } from '../../interfaces/addressDetails';
import { IRegistration } from '../../interfaces/registration';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    MatMomentDateModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [{ provide: DateAdapter, useClass: NativeDateAdapter }],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationFormGroup!: FormGroup;
  maritalStatus: string = '';
  workingProfessional: boolean = false;
  childrenCount: number = 0;
  childrenArray: number[] = [];
  registrationService = inject(RegistrationService);

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registrationFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      isWorkingProfessional: ['', Validators.required],
      occupation: ['', Validators.required],
      company: ['', Validators.required],

      fatherName: ['', Validators.required],
      fatherDOB: ['', Validators.required],
      motherName: ['', Validators.required],
      motherDOB: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      spouseName: ['', Validators.required],
      spouseDOB: ['', Validators.required],
      numberOfChildren: ['', Validators.required],
      child1_Name: ['', Validators.required],
      child1_dob: ['', Validators.required],
      child2_Name: ['', Validators.required],
      child2_dob: ['', Validators.required],
      child3_Name: ['', Validators.required],
      child3_dob: ['', Validators.required],
      child4_Name: ['', Validators.required],
      child4_dob: ['', Validators.required],

      rDoorNumber: ['', Validators.required],
      rStreet: ['', Validators.required],
      rLandmark: ['', Validators.required],
      rDistrict: ['', Validators.required],
      rPincode: ['', Validators.required],
      rState: ['', Validators.required],
      wDoorNumber: ['', Validators.required],
      wStreet: ['', Validators.required],
      wLandmark: ['', Validators.required],
      wDistrict: ['', Validators.required],
      wPincode: ['', Validators.required],
      wState: ['', Validators.required],
    });
  }

  updateMaritalStatus(status: string) {
    this.maritalStatus = status;
  }

  updateChildrenCount(event: MatSelectChange): void {
    const count = event?.value;
    if (count !== undefined) {
      this.childrenCount = count;
    }
    this.childrenArray = Array.from({ length: count }, (_, index) => index + 1);
  }

  updateWorkingProfessionalStatus(status: string) {
    this.workingProfessional = status === 'yes';
    this.registrationFormGroup.patchValue({
      isWorkingProfessional: this.workingProfessional,
    });
  }

  serializeDate(date: any): string {
    return date instanceof Date ? date.toISOString() : date;
  }

  btnSubmit(): void {
    const personalDetails: IPersonalDetails = {
      firstName: this.registrationFormGroup.value.firstName,
      lastName: this.registrationFormGroup.value.lastName,
      dateOfBirth: this.registrationFormGroup.value.dateOfBirth.toISOString(),
      gender: this.registrationFormGroup.value.gender,
      emailId: this.registrationFormGroup.value.emailId,
      mobile: this.registrationFormGroup.value.mobile,
      isWorkingProfessional:
        this.registrationFormGroup.value.isWorkingProfessional,
      occupation: this.registrationFormGroup.value.occupation,
      company: this.registrationFormGroup.value.company,
    };

    const familyDetails: IFamilyDetails = {
      fatherName: this.registrationFormGroup.value.fatherName,
      fatherDOB: this.registrationFormGroup.value.fatherDOB.toISOString(),
      motherName: this.registrationFormGroup.value.motherName,
      motherDOB: this.registrationFormGroup.value.motherDOB.toISOString(),
      martialStatus: this.registrationFormGroup.value.martialStatus,
      spouseName: this.registrationFormGroup.value.spouseName,
      spouseDOB: this.registrationFormGroup.value.spouseDOB.toISOString(),
      numberOfChildren: this.registrationFormGroup.value.numberOfChildren,
      child1_Name: this.registrationFormGroup.value.child1_Name,
      child1_dob: this.registrationFormGroup.value.child1_dob.toISOString(),
      child2_Name: this.registrationFormGroup.value.child2_Name,
      child2_dob: this.registrationFormGroup.value.child2_dob.toISOString(),
      child3_Name: this.registrationFormGroup.value.child3_Name,
      child3_dob: this.registrationFormGroup.value.child3_dob.toISOString(),
      child4_Name: this.registrationFormGroup.value.child4_Name,
      child4_dob: this.registrationFormGroup.value.child4_dob.toISOString(),
    };

    const addressDetails: IAddressDetails = {
      rDoorNumber: this.registrationFormGroup.value.rDoorNumber,
      rStreet: this.registrationFormGroup.value.rStreet,
      rLandmark: this.registrationFormGroup.value.rLandmark,
      rDistrict: this.registrationFormGroup.value.rDistrict,
      rPincode: this.registrationFormGroup.value.rPincode,
      rState: this.registrationFormGroup.value.rState,
      wDoorNumber: this.registrationFormGroup.value.wDoorNumber,
      wStreet: this.registrationFormGroup.value.wStreet,
      wLandmark: this.registrationFormGroup.value.wLandmark,
      wDistrict: this.registrationFormGroup.value.wDistrict,
      wPincode: this.registrationFormGroup.value.wPincode,
      wState: this.registrationFormGroup.value.wState,
    };

    const registrationDetails: IRegistration = {
      personalDetails: personalDetails,
      familyDetails: familyDetails,
      addressDetails: addressDetails,
    };
    console.log(
      'Serialized Payload:',
      personalDetails.dateOfBirth.toISOString()
    );
    this.registrationService.NewRegistration(registrationDetails).subscribe(
      (response) => {
        alert('Successfully Registered');
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
