import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("api")
export class AppController {
  @UseGuards(AuthGuard("jwt"))
  @Get("me")
  getProfile(@Request() req) {
    return req.user;
  }
}
