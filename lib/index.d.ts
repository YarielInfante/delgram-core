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
export declare class UserRegisterDTO implements UserDto {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    password: string;
}
export interface TokenPayload {
    token: string;
    user: UserDto;
}
