import { Controller, Get, Param } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { CommentariesService } from '../../services/commentaries/commentaries.service';
@ApiUseTags('Commentaries')
@Controller('commentaries')
export class CommentariesController {

    constructor(private service: CommentariesService) { }

    @Get(':id')
    @ApiOperation({ title: 'Gets commentaries by match id' })
    GetById(@Param('id') id: string) {
        return this.service.getById(id);
    }
}
