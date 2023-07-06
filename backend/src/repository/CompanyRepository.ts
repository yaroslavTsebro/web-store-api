import {Company} from "../model/db/Company";
import {CreateCompany} from "../model/dto/company/CreateCompany";
import {UpdateCompany} from "../model/dto/company/UpdateCompany";
import {CUDRepository} from "./base/CUDRepository";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";

export interface CompanyRepository extends CUDRepository<Company, CreateCompany, UpdateCompany>, RPaginatingRepository<Company> {

}