import { IsString, MinLength } from "class-validator";

// inf que espero del post
export class CreateBrandDto {

    @IsString()
    @MinLength(1)
    name: string
}
