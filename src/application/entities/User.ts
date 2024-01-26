// model user {
//     id    String @id @default(uuid())
//     name  String
//     email String @unique
//   }

export class User {
  id: string;
  name: string;
  email: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
