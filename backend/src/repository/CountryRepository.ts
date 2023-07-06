import {CRUDRepository} from "./base/CRUDRepository";
import {Country} from "../model/db/Country";
import {CreateCountry} from "../model/dto/country/CreateCountry";
import {UpdateCountry} from "../model/dto/country/UpdateCountry";

export interface CountryRepository extends CRUDRepository<Country, CreateCountry, UpdateCountry> {

}