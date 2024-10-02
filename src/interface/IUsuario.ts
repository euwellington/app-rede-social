export interface IGeo {
    lat: string;
    lng: string;
  }
  
  export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
  }
  
  export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  export interface IUser {
    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    address?: IAddressRequest;
    phone: string;
    website: string;
    company: ICompany;
  }
  
export interface IUserRequest extends Partial<IUser> {};
export interface IAddressRequest extends Partial<IAddress> {};
