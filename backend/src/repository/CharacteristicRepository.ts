import {Characteristic} from "../model/db/Characteristic";
import {
  CreateCharacteristic
} from "../model/dto/characteristic/CreateCharacteristic";
import {
  UpdateCharacteristic
} from "../model/dto/characteristic/UpdateCharacteristic";
import {CUDRepository} from "./base/CUDRepository";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";

export interface CharacteristicRepository extends CUDRepository<Characteristic, CreateCharacteristic, UpdateCharacteristic>,
    RPaginatingRepository<Characteristic> {

}