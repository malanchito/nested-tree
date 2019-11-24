import { JsonController, Get, Param, QueryParams } from 'routing-controllers'
import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator'
import NodeTree from './entity'

class NodeQueries {

    @IsString()
    @IsNotEmpty()
    language: string;

    @IsString()
    search: string;

    @IsInt()
    pageNumber: number;

    @IsInt()
    @Min(0)
    @Max(1000)
    pageSize: number;

}

@JsonController()
export default class NodeController {

    @Get('/node/:id')
    getNode(
        @Param('id') id: number,
        @QueryParams() query: NodeQueries

    ) {
        const nodes =  NodeTree
                .getRepository()
                .createQueryBuilder('node')
                .where('node.id = :id',{ id: id })
                .where('node.language = :language', { language: query.language })
                .offset(query.pageNumber ? query.pageNumber : 0)
                .take(query.pageSize ? query.pageSize : 100)

        return nodes
        
    }


}