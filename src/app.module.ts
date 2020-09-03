import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { GraphQLModule } from '@nestjs/graphql';
import { SkillsModule } from './skills/skills.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://localhost/nest'),

    /*MongooseModule.forRoot('mongodb://localhost/nest',{
			connectionName: 'local'
		}),*/
    MongooseModule.forRoot(
      'mongodb+srv://devendr4:04166202204@devendr4.fpgvo.mongodb.net/api_nest?retryWrites=true&w=majority',
      {
        useFindAndModify: false,
      },
    ),
    /*	
	 *	GraphQLModule.forRoot({
			autoSchemaFile: 'src/schema.gql',
			include: [SkillsModule],
		}),*/
    SkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
