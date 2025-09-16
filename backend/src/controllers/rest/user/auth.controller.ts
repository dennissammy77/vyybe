import {Controller} from "@tsed/di";
import {Get, Post} from "@tsed/schema";

@Controller("/auth")
export class HelloWorldController {
  @Post("/register")
  get() {
    return "hello";
  }
}
