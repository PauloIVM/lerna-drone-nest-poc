import { IStudentsRepository } from "../repositories/i-students-repository";
import { IAuthGateway } from "../gateways/i-auth-gateway";
import someUtil from "lerna-poc-pack-util";

export class InsertUsecase {
    private studentsRepository: IStudentsRepository;
    private authGateway: IAuthGateway;

    constructor(
        authGateway: IAuthGateway,
        studentsRepository: IStudentsRepository,
    ) {
        this.studentsRepository = studentsRepository;
        this.authGateway = authGateway;
    }

    async exec(token: string, name: string, email: string) {
        const studentId = this.authGateway.verify(token);
        someUtil();
        if (!studentId) {
            throw new Error("Bad token");
        }
        await this.studentsRepository.insert(new Student(
            studentId,
            name,
            email
        ));
    }
}
