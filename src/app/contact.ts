export interface IContacts {
    id: number;
    firstName: string;
    lastName?: string;
    companyName?: string;
    jobTitle?: string;
    email?: string;
    phoneNum?: string[];
    labels?: string[];
    notes?: string;
}