import { tb_servidor } from "src/servidor/entity/servidor.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tb_ramal{

    @PrimaryGeneratedColumn({ type: "int"})
    id_ramal: number

    @Column({type: "int"})
    id_servidor: number;

    @Column({ type: "int", nullable: true})
    id_cliente: number;

    @Column({ type: "int"})
    ramal: number;

    @Column({ length: 45})
    senha: string;

    @Column({ type: "int"})
    id_status: number;

    @Column({ length: 45, nullable: true })
    registro: string;

    @Column({ type: "smallint", nullable: true})
    id_situacao: number;

    @Column({ length: 500, nullable: true })
    observacao: string;

    @Column({ type: "bigint"})
    id_login_insert: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    dt_insert: string;

    @Column({ type: "bigint", nullable: true})
    id_login_update: number;

    @Column({ type: "datetime", nullable: true})
    dt_update: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

    @OneToMany(type => tb_servidor, servidor => servidor.ramal)
    servidor: tb_servidor[];

}