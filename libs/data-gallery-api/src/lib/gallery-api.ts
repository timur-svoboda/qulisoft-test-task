import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CLIENT_ID } from "./constants";
import {
  GetFullPhotoArgs,
  GetFullPhotoResult,
  GetGalleryPhotosArgs,
  GetGalleryPhotosResult,
} from "./types";

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.unsplash.com/" }),
  endpoints: (builder) => ({
    getGalleryPhotos: builder.query<
      GetGalleryPhotosResult,
      GetGalleryPhotosArgs
    >({
      query: (page) => `photos?client_id=${CLIENT_ID}&page=${page}&per_page=20`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getFullPhoto: builder.query<GetFullPhotoResult, GetFullPhotoArgs>({
      query: (id) => `photos/${id}?client_id=${CLIENT_ID}`,
    }),
  }),
});
