import { Entity, Tree, TreeChildren, PrimaryGeneratedColumn, Column, OneToMany, TreeParent } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsInt, Min } from 'class-validator'
import NodeName from '../node-tree-names/entity'

@Entity()
@Tree("nested-set")
export default class NodeTree extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @TreeChildren()
  children: NodeTree[]

  @TreeParent()
  parent: NodeTree

  @IsInt()
  @Min(1)
  @Column('int4', {nullable: false})
  level: number

  @OneToMany(() => NodeName, (name) => name.node)
  names: NodeName[]
}