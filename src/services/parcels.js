import { ParcelsCollection } from '../db/models/parcel.js';

export const createParcel = (payload) => ParcelsCollection.create(payload);

export const updateParcel = (id, parcelData) => {
  return ParcelsCollection.findByIdAndUpdate(id, parcelData, {
    new: true,
  });
};

export const deleteParcel = (id) => ParcelsCollection.findByIdAndDelete(id);
