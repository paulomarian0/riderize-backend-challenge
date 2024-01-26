export interface IUserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  list(): Promise<User[]>;
  delete(id: string): Promise<void>;
}
