import { Model } from '@appstrax/database';

export class Office extends Model {
  name: string = '';
  address: string = '';
  email: string = '';
  phone?: number;
  capacity?: number;
  color: string = '';
  members: string[] = [];
}