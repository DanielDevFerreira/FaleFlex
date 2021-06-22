import { Exclude } from "class-transformer";
import { tb_usuario_login } from "src/auth/entity/auth.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tb_usuario{
    @PrimaryGeneratedColumn({type: "bigint"})
    id_usuario: number;

    @Column({ length: 100})
    nome: string;

    @Column({ length: 20, unique: true })
    cpf_cnpj: string;

    @Column({ length: 20 })
    nome_tts: string;

    @Column({ type: "tinyint"})
    id_status: number;

    @Column({ type: "tinyint"})
    id_tipo_usuario: number;

    @Column({ length: 100, nullable: true})
    endereco: string;

    @Column({ length: 20, nullable: true })
    subdominio: string;

    @Column({ length: 100, nullable: true })
    responsavel_financeiro: string;

    @Column({ length: 20, nullable: true })
    telefone_financeiro: string;

    @Column({ length: 100, nullable: true })
    email_financeiro: string;

    @Column({ length: 100, nullable: true })
    responsavel_tecnico: string

    @Column({ length: 20, nullable: true })
    telefone_tecnico: string

    @Column({ length: 100, nullable: true })
    email_tecnico: string

    @Column({ length: 500, nullable: true })
    observacao: string;

    @Column({ type: "bigint", nullable: true})
    id_login_insert: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    dt_insert: string;

    @Column({ type: "bigint", nullable: true})
    id_login_update: number;

    @Column({ type: "datetime", nullable: true})
    dt_update: Date;

    //criação da chave estrangeira na tabela tb_usuario relacionado com a tabela tb_usuario_login
    // @OneToOne(() => tb_usuario_login, login => login.user_login) 
    // @JoinColumn()
    // user: tb_usuario_login;
}