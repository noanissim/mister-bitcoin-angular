import { Contact } from './contact.model';
import { User } from './user.model';

export interface Move {
  to: Contact;
  from: User;
  amount: number;
  at: Date;
}
