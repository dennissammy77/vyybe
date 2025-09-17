import {Controller, Inject} from "@tsed/di";
import {Get, Post, Produces, Returns} from "@tsed/schema";
import { CreateUserDto, userDto } from "../user/userDto.js";
import { BodyParams } from "@tsed/platform-params";
import { ServiceStatusCode } from "src/lib/response.js";
import AuthService from "./auth.service.js";
import { PlatformResponse, Res } from "@tsed/platform-http";

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
  public loginUserController(){
    return "World"
  }
}
