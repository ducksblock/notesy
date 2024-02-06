import { IsNotEmpty, IsString } from "class-validator"

export class CreateNote {
    @IsString()
    title: string

    @IsString()
    content: string
}

export class EditNote {
    @IsString()
    title?: string

    @IsString()
    content?: string
}

export class NoteID {
    @IsNotEmpty()
    @IsString()
    id: string;
}