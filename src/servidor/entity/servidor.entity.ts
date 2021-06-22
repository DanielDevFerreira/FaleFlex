import { tb_ramal } from "src/ramal/entity/ramal.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tb_servidor{
    @PrimaryGeneratedColumn({ type: "int" })
    id_servidor: number;

    @Column({ length: 50 })
    nome: string;

    @Column({ length:15 })
    ip: string;

    @Column({ type: "tinyint"})
    id_status: number;

    @Column({ length: 20, nullable: true })
    http_usuario: string;

    @Column({ length: 20, nullable: true })
    http_senha: string;

    @Column({ type:"int", nullable: true })
    http_porta: number;

    @Column({ length: 20, nullable: true})
    ami_usuario: string;

    @Column({ length: 20, nullable: true})
    ami_senha: string;

    @Column({ type: "int", nullable: true})
    ami_porta: number;

    @Column({ length: 20, nullable: true})
    mysql_usuario: string;

    @Column({ length: 20, nullable: true})
    mysql_senha: string

    @Column({ type: "int", nullable: true})
    mysql_porta: number;

    @Column({ length: 500, nullable: true })
    observacao: string;

    @Column ({ type: "bigint"})
    id_login_insert: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    dt_insert: string;

    @Column({ type: "bigint", nullable: true})
    id_login_update: number;

    @Column({ type: "datetime", nullable: true})
    dt_update: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

    @ManyToOne(type => tb_ramal, ramal => ramal.servidor)
    ramal: tb_ramal[];
}