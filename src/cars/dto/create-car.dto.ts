import { IsString, MinLength } from "class-validator";

// los DTOs siempre son clases
export class CreateCarDto {

    // @IsString({ message: `mi mensaje personalizado`})  //realmente puedes personalizar cualquier decorador
    @IsString()
    readonly brand: string;
    
    @IsString()
    @MinLength(3)
    readonly model: string;
}






