import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy as Auth0StrategyBase, Profile } from 'passport-auth0';

@Injectable()
export class Auth0Strategy extends PassportStrategy(Auth0StrategyBase, 'auth0') {
  constructor() {
    super({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: `${process.env.API_URL ?? 'http://localhost:3000'}/auth/callback`,
      scope: 'openid email profile',
    });
  }

  validate(accessToken: string, refreshToken: string, extraParams: any, profile: Profile, done: Function) {
    // You can access profile information here and persist user if needed
    done(null, profile);
  }
}
