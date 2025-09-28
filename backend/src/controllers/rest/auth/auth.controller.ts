import {Controller, Inject} from "@tsed/di";
import {Get, Post, Produces, Returns} from "@tsed/schema";
import { CreateUserDto, userDto } from "../../../modules/users/userDto.js";
import { BodyParams } from "@tsed/platform-params";
import { ServiceStatusCode } from "src/lib/response.js";
import AuthService from "../../../modules/auth/auth.service.js";
import { PlatformResponse, Res } from "@tsed/platform-http";
import jwt from "jsonwebtoken";
import cookie from "cookie";

@Controller("/auth")
export class AuthController {
  @Inject()
  private authService: AuthService;

  @Post("/register")
  @Produces("application/json")
  @(Returns(201, userDto).Description("User created successfully"))
  public async createUser(@Res() response: PlatformResponse,@BodyParams() body: CreateUserDto) {
    const result = await this.authService.createUser(body);
    return response.status(result.code).body(result)
  }

  @Post("/login")
  @Produces("application/json")
  @(Returns(201, userDto).Description("User logged in successfully"))
  public async loginUserController(@Res() response: PlatformResponse,@BodyParams() body: {idToken: string}){
    try{
      const user = await this.authService.verifyGoogleToken(body.idToken);
      const result = await this.authService.createUser(user);
      const token = jwt.sign(
        { id: user?.id, email: user?.email },
        process.env.JWT_SECRET!,
        { expiresIn: "7d" }
      );
      response.setHeader(
        "Set-Cookie",
        cookie.serialize("auth_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // send only over HTTPS
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60, // 7 days
          path: "/",
        })
      );
      return response.status(result.code).body(result)
    }catch(err){
      console.log(err);
      return response.status(500)
    }
  }
};