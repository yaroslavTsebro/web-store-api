import {RRepository} from "./crud/RRepository";
import {CUDRepository} from "./CUDRepository";

export interface CRUDRepository<R, C, U> extends CUDRepository<R, C, U>, RRepository<R> {
}