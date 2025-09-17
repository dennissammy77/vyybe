import { Inject, Service } from "@tsed/di";
import { CreateUserDto } from "../user/userDto.js";
import AuthRepository from "./auth.repository.js";
import { ResultEnum, ServiceStatusCode } from "src/lib/response.js";

@Service()
export default class AuthService {
  @Inject()
  private readonly authRepository: AuthRepository;

  public createUser = async (data: CreateUserDto)=>{
    try {
      const result = await this.authRepository.create(data);
  
      if (!result.error && result.result_code === ResultEnum.ERROR) throw new Error(result.message);

      if (!result.error) return {
        status: ServiceStatusCode.WARNING,
        code: result.result_code,
        message: result.message,
        data: result.data
      };
      
      return {
        status: ServiceStatusCode.SUCCESS,
        code: result.result_code,
        message: result.message,
        data: result.data
      };
    } catch (error) {
      return {
        status: ServiceStatusCode.FAILURE,
        code: ResultEnum.ERROR,
        message: error.message,
        data: null
      };
    }
  }
}