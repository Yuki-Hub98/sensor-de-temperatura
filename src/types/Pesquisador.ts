export interface PesquisadorType {
    id?: string;
    nome: string;
    senha: string;
    especialidade?: string;
    email: string;
    titulacao: string;
    matricula: string;
    linhaPesquisa?: string;
    dataNascimento: Date;
}