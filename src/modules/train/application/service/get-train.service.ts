import { GetTrainUseCase } from '../port/in';

export class GetTrainService implements GetTrainUseCase {
    get(): Promise<any> {
        return Promise.resolve({});
    }
}
