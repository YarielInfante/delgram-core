export interface Payload {
  id: string;
  username: string;
}

export interface UserDto {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}

export interface UserLoginDTO extends UserDto {
  readonly password: string;
}

export interface UserRegisterDTO extends UserDto {
  password: string;
}
