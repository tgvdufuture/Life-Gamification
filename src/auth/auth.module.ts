import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Auth0Strategy } from './auth0.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule.register({ session: true })],
  providers: [AuthService, Auth0Strategy],
  controllers: [AuthController],
})
export class AuthModule {}
