import { Service } from "typedi";
import { BaseController } from "../../shared/controllers/base.controller";

@Service()
export class CustomerController extends BaseController {
    constructor() {
        super();
    }

    get = () => {}

    getAll = () => {}
}
