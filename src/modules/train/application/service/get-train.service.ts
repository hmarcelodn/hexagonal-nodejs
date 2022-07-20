import { GetTrainUseCase } from '../port/in';

export class GetTrainService implements GetTrainUseCase {
    get(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
