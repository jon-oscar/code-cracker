import { Request, Response } from 'express';
import UserModel, { IUser } from '../models/User';
import sanitize from 'mongo-sanitize';
import { RequestUser, ResponseUser } from '../../types/User';

class UserController {
  // Create User
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const sanitizedBody: RequestUser = sanitize(req.body);
      const existingUser: IUser | null = await UserModel.findOne({
        $or: [
          { email: sanitizedBody.email },
          { username: sanitizedBody.username },
        ],
      });
      if (existingUser) {
        res.status(400).json({ message: 'Username or email already exists' });
        return;
      }
      const newUser: IUser = new UserModel(sanitizedBody);
      const user: IUser = await newUser.save();
      const responseUser: ResponseUser = {
        id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
      };
      res.status(201).json(responseUser);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create user' });
    }
  }

  // Get Single User
  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const sanitizedId: ResponseUser['id'] = sanitize(req.params.id);
      const user: IUser | null = await UserModel.findById(sanitizedId);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      const responseUser: ResponseUser = {
        id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
      };
      res.json(responseUser);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get user' });
    }
  }

  // Get Users
  public async get(req: Request, res: Response): Promise<void> {
    try {
      const users: IUser[] = await UserModel.find();
      const responseUsers: ResponseUser[] = users.map((user: IUser) => {
        return {
          id: user._id,
          username: user.username,
          email: user.email,
          password: user.password,
        };
      });
      res.json(responseUsers);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get users' });
    }
  }

  // Update User
  public async update(req: Request, res: Response): Promise<void> {
    try {
      const user: IUser | null = await UserModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        },
      );
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      const responseUser: ResponseUser = {
        id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
      };
      res.json(responseUser);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update user' });
    }
  }

  // Delete User
  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const user: IUser | null = await UserModel.findByIdAndDelete(
        req.params.id,
      );
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete user' });
    }
  }
}

export default new UserController();
