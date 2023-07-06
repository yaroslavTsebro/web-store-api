import {Provider} from "../model/db/Provider";
import {CreateProvider} from "../model/dto/provider/CreateProvider";
import {UpdateProvider} from "../model/dto/provider/UpdateProvider";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";
import {CUDRepository} from "./base/CUDRepository";

export interface ProviderRepository extends CUDRepository<Provider, CreateProvider, UpdateProvider>, RPaginatingRepository<Provider> {

}