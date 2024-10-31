import { Request, Response } from 'express';
import { BaseResponse } from '../../abstractions/base-response';
import { BaseController } from '../../abstractions/base-controller';
import User from '../../model/entity/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthController extends BaseController {
  registrationContoller = async (request: Request, response: Response) => {
    try {
      const { fullname, email, password } = request.body;

      if (!fullname || !email || !password) {
        BaseResponse.error('fullname or email or password was required for registration', response, '400');
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        fullname,
        email,
        password: hashedPassword,
      });

      await newUser.save();
      BaseResponse.ok(newUser, 'Successfully regisration', response);
    } catch (error: any) {
      BaseResponse.error(error.message || error, response);
    }
  };

  loginContoller = async (request: Request, response: Response) => {
    try {
      const { email, password } = request.body;

      const user = await User.findOne({ email });
      if (!user) {
        BaseResponse.error('Invalid username or password', response, '400');
      }

      const isMatch = await bcrypt.compare(password, user!.password);
      if (!isMatch) {
        BaseResponse.error('Invalid username or password', response, '400');
      }

      await User.updateOne({ email }, { lastLogin: new Date(), is_login: true });

      const token = jwt.sign({ userId: user?._id, email: user?.email }, process.env.JWT_SECRET || 'your_jwt_secret', {
        expiresIn: '1d',
      });

      BaseResponse.ok({ id: user?._id, token }, 'Successfully login', response);
    } catch (error: any) {
      BaseResponse.error(error.message || error, response);
    }
  };
}

export default new AuthController();
