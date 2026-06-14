import { Request, Response } from "express";
import healthService from "../services/health.service";

const getHealth = (_req: Request, res: Response) => {
  const data = healthService.getHealthStatus();

  res.status(200).json(data);
};

export default {
  getHealth,
};