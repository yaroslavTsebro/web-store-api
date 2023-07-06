import {CRepository} from "./crud/CRepository";
import {URepository} from "./crud/URepository";
import {DRepository} from "./crud/DRepository";

export interface CUDRepository<R, C, U> extends CRepository<C, R>, DRepository, URepository<U, R> {

}