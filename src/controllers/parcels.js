import createHttpError from 'http-errors';
import {
  createParcel,
  deleteParcel,
  updateParcel,
} from '../services/parcels.js';

export const createParcelController = async (req, res) => {
  const parcel = await createParcel(req.body);

  res.status(201).json({
    status: 201,
    message: 'Parcel has been successfully added',
    data: parcel,
  });
};

export const updateParcelController = async (req, res) => {
  const { id } = req.params;

  const parcel = await updateParcel(id, req.body);

  if (!parcel) {
    throw createHttpError(404, 'Parcel is not found');
  }

  res.json({
    status: 200,
    message: 'Parcel is updated',
    data: parcel,
  });
};

export const deleteParcelController = async (req, res) => {
  const { id } = req.params;

  const parcel = await deleteParcel(id);

  if (!parcel) {
    throw createHttpError(404, 'Parcel not found');
  }

  res.status(204).send();
};
