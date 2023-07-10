import {Company} from "../model/db/Company";
import {CreateCompany} from "../model/dto/company/CreateCompany";
import {UpdateCompany} from "../model/dto/company/UpdateCompany";
import {CUDRepository} from "./base/CUDRepository";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";

/**
 * Repository interface for managing companies.
 * @extends CUDRepository<Company, CreateCompany, UpdateCompany>
 * @extends RPaginatingRepository<Company>
 */
export interface CompanyRepository extends CUDRepository<Company, CreateCompany, UpdateCompany>, RPaginatingRepository<Company> {

}