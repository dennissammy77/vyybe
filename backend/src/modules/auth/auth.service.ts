import { Inject, Service } from "@tsed/di";
import { CreateUserDto } from "../users/userDto.js";
import AuthRepository from "./auth.repository.js";
import { ResultEnum, ServiceStatusCode } from "src/lib/response.js";
import { OAuth2Client } from "google-auth-library";

@Service()
export default class AuthService {
  @Inject()
  private readonly authRepository: AuthRepository;
  private client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  public verifyGoogleToken = async(idToken: string)=>{
    const ticket = await this.client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) throw new Error("Invalid Google token");

    return {
      email: payload.email,
      name: payload.name,
      photoUrl: payload.picture,
      id: payload.sub,
      role: 'user'
    };
  };
  
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