import { Usuario } from 'src/app/usuarios/usuario';

export class Task {
    id!: number;
    titulo!: string;
    descricao!: string;
    deadline!: Date;
    prioridade!: string;
    concluida!: boolean;
    responsavel!: Usuario;

}
