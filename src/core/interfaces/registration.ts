import { IAddressDetails } from './addressDetails';
import { IFamilyDetails } from './familyDetails';
import { IPersonalDetails } from './personalDetails';

export interface IRegistration {
  personalDetails: IPersonalDetails;
  familyDetails: IFamilyDetails;
  addressDetails: IAddressDetails;
}
