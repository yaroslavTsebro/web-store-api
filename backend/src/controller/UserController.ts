import {
  controller,
  httpGet,
  interfaces,
  request,
  response
} from "inversify-express-utils";
import {inject} from "inversify";
import {UserService} from "../service/UserService";
import express from "express";
import {TYPES} from "../constant/types";

@controller("/user")
export class UserController implements interfaces.Controller {

  constructor(@inject(TYPES.UserService) private userService: UserService) {}

  @httpGet('/')
  private async getAll(
      @request() req: express.Request, @response() res: express.Response) {
    try {
      const result = await this.userService.getAll();
      res.json(result).end();
    } catch (err) {
      res.status(400).json({error: err});
    }
  }
}