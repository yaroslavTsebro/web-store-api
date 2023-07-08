import {
  controller,
  httpGet,
  interfaces,
  queryParam,
  request,
  next,
  response
} from "inversify-express-utils";
import {inject} from "inversify";
import {UserService} from "../service/UserService";
import express from "express";
import axios from 'axios';
import {TYPES} from "../constant/types";
import {config} from "../config/config";
import {GoogleOAuthConstants} from "../constant/GoogleOAuthConstants";

@controller("/user")
export class UserController implements interfaces.Controller {

  constructor(@inject(TYPES.UserService) private userService: UserService) {}

  @httpGet('/auth/google')
  private async authGoogle(
      @request() req: express.Request, @response() res: express.Response,
      @next() next: express.NextFunction) {
    try {
      res.redirect(this.userService.getGoogleAuthUrl());
    } catch (err) {
      next()
    }
  }

  @httpGet('/auth/google/callback')
  private async googleCallback(
      @request() req: express.Request,
      @queryParam() code: string,
      @response() res: express.Response,
      @next() next: express.NextFunction) {
    try {
      res.send(`Successfully registered with Google. User ID: ${sub}`);
    } catch (err) {
      next()
    }
  }
}