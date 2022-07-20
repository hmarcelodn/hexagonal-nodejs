export interface CreateTrainUseCase {
    create(trainInputModel: any): Promise<void>;
}
