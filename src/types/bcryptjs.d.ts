declare module 'bcryptjs' {
  const bcrypt: {
    genSaltSync(rounds?: number): string;
    hashSync(data: string, salt: string | number): string;
    compareSync(data: string, encrypted: string): boolean;
  };
  export default bcrypt;
}


