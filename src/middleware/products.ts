import { Request, Response, NextFunction } from 'express';

const validNameProducts = async (req:Request, res:Response, next:NextFunction) => {
  const { name } = req.body;
  if (!name) { return res.status(400).json({ error: 'Name is required' }); }

  if (typeof name !== 'string') {
    return res.status(422).json({ error: 'Name must be a string' });
  }

  if (name.length < 3) { 
    return res.status(422).json({ error: 'Name must be longer than 2 characters' }); 
  }
  next();
};

export const validAmountProducts = async (req:Request, res:Response, next:NextFunction) => {
  const { amount } = req.body;
  if (!amount) { return res.status(400).json({ error: 'Amount is required' }); }

  if (typeof amount !== 'string') {
    return res.status(422).json({ error: 'Amount must be a string' });
  }

  if (amount.length < 3) { 
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' }); 
  }
  next();
};

export const validAProducts = async (req:Request, res:Response, next:NextFunction) => {
  const { products } = req.body;
  if (!products) { return res.status(400).json({ error: 'Products is required' }); }

  if (!Array.isArray(products)) {
    return res.status(422).json({ error: 'Products must be an array of numbers' });
  }

  if (products.length < 1) { 
    return res.status(422).json({ error: 'Products can\'t be empty' }); 
  }
  next();
};

export default validNameProducts;