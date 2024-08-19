import { IStudentsRepository } from "../repositories/i-students-repository";
import { IAuthGateway } from "../gateways/i-auth-gateway";
import someUtil from "lerna-poc-pack-util";

export class GetUsecase {
    private studentsRepository: IStudentsRepository;
    private authGateway: IAuthGateway;

    constructor(
        authGateway: IAuthGateway,
        studentsRepository: IStudentsRepository,
    ) {
        this.studentsRepository = studentsRepository;
        this.authGateway = authGateway;
    }

    async exec(token: string) {
        const studentId = this.authGateway.verify(token);
        someUtil();
        const result = await this.studentsRepository.findById(studentId);
        return result;
    }
}
