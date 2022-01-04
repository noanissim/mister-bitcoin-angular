export class Contact {
  constructor(
    public name: string = '',
    public email: string = '',
    public phone: string = '',
    public _id?: string,
    public imgUrl: string = ''
  ) {}

  setId?() {
    // Implement your own set Id
    this._id = makeId();
    // this._id = '12345';
  }
}

function makeId(length = 5) {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
