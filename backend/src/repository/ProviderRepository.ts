import {Provider} from "../model/db/Provider";
import {CreateProvider} from "../model/dto/provider/CreateProvider";
import {UpdateProvider} from "../model/dto/provider/UpdateProvider";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";
import {CUDRepository} from "./base/CUDRepository";

/**
 * Repository interface for managing providers.
 * @extends CUDRepository<Provider, CreateProvider, UpdateProvider>
 * @extends RPaginatingRepository<Provider>
 */
export interface ProviderRepository extends CUDRepository<Provider, CreateProvider, UpdateProvider>, RPaginatingRepository<Provider> {

}