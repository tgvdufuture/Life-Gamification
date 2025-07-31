import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(AuthGuard('auth0'))
  login() {
    // Passport will handle the redirect to Auth0
  }

  @Get('callback')
  @UseGuards(AuthGuard('auth0'))
  callback(@Req() req: Request, @Res() res: Response) {
    res.redirect(process.env.FRONTEND_URL ?? 'http://localhost:5173');
  }

  @Get('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    (req as any).logout(() => null);
    res.redirect('/');
  }
}
