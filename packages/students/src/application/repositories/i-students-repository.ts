export interface IStudentsRepository {
    findById(id: string): Promise<Student>;
    insert(student: Student): Promise<boolean>;
}
