import { Body, Controller, Patch, UseGuards } from "@nestjs/common";
import { CurrentUser } from "src/auth/current-user-decorator";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { UserPayload } from "src/auth/jwt.strategy";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { PrismaService } from "src/prisma/prisma.service";
import { z } from "zod";

const editProfilePhotoSchema = z.object({
  foto: z.string(),
});

const bodyValidationSchema = new ZodValidationPipe(editProfilePhotoSchema);

type EditProfilePhotoSchema = z.infer<typeof editProfilePhotoSchema>;

@Controller("/photo")
@UseGuards(JwtAuthGuard)
export class EditProfilePhotoController {
  constructor(private prisma: PrismaService) {}

  @Patch()
  async handle(
    @Body(bodyValidationSchema) body: EditProfilePhotoSchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { foto } = body;
    const userId = user.sub;

    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        foto,
      },
    });
  }
}
