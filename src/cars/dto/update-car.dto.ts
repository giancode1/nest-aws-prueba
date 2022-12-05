import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

// los DTOs siempre son clases
export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    
    @IsString()
    @IsOptional()
    readonly brand?: string;
    
    @IsString()
    @IsOptional()
    @MinLength(3)
    readonly model?: string;
}






