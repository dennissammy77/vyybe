import { Inject, Service } from "@tsed/di";
import { users } from "src/db/schema/user.js";
import { db } from "../../../db/index.js";
import { eq, or } from "drizzle-orm";
import { CreateUserDto } from "../user/userDto.js";
import IdGenerator from "src/lib/uid.js";
import { ResultEnum } from "src/lib/response.js";

@Service()
export default class AuthRepository {
  private model: typeof users
  
  constructor(){
    this.model = users
  }

  public create = async(data:CreateUserDto)=>{
    // Check if email and mobile exists
    const userWithCredentials = await db
      .select()
      .from(this.model)
      .where(or(
        eq(this.model.email, data.email),
        eq(this.model.mobile, data.mobile),
      ))
      .limit(1);

    if (userWithCredentials) return {
      result_code: ResultEnum.EXISTS,
      error: true, 
      message: 'User already exists.', 
      data: null
    };
    
    const id = IdGenerator.generate();
    data.id  = id;

    const [createdUser] = await db
      .insert(this.model)
      .values(data)
      .returning()
      .execute();

    if (!createdUser) return {
      result_code: ResultEnum.ERROR,
      error: true, 
      message: 'User could not be created.', 
      data: null
    };
    
    return {
      result_code: ResultEnum.CREATED,
      error: false, 
      message: 'User created successfully', 
      data: createdUser
    };
  }
}