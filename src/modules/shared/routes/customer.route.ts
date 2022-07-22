import { Service } from 'typedi';
import { CustomerController } from '../../customer/controllers';
import { BaseRoute } from '../routes';

@Service()
export class CustomerRoute extends BaseRoute {
    public path: string;

    constructor (
        private readonly customerController: CustomerController,
    ) {
        super();
        this.initializeRoutes();
    }

    protected initializeRoutes(): void {
        this.router.get(
            `${this.path}`,
            this.customerController.getAll,
        );

        this.router.get(
            `${this.path}/:id`,
            this.customerController.get,
        );
    }

}
