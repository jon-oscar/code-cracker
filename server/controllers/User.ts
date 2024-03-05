import { Request, Response } from 'express';
import User from '../models/User';
import sanitize from 'mongo-sanitize';

class UserController {
  // Create User
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const sanitizedBody = sanitize(req.body);
      const existingUser = await User.findOne({
        $or: [
          { email: sanitizedBody.email },
          { username: sanitizedBody.username },
        ],
      });
      if (existingUser) {
        res.status(400).json({ message: 'Username or email already exists' });
        return;
      }
      const newUser = new User(sanitizedBody);
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create user' });
    }
  }

  // Get Single User
  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const sanitizedId = sanitize(req.params.id);
      const user = await User.findById(sanitizedId);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get user' });
    }
  }

  // Get Users
  public async get(req: Request, res: Response): Promise<void> {
    const users = await User.find();
    res.json(users);
  }

  // Update User
  public async update(req: Request, res: Response): Promise<void> {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update user' });
    }
  }

  // Delete User
  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
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
