export interface TrainPort {
    createTrain(train: any): Promise<any>;
    getTrains(): Promise<any[]>;
}
