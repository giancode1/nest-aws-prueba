import { IsString } from "class-validator";

// los DTOs siempre son clases
export class CreateCarDto {

    // @IsString({ message: `mi mensaje personalizado`})
    @IsString()
    readonly brand: string;
    
    @IsString()
    readonly model: string;
}






