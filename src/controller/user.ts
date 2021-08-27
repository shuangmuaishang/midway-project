import { Controller, Get, Provide, Query, SetHeader } from '@midwayjs/decorator';
import { User } from '../interface';

@Provide()
@Controller('/')
export class UserController {
  @Get('/api/user')
  @SetHeader({
    'x-bbb': '123',
    'x-aaa': '333'
  })
  async getUser(@Query() id: number): Promise<User> {
    return {
      id: Number(id),
      name: 'liu',
      age: 11
    };
  }
}
