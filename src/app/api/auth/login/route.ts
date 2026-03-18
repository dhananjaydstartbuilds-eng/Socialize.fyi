import { loginUser } from '@/lib/controllers/authController';

export async function POST(req: Request) {
  return loginUser(req);
}
