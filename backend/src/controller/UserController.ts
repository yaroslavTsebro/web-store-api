import {
  controller,
  cookies,
  httpGet,
  httpPost,
  interfaces,
  next,
  queryParam,
  request,
  response
} from "inversify-express-utils";
import {inject} from "inversify";
import {UserService} from "../service/UserService";
import express from "express";
import {TYPES} from "../constant/types";
import {GoogleOAuthService} from "../service/oauth/GoogleOAuthService";
import {config} from "../config/config";
import {ILogger} from "../config/ILogger";

@controller("/user")
export class UserController implements interfaces.Controller {

  constructor(
      @inject(TYPES.UserService) private userService: UserService,
      @inject(TYPES.Logger) private logger: ILogger,
      @inject(TYPES.GoogleOAuthService)
      private googleOAuthService: GoogleOAuthService) {}

  @httpGet('/auth/google')
  private async authGoogle(
      @request() req: express.Request, @response() res: express.Response,
      @next() nextF: express.NextFunction) {
    try {
      res.redirect(this.userService.getGoogleAuthUrl());
    } catch (err) {
      nextF()
    }
  }

  @httpGet('/auth/google/callback')
  private async googleCallback(
      @request() req: express.Request,
      @queryParam() code: string,
      @response() res: express.Response,
      @next() nextF: express.NextFunction) {
    try {
      const tokens = await this.userService.googleCallback(code);
      UserController.addRefreshTokenToCookie(res, tokens.refreshToken);
      res.sendStatus(200);
    } catch (err) {
      nextF()
    }
  }

  @httpPost('/refresh')
  private async refresh(
      @request() req: express.Request,
      @cookies('refreshToken') refreshToken: string,
      @response() res: express.Response,
      @next() nextF: express.NextFunction
  ) {
    try {
      const tokens = await this.userService.refresh(refreshToken);
      res.json(tokens).end();
    } catch (e: any) {
      if (e.response && e.response.status === 400) {
        this.logger.info(
            'Refresh token has expired. User needs to reauthorize.');
        res.redirect(this.userService.getGoogleAuthUrl());
      } else {
        this.logger.error('Error refreshing access token:',
            e.response.data.error);
        nextF();
      }
    }
  }

  @httpPost('/logout')
  private async logout(
      @request() req: express.Request,
      @cookies('refreshToken') refreshToken: string,
      @response() res: express.Response,
      @next() nextF: express.NextFunction
  ) {
    try {
      await this.userService.logoutGoogle(refreshToken);
      res.clearCookie('refreshToken');
      res.sendStatus(200);
    } catch (err) {
      nextF()
    }
  }

  private static addRefreshTokenToCookie(res: express.Response, token: string) {
    res.cookie('refreshToken', token,
        {maxAge: config.jwt.refreshExpireDateForCookies, httpOnly: true})
  }

}