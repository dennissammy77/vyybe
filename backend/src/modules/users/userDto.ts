import { Default, Enum, Nullable, Property, Required } from "@tsed/schema";

export class userDto {
  @Property(String)
  id: string;

  @Property(String)
  name: string;

  @Property(String)
  mobile: string;

  @Property(String)
  email: string;

  @Property(String)
  bio?: string;

  @Enum(["user","admin"])
  @Property(String)
  role: string;
  
  @Enum(["active","deleted","suspended"])
  @Property(String)
  status: string;

  @Property(String)
  @Nullable(String)
  photoUrl?: string;

  @Property(String)
  @Nullable(String)
  location?: string;

  @Property(String)
  @Nullable(String)
  fcmToken?: string;

  @Property(Date)
  createdAt?: string;

  @Property(Date)
  updatedAt?: string;
}

export class CreateUserDto {
  @Property(String)
  @Required()
  id: string;

  @Property(String)
  @Required()
  name: string;

  @Property(String)
  @Required()
  email: string;

  @Property(String)
  @Default("user")
  role: string;

  @Property(String)
  @Nullable(String)
  photoUrl?: string;
}

export class LoginResponseDto {
  @Property(String)
  accessToken: string;

  @Property(userDto)
  user: userDto;
}