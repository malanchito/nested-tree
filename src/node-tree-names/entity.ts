import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'
import NodeTree from '../node-tree/entity'

@Entity()
export default class NodeName extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable: false})
  level: string

  @IsString()
  @Column('text', {nullable: false})
  ileft: string

  @ManyToOne(() => NodeTree, (node) => node.names)
  node: NodeTree
}